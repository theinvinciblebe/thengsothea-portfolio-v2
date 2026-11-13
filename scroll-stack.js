/**
 * ScrollStack.js - React Bits Scroll Stack Vanilla JavaScript Engine
 * Hardware-accelerated sticky card stacking with progressive depth & dimming
 */
(function (global) {
  'use strict';

  class ScrollStackInstance {
    constructor(container, options = {}) {
      this.container = container;
      this.options = Object.assign(
        {
          itemDistance: parseFloat(container.dataset.itemDistance || '80'),
          itemScale: parseFloat(container.dataset.itemScale || '0.04'),
          itemStackDistance: parseFloat(container.dataset.itemStackDistance || '24'),
          stackPosition: container.dataset.stackPosition || '14%',
          baseScale: parseFloat(container.dataset.baseScale || '0.86'),
          dimAmount: parseFloat(container.dataset.dimAmount || '0.22'),
          blurAmount: parseFloat(container.dataset.blurAmount || '0'),
          rotationAmount: parseFloat(container.dataset.rotationAmount || '0'),
          useWindowScroll: true
        },
        options
      );

      this.cards = [];
      this.raf = 0;
      this.isUpdating = false;

      this.init();
    }

    init() {
      // Ensure each card has a dim overlay
      const cardEls = this.container.querySelectorAll('.scroll-stack-card');
      cardEls.forEach(card => {
        if (!card.querySelector('.scroll-stack-dim')) {
          const dim = document.createElement('div');
          dim.className = 'scroll-stack-dim';
          dim.setAttribute('aria-hidden', 'true');
          card.appendChild(dim);
        }
      });

      this.bindEvents();
      this.updateTransforms();
    }

    parsePosition(pos, viewportHeight) {
      if (typeof pos === 'string') {
        if (pos.endsWith('%') || pos.endsWith('vh')) {
          return (parseFloat(pos) / 100) * viewportHeight;
        }
      }
      return parseFloat(pos) || (window.innerWidth <= 768 ? 85 : 120);
    }

    updateTransforms() {
      if (!this.container) return;

      const viewportHeight = window.innerHeight;
      const stickTop = this.parsePosition(this.options.stackPosition, viewportHeight);
      const itemDistance = this.options.itemDistance;
      const itemScale = this.options.itemScale;
      const itemStackDistance = this.options.itemStackDistance;
      const baseScale = this.options.baseScale;
      const dimAmount = this.options.dimAmount;
      const blurAmount = this.options.blurAmount;
      const rotationAmount = this.options.rotationAmount;

      // Filter visible cards only
      const visibleCards = Array.from(this.container.querySelectorAll('.scroll-stack-card')).filter(
        card => card.style.display !== 'none'
      );
      this.cards = visibleCards;

      visibleCards.forEach((card, index) => {
        card.style.top = `${stickTop}px`;

        if (index < visibleCards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        } else {
          card.style.marginBottom = '2.5rem';
        }

        // Measure how many subsequent cards have scrolled to/past stick threshold
        const nextCards = visibleCards.slice(index + 1);
        let stackDepth = 0;

        for (let j = 0; j < nextCards.length; j++) {
          const nextCard = nextCards[j];
          const nextRect = nextCard.getBoundingClientRect();
          // Calculate linear progress of nextCard scrolling into sticky threshold
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
    }

    onScroll() {
      if (this.raf) cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(() => this.updateTransforms());
    }

    bindEvents() {
      this.scrollHandler = () => this.onScroll();
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.scrollHandler, { passive: true });

      this.resizeObserver = new ResizeObserver(() => {
        this.onScroll();
      });
      this.resizeObserver.observe(this.container);
    }

    destroy() {
      if (this.raf) cancelAnimationFrame(this.raf);
      if (this.scrollHandler) {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }

  const stackInstances = [];

  function initScrollStack(selector = '.scroll-stack-container') {
    const containers = document.querySelectorAll(selector);
    containers.forEach(container => {
      if (!container.__scrollStackInstance) {
        const inst = new ScrollStackInstance(container);
        container.__scrollStackInstance = inst;
        stackInstances.push(inst);
      } else {
        container.__scrollStackInstance.updateTransforms();
      }
    });
    return stackInstances;
  }

  function updateAllScrollStacks() {
    stackInstances.forEach(inst => inst.updateTransforms());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initScrollStack());
  } else {
    initScrollStack();
  }

  global.ScrollStack = ScrollStackInstance;
  global.initScrollStack = initScrollStack;
  global.updateAllScrollStacks = updateAllScrollStacks;

})(typeof window !== 'undefined' ? window : this);

