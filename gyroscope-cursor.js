/**
 * Gyroscope Cursor — React Bits Pro Universal Browser Runtime
 * Direction-aware pointer arrow that smoothly turns toward where it moves.
 */
(function (global) {
  'use strict';

  function initGyroscopeCursor(options = {}) {
    // Disable on touch devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return {
        update: () => {},
        moveTo: () => Promise.resolve(),
        click: () => {},
        wiggle: () => {},
        destroy: () => {}
      };
    }

    // Existing cursor container check
    let cursorEl = document.getElementById('gyroscope-cursor');
    if (!cursorEl) {
      cursorEl = document.createElement('div');
      cursorEl.id = 'gyroscope-cursor';
      cursorEl.className = 'gyroscope-cursor-pointer';
      cursorEl.setAttribute('aria-hidden', 'true');

      cursorEl.innerHTML = `
        <div class="gyroscope-cursor-ripple"></div>
        <div class="gyroscope-cursor-arrow-wrap">
          <svg class="gyroscope-cursor-arrow" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 12L3.5 3.5L7.5 12L3.5 20.5L21.5 12Z" fill="var(--gyro-color, #06b6d4)" stroke="rgba(0, 0, 0, 0.55)" stroke-width="1.2" stroke-linejoin="round" />
            <circle cx="12" cy="12" r="1.5" fill="rgba(255, 255, 255, 0.95)" />
          </svg>
        </div>
        <div class="gyroscope-cursor-badge" style="display: none;"></div>
      `;

      document.body.appendChild(cursorEl);
    }

    const arrowWrap = cursorEl.querySelector('.gyroscope-cursor-arrow-wrap');
    const arrowSvg = cursorEl.querySelector('.gyroscope-cursor-arrow');
    const rippleEl = cursorEl.querySelector('.gyroscope-cursor-ripple');
    const badgeEl = cursorEl.querySelector('.gyroscope-cursor-badge');

    // Colors & Settings
    let currentColor = options.color || 'var(--accent-cyan, #06b6d4)';
    let currentGlow = options.glow || 'var(--accent-cyan-glow, rgba(6, 182, 212, 0.45))';
    let currentBadgeText = options.badgeText || 'var(--accent-btn-text, #07080c)';
    let isDisabled = Boolean(options.disabled);

    function applyColors() {
      cursorEl.style.setProperty('--gyro-color', currentColor);
      cursorEl.style.setProperty('--gyro-glow', currentGlow);
      cursorEl.style.setProperty('--gyro-badge-text', currentBadgeText);
    }
    applyColors();

    // Motion Physics
    let posX = -100;
    let posY = -100;
    let targetX = -100;
    let targetY = -100;
    let angle = -Math.PI / 4; // Default resting angle: -45 deg
    let targetAngle = -Math.PI / 4;
    let isDown = false;
    let isVisible = false;
    let isNative = false;
    let lastMoveTime = performance.now();
    let disposed = false;
    let rafId = 0;

    function triggerClickAnimation() {
      if (!cursorEl || disposed) return;
      cursorEl.classList.add('cursor-dipping');
      if (rippleEl) {
        rippleEl.classList.remove('ripple-active');
        void rippleEl.offsetWidth; // Force reflow
        rippleEl.classList.add('ripple-active');
      }
      setTimeout(() => {
        cursorEl.classList.remove('cursor-dipping');
      }, 240);
    }

    function triggerWiggleAnimation() {
      if (!arrowWrap || disposed) return;
      arrowWrap.classList.add('cursor-wiggling');
      setTimeout(() => {
        arrowWrap.classList.remove('cursor-wiggling');
      }, 450);
    }

    const onPointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isVisible = true;
      lastMoveTime = performance.now();

      // Check hovered element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
        const hasNativeAttr = el.closest('[data-cursor="native"]') !== null;
        isNative = isInput || hasNativeAttr;

        // Label Badge
        const labeledEl = el.closest('[data-cursor-label]');
        if (labeledEl && badgeEl) {
          const label = labeledEl.getAttribute('data-cursor-label') || '';
          if (label) {
            badgeEl.textContent = label;
            badgeEl.style.display = 'block';
          } else {
            badgeEl.style.display = 'none';
          }
        } else if (badgeEl) {
          badgeEl.style.display = 'none';
        }
      }
    };

    const onPointerDown = () => {
      isDown = true;
      triggerClickAnimation();
    };

    const onPointerUp = () => {
      isDown = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      if (disposed) return;

      const lerp = 0.28;
      const dx = targetX - posX;
      const dy = targetY - posY;
      const dist = Math.hypot(dx, dy);

      posX += dx * lerp;
      posY += dy * lerp;

      // When moving, orient along trajectory
      if (dist > 1.2) {
        targetAngle = Math.atan2(dy, dx);
      } else {
        const now = performance.now();
        if (now - lastMoveTime > 180) {
          // Settle gracefully back toward standard pointer angle (-45 deg)
          targetAngle = -Math.PI / 4;
        }
      }

      // Shortest-path angular interpolation
      let diff = targetAngle - angle;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      angle += diff * 0.22;

      if (cursorEl) {
        const deg = angle * (180 / Math.PI);
        const opacity = isVisible && !isNative && !isDisabled ? 1 : 0;
        cursorEl.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        cursorEl.style.opacity = String(opacity);

        if (arrowWrap) {
          arrowWrap.style.transform = `rotate(${deg}deg) scale(${isDown ? 0.84 : 1})`;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return {
      update: function (newOpts = {}) {
        if (disposed) return;
        if (newOpts.color !== undefined) currentColor = newOpts.color;
        if (newOpts.glow !== undefined) currentGlow = newOpts.glow;
        if (newOpts.badgeText !== undefined) currentBadgeText = newOpts.badgeText;
        if (newOpts.disabled !== undefined) isDisabled = Boolean(newOpts.disabled);
        applyColors();
      },
      moveTo: function (x, y, duration = 600) {
        if (disposed) return Promise.resolve();
        const startX = posX;
        const startY = posY;
        const startTime = performance.now();
        return new Promise((resolve) => {
          const step = (now) => {
            const elapsed = now - startTime;
            const t = Math.min(1, elapsed / duration);
            const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            targetX = startX + (x - startX) * ease;
            targetY = startY + (y - startY) * ease;
            if (t < 1) {
              requestAnimationFrame(step);
            } else {
              resolve();
            }
          };
          requestAnimationFrame(step);
        });
      },
      click: function () {
        triggerClickAnimation();
      },
      wiggle: function () {
        triggerWiggleAnimation();
      },
      destroy: function () {
        disposed = true;
        cancelAnimationFrame(rafId);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', onPointerUp);
        document.documentElement.removeEventListener('mouseleave', onMouseLeave);
        if (cursorEl && cursorEl.parentNode) {
          cursorEl.parentNode.removeChild(cursorEl);
        }
      }
    };
  }

  global.GyroscopeCursor = {
    init: initGyroscopeCursor
  };
  global.initGyroscopeCursor = initGyroscopeCursor;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initGyroscopeCursor };
  }
})(typeof window !== 'undefined' ? window : this);
