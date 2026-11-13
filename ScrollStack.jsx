'use client';

import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

/**
 * ScrollStackItem - Individual card wrapper within ScrollStack
 */
export const ScrollStackItem = ({ children, className = '', ...props }) => {
  return (
    <div className={`scroll-stack-card ${className}`.trim()} {...props}>
      {children}
      <div className="scroll-stack-dim" aria-hidden="true" />
    </div>
  );
};

/**
 * ScrollStack - Pinned card deck that stacks and scales cards as you scroll down
 * React Bits component variant (JavaScript + CSS)
 */
const ScrollStack = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.04,
  itemStackDistance = 24,
  stackPosition = '14%',
  baseScale = 0.86,
  dimAmount = 0.22,
  blurAmount = 0,
  rotationAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const completedRef = useRef(false);

  const parsePosition = useCallback((pos, viewportHeight) => {
    if (typeof pos === 'string' && pos.endsWith('%')) {
      return (parseFloat(pos) / 100) * viewportHeight;
    }
    if (typeof pos === 'string' && pos.endsWith('vh')) {
      return (parseFloat(pos) / 100) * viewportHeight;
    }
    return parseFloat(pos) || 120;
  }, []);

  const updateTransforms = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card')).filter(
      card => card.style.display !== 'none'
    );
    cardsRef.current = cards;

    const viewportHeight = window.innerHeight;
    const stickTop = parsePosition(stackPosition, viewportHeight);

    cards.forEach((card, index) => {
      // Configure sticky positioning
      card.style.top = `${stickTop}px`;
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      } else {
        card.style.marginBottom = '2rem';
      }

      // Calculate how many subsequent cards have scrolled to or past stick threshold
      const nextCards = cards.slice(index + 1);
      let stackDepth = 0;

      for (let j = 0; j < nextCards.length; j++) {
        const nextCard = nextCards[j];
        const nextRect = nextCard.getBoundingClientRect();
        // Progress of nextCard moving from stickTop + itemDistance to stickTop
        const travel = Math.max(0, Math.min(1, (stickTop + itemDistance - nextRect.top) / itemDistance));
        stackDepth += travel;
      }

      const scale = Math.max(baseScale, 1 - stackDepth * itemScale);
      const translateY = Math.min(120, stackDepth * itemStackDistance);
      const dim = Math.min(0.7, stackDepth * dimAmount);
      const blur = Math.min(8, stackDepth * blurAmount);
      const rotation = (index % 2 === 0 ? 1 : -1) * stackDepth * rotationAmount;

      card.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
      card.style.filter = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : 'none';

      const dimEl = card.querySelector('.scroll-stack-dim');
      if (dimEl) {
        dimEl.style.opacity = dim.toFixed(3);
      }
    });

    if (cards.length > 0) {
      const lastCard = cards[cards.length - 1];
      const lastRect = lastCard.getBoundingClientRect();
      const isComplete = lastRect.top <= stickTop + 10;
      if (isComplete && !completedRef.current) {
        completedRef.current = true;
        onStackComplete?.();
      } else if (!isComplete && completedRef.current) {
        completedRef.current = false;
      }
    }
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    dimAmount,
    blurAmount,
    rotationAmount,
    parsePosition,
    onStackComplete
  ]);

  useLayoutEffect(() => {
    updateTransforms();
  }, [updateTransforms]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateTransforms]);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`.trim()}>
      <div className="scroll-stack-inner">{children}</div>
    </div>
  );
};

export default ScrollStack;

