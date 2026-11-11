'use client';

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import './GyroscopeCursor.css';

/**
 * GyroscopeCursor — React Bits Pro
 * An arrow cursor that dynamically turns toward where it moves.
 *
 * Imperative methods exposed via ref:
 * - moveTo(x, y, duration): smoothly glides the pointer to coordinates
 * - click(): triggers a dip & ripple animation
 * - wiggle(): performs a subtle thinking shake
 */
const GyroscopeCursor = forwardRef(function GyroscopeCursor(
  {
    color = 'currentColor',
    size = 24,
    trail = true,
    interactive = true,
    disabled = false,
    autoplay = false,
    autoplaySpeed = 1,
    idleDelay = 1.5,
    className = '',
    style = {},
    children
  },
  ref
) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const arrowRef = useRef(null);
  const rippleRef = useRef(null);
  const badgeRef = useRef(null);

  // Motion state
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const angle = useRef(-Math.PI / 4); // Default -45 deg (top-left)
  const targetAngle = useRef(-Math.PI / 4);
  const speed = useRef(0);
  const isMoving = useRef(false);
  const isDown = useRef(false);
  const isVisible = useRef(false);
  const isNative = useRef(false);
  const lastMoveTime = useRef(0);
  const [badgeText, setBadgeText] = useState('');

  // Expose imperative API
  useImperativeHandle(ref, () => ({
    moveTo: (x, y, duration = 600) => {
      const startX = pos.current.x;
      const startY = pos.current.y;
      const startTime = performance.now();
      return new Promise((resolve) => {
        const step = (now) => {
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / duration);
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          target.current.x = startX + (x - startX) * ease;
          target.current.y = startY + (y - startY) * ease;
          if (t < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        requestAnimationFrame(step);
      });
    },
    click: () => {
      triggerClickAnimation();
    },
    wiggle: () => {
      triggerWiggleAnimation();
    }
  }));

  const triggerClickAnimation = () => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.add('cursor-dipping');
    if (rippleRef.current) {
      rippleRef.current.classList.remove('ripple-active');
      void rippleRef.current.offsetWidth; // Force reflow
      rippleRef.current.classList.add('ripple-active');
    }
    setTimeout(() => {
      cursorRef.current?.classList.remove('cursor-dipping');
    }, 240);
  };

  const triggerWiggleAnimation = () => {
    if (!arrowRef.current) return;
    arrowRef.current.classList.add('cursor-wiggling');
    setTimeout(() => {
      arrowRef.current?.classList.remove('cursor-wiggling');
    }, 450);
  };

  useEffect(() => {
    if (disabled) return;
    // Disable on touch devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const handlePointerMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      isVisible.current = true;
      lastMoveTime.current = performance.now();

      // Check hovered element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        // Native cursor check
        const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
        const hasNativeAttr = el.closest('[data-cursor="native"]') !== null;
        isNative.current = isInput || hasNativeAttr;

        // Label check
        const labeledEl = el.closest('[data-cursor-label]');
        if (labeledEl) {
          setBadgeText(labeledEl.getAttribute('data-cursor-label') || '');
        } else {
          setBadgeText('');
        }
      }
    };

    const handlePointerDown = () => {
      isDown.current = true;
      triggerClickAnimation();
    };

    const handlePointerUp = () => {
      isDown.current = false;
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    let rafId = 0;
    const render = () => {
      // Linear interpolation for smooth trailing
      const lerpFactor = 0.28;
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const dist = Math.hypot(dx, dy);

      pos.current.x += dx * lerpFactor;
      pos.current.y += dy * lerpFactor;
      speed.current = dist;

      // Determine movement orientation
      if (dist > 1.2) {
        isMoving.current = true;
        // Direction vector: 0 rad points directly along the X axis
        targetAngle.current = Math.atan2(dy, dx);
      } else {
        const now = performance.now();
        if (now - lastMoveTime.current > 160) {
          isMoving.current = false;
          // Rest gently toward standard pointer orientation (-45deg)
          targetAngle.current = -Math.PI / 4;
        }
      }

      // Shortest-path angular interpolation
      let angleDiff = targetAngle.current - angle.current;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      angle.current += angleDiff * 0.22;

      // Apply transforms
      if (cursorRef.current) {
        const radToDeg = angle.current * (180 / Math.PI);
        const opacity = isVisible.current && !isNative.current ? 1 : 0;
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        cursorRef.current.style.opacity = String(opacity);

        if (arrowRef.current) {
          arrowRef.current.style.transform = `rotate(${radToDeg}deg) scale(${isDown.current ? 0.84 : 1})`;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  return (
    <div ref={containerRef} className={`gyroscope-cursor-wrapper ${className}`.trim()} style={style}>
      {children}
      {!disabled && (
        <div
          ref={cursorRef}
          className="gyroscope-cursor-pointer"
          style={{ '--gyro-color': color }}
          aria-hidden="true"
        >
          {/* Ripple wave on click */}
          <div ref={rippleRef} className="gyroscope-cursor-ripple" />

          {/* Gyroscope Directional Arrow */}
          <div ref={arrowRef} className="gyroscope-cursor-arrow-wrap">
            <svg
              className="gyroscope-cursor-arrow"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Aerodynamic pointer arrow facing 0 rad (rightwards) by default */}
              <path
                d="M21.5 12L3.5 3.5L7.5 12L3.5 20.5L21.5 12Z"
                fill="var(--gyro-color, currentColor)"
                stroke="rgba(0, 0, 0, 0.45)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
            </svg>
          </div>

          {/* Floating Label Badge */}
          {badgeText && (
            <div ref={badgeRef} className="gyroscope-cursor-badge">
              {badgeText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default GyroscopeCursor;
