/**
 * CardNav - Pure Vanilla JavaScript Engine for React Bits CardNav
 * 
 * Recreates the exact React Bits <CardNav /> component in pure vanilla JS:
 * - Spring physics expansion loop with bounce, stagger, and custom speed
 * - 3 card transition effects: 'rise', 'unfold', 'fade'
 * - Rolling Menu/Close label and animated hamburger-to-cross icon
 * - Dual-template system ('forest' & 'cyan') & dual-theme ('dark' & 'light')
 * - Full multi-language support (English & Khmer)
 * - Adaptive accent color with relative luminance ink calculation
 * - Responsive narrow screen detection (< 560px) with mobile stacked layout
 * - Hover / click trigger modes, outside click dismissal, ESC key handling
 * - Smooth scroll integration for in-page section links
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.initCardNav = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // React Bits Standard Themes + Portfolio Customized Presets
  const THEMES = {
    dark: {
      '--cn-panel': 'rgba(38, 35, 46, 0.72)',
      '--cn-solid': '#26232e',
      '--cn-edge': 'rgba(255, 255, 255, 0.08)',
      '--cn-highlight': 'rgba(255, 255, 255, 0.07)',
      '--cn-shadow': '0 24px 48px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
      '--cn-text': '#f4f4f5',
      '--cn-muted': 'rgba(244, 244, 245, 0.56)',
      '--cn-hover': 'rgba(255, 255, 255, 0.06)',
      '--cn-ring': 'rgba(244, 244, 245, 0.55)',
      '--cn-tile': 'linear-gradient(180deg, #34303d 0%, #27242f 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 10px -4px rgba(0, 0, 0, 0.6)',
      '--cn-cta': 'linear-gradient(180deg, #ffffff 0%, #ebebf0 100%)',
      '--cn-cta-ink': '#121016',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 16px -6px rgba(0, 0, 0, 0.6)',
      '--cn-cta-hover': 'brightness(0.94)'
    },
    light: {
      '--cn-panel': 'rgba(244, 244, 246, 0.84)',
      '--cn-solid': '#f4f4f6',
      '--cn-edge': 'rgba(24, 24, 27, 0.07)',
      '--cn-highlight': 'rgba(255, 255, 255, 0.95)',
      '--cn-shadow': '0 24px 48px -24px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)',
      '--cn-text': '#18181b',
      '--cn-muted': 'rgba(24, 24, 27, 0.56)',
      '--cn-hover': 'rgba(24, 24, 27, 0.05)',
      '--cn-ring': 'rgba(24, 24, 27, 0.45)',
      '--cn-tile': 'linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(24, 24, 27, 0.07), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(24, 24, 27, 0.22)',
      '--cn-cta': 'linear-gradient(180deg, #2c2c31 0%, #18181b 100%)',
      '--cn-cta-ink': '#ffffff',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 6px 14px -6px rgba(24, 24, 27, 0.45)',
      '--cn-cta-hover': 'brightness(1.25)'
    },
    // Template 1: Forest & Cream Presets
    'forest-dark': {
      '--cn-panel': 'rgba(0, 55, 28, 0.88)',
      '--cn-solid': '#00371c',
      '--cn-edge': 'rgba(255, 251, 218, 0.14)',
      '--cn-highlight': 'rgba(255, 251, 218, 0.1)',
      '--cn-shadow': '0 24px 48px -20px rgba(0, 20, 10, 0.85), 0 6px 16px -8px rgba(0, 0, 0, 0.6)',
      '--cn-text': '#fffbda',
      '--cn-muted': 'rgba(255, 251, 218, 0.65)',
      '--cn-hover': 'rgba(255, 251, 218, 0.08)',
      '--cn-ring': 'rgba(255, 251, 218, 0.55)',
      '--cn-tile': 'linear-gradient(180deg, #004d27 0%, #002e17 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(255, 251, 218, 0.1), inset 0 1px 0 rgba(255, 251, 218, 0.16), 0 4px 10px -4px rgba(0, 0, 0, 0.6)',
      '--cn-cta': 'linear-gradient(180deg, #fffbda 0%, #ecdca0 100%)',
      '--cn-cta-ink': '#00371c',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 16px -6px rgba(0, 20, 10, 0.7)',
      '--cn-cta-hover': 'brightness(0.94)'
    },
    'forest-light': {
      '--cn-panel': 'rgba(255, 251, 218, 0.94)',
      '--cn-solid': '#fffbda',
      '--cn-edge': 'rgba(0, 55, 28, 0.14)',
      '--cn-highlight': 'rgba(255, 255, 255, 0.95)',
      '--cn-shadow': '0 24px 48px -24px rgba(0, 55, 28, 0.25), 0 6px 16px -10px rgba(0, 55, 28, 0.15)',
      '--cn-text': '#00371c',
      '--cn-muted': 'rgba(0, 55, 28, 0.68)',
      '--cn-hover': 'rgba(0, 55, 28, 0.07)',
      '--cn-ring': 'rgba(0, 55, 28, 0.45)',
      '--cn-tile': 'linear-gradient(180deg, #ffffff 0%, #f7f3ce 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(0, 55, 28, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(0, 55, 28, 0.2)',
      '--cn-cta': 'linear-gradient(180deg, #004d27 0%, #00371c 100%)',
      '--cn-cta-ink': '#fffbda',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 251, 218, 0.25), 0 6px 14px -6px rgba(0, 55, 28, 0.5)',
      '--cn-cta-hover': 'brightness(1.15)'
    },
    // Template 2: Cyber Cyan Presets
    'cyan-dark': {
      '--cn-panel': 'rgba(10, 16, 26, 0.82)',
      '--cn-solid': '#080d16',
      '--cn-edge': 'rgba(6, 182, 212, 0.18)',
      '--cn-highlight': 'rgba(34, 211, 238, 0.12)',
      '--cn-shadow': '0 24px 48px -20px rgba(0, 0, 0, 0.85), 0 6px 16px -8px rgba(6, 182, 212, 0.25)',
      '--cn-text': '#f0fdf4',
      '--cn-muted': 'rgba(224, 242, 254, 0.62)',
      '--cn-hover': 'rgba(6, 182, 212, 0.08)',
      '--cn-ring': 'rgba(6, 182, 212, 0.55)',
      '--cn-tile': 'linear-gradient(180deg, #0e1e2e 0%, #09131f 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(6, 182, 212, 0.12), inset 0 1px 0 rgba(34, 211, 238, 0.2), 0 4px 10px -4px rgba(0, 0, 0, 0.7)',
      '--cn-cta': 'linear-gradient(180deg, #22d3ee 0%, #06b6d4 100%)',
      '--cn-cta-ink': '#07080c',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 6px 16px -6px rgba(6, 182, 212, 0.7)',
      '--cn-cta-hover': 'brightness(1.08)'
    },
    'cyan-light': {
      '--cn-panel': 'rgba(240, 249, 255, 0.92)',
      '--cn-solid': '#f0f9ff',
      '--cn-edge': 'rgba(8, 145, 178, 0.15)',
      '--cn-highlight': 'rgba(255, 255, 255, 0.95)',
      '--cn-shadow': '0 24px 48px -24px rgba(8, 145, 178, 0.25), 0 6px 16px -10px rgba(8, 145, 178, 0.15)',
      '--cn-text': '#0f172a',
      '--cn-muted': 'rgba(15, 23, 42, 0.6)',
      '--cn-hover': 'rgba(8, 145, 178, 0.07)',
      '--cn-ring': 'rgba(8, 145, 178, 0.45)',
      '--cn-tile': 'linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%)',
      '--cn-tile-rim':
        'inset 0 0 0 1px rgba(8, 145, 178, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(8, 145, 178, 0.2)',
      '--cn-cta': 'linear-gradient(180deg, #0891b2 0%, #0e7490 100%)',
      '--cn-cta-ink': '#ffffff',
      '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 6px 14px -6px rgba(8, 145, 178, 0.5)',
      '--cn-cta-hover': 'brightness(1.15)'
    }
  };

  const I18N = {
    en: {
      menuOpen: 'Menu',
      menuClose: 'Close',
      cta: 'Get in touch',
      items: [
        {
          label: 'About',
          description: 'Background, education & core engineering stack.',
          links: [
            { label: 'About Me', href: '#about' },
            { label: 'Skills & Stack', href: '#skills' },
            { label: 'Education (SETEC)', href: '#education' }
          ]
        },
        {
          label: 'Projects',
          description: 'Featured full-stack web applications & systems.',
          links: [
            { label: 'Featured Projects', href: '#projects' },
            { label: 'Experience & Career', href: '#experience' },
            { label: 'Community Guestbook', href: '#guestbook' }
          ]
        },
        {
          label: 'Connect',
          description: 'Say hello, explore source code, or collaborate.',
          links: [
            { label: 'Get In Touch', href: '#contact' },
            { label: 'Telegram (@sotheatheng2002)', href: 'https://t.me/sotheatheng2002' },
            { label: 'GitHub Profile', href: 'https://github.com/theinvinciblebe' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/thengsothea' }
          ]
        }
      ]
    },
    km: {
      menuOpen: 'មឺនុយ',
      menuClose: 'បិទ',
      cta: 'ទាក់ទងមកខ្ញុំ',
      items: [
        {
          label: 'អំពីខ្ញុំ',
          description: 'ប្រវត្តិផ្ទាល់ខ្លួន ការអប់រំ និងជំនាញបច្ចេកវិទ្យាស្នូល។',
          links: [
            { label: 'អំពីខ្ញុំផ្ទាល់', href: '#about' },
            { label: 'ជំនាញបច្ចេកវិទ្យា', href: '#skills' },
            { label: 'ប្រវត្តិនៃការសិក្សា (SETEC)', href: '#education' }
          ]
        },
        {
          label: 'ស្នាដៃ',
          description: 'គម្រោងគេហទំព័រ និងប្រព័ន្ធគ្រប់គ្រងដែលបានបង្កើត។',
          links: [
            { label: 'គម្រោងស្នាដៃសំខាន់ៗ', href: '#projects' },
            { label: 'បទពិសោធន៍ការងារ', href: '#experience' },
            { label: 'សៀវភៅភ្ញៀវ', href: '#guestbook' }
          ]
        },
        {
          label: 'ទំនាក់ទំនង',
          description: 'ផ្ញើសារសួរសុខទុក្ខ មើលកូដ ឬពិភាក្សាការងារ។',
          links: [
            { label: 'ទាក់ទងមកខ្ញុំ', href: '#contact' },
            { label: 'តេឡេក្រាម (@sotheatheng2002)', href: 'https://t.me/thengsothea' },
            { label: 'ទំព័រ GitHub', href: 'https://github.com/theinvinciblebe' },
            { label: 'ទំព័រ LinkedIn', href: 'https://linkedin.com/in/thengsothea' }
          ]
        }
      ]
    }
  };

  const NARROW = 560;
  const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const contrastInk = color => {
    const hex = String(color || '').trim().replace('#', '');
    if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) return null;
    const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
    const channel = index => {
      const value = parseInt(full.slice(index, index + 2), 16) / 255;
      return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    const luminance = 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
    return luminance > 0.36 ? '#121016' : '#ffffff';
  };

  const ARROW_SVG_OUT = '<svg class="card-nav__arrow-icon card-nav__arrow-icon--out" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';
  const ARROW_SVG_IN = '<svg class="card-nav__arrow-icon card-nav__arrow-icon--in" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

  /**
   * Initialize CardNav
   * @param {HTMLElement|string} target - Container element or selector
   * @param {Object} options - Configuration options
   * @returns {Object} CardNav controller instance
   */
  function initCardNav(target, options = {}) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) {
      console.warn('[CardNav] Target container not found:', target);
      return null;
    }

    const defaultLang = (document.documentElement.getAttribute('lang') || 'en').startsWith('km') ? 'km' : 'en';
    const langPack = I18N[defaultLang] || I18N.en;

    let opts = {
      logo: '<span class="logo-bracket">&lt;</span>Theng <span class="text-cyan">Sothea</span><span class="logo-bracket">/&gt;</span>',
      logoAlt: 'Theng Sothea Portfolio',
      logoHref: '#home',
      items: langPack.items,
      cta: {
        label: langPack.cta,
        href: '#contact'
      },
      template: 'forest',
      theme: 'dark',
      lang: defaultLang,
      surface: 'glass',
      openOn: 'click',
      cardEffect: 'rise',
      stagger: 0.12,
      bounce: 0.2,
      speed: 1,
      cardHeight: 176,
      maxWidth: 1000,
      accentColor: undefined,
      menuLabel: true,
      intro: true,
      defaultOpen: false,
      ariaLabel: 'Main Navigation',
      className: '',
      onOpenChange: null,
      onLinkClick: null,
      ...options
    };

    let isOpen = Boolean(opts.defaultOpen);
    let isShown = isOpen;
    let isNarrow = false;
    let rafId = 0;
    let lastTime = 0;
    let leaveTimer = null;
    let isDestroyed = false;

    const contentId = 'card-nav-content-' + Math.random().toString(36).slice(2, 9);

    // Build DOM structure
    const rootEl = document.createElement('div');
    rootEl.className = ['card-nav', opts.className].filter(Boolean).join(' ');
    if (isOpen) {
      rootEl.setAttribute('data-open', '');
      rootEl.setAttribute('data-shown', '');
    }

    const panelEl = document.createElement('nav');
    panelEl.className = 'card-nav__panel';
    panelEl.setAttribute('aria-label', opts.ariaLabel);

    const rimEl = document.createElement('span');
    rimEl.className = 'card-nav__rim';

    // Bar container
    const barEl = document.createElement('div');
    barEl.className = 'card-nav__bar';

    // Menu button
    const menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.className = 'card-nav__menu';
    if (!opts.menuLabel) menuBtn.setAttribute('data-icon-only', '');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-controls', contentId);
    if (!opts.menuLabel) {
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    const curLangPack = I18N[opts.lang] || I18N.en;
    menuBtn.innerHTML = `
      <span class="card-nav__burger" aria-hidden="true">
        <span class="card-nav__line card-nav__line--top"></span>
        <span class="card-nav__line card-nav__line--bottom"></span>
      </span>
      ${opts.menuLabel ? `
      <span class="card-nav__menu-label">
        <span class="card-nav__word card-nav__word--open" aria-hidden="${isOpen}">${curLangPack.menuOpen}</span>
        <span class="card-nav__word card-nav__word--close" aria-hidden="${!isOpen}">${curLangPack.menuClose}</span>
      </span>` : ''}
    `;

    // Logo link
    const logoLink = document.createElement('a');
    logoLink.className = 'card-nav__logo';
    logoLink.href = opts.logoHref || '#';
    logoLink.setAttribute('aria-label', opts.logoAlt || 'Logo');
    if (typeof opts.logo === 'string') {
      if (opts.logo.trim().startsWith('<')) {
        logoLink.innerHTML = opts.logo;
      } else {
        const logoImg = document.createElement('img');
        logoImg.src = opts.logo;
        logoImg.alt = opts.logoAlt || '';
        logoImg.draggable = false;
        logoLink.appendChild(logoImg);
      }
    } else if (opts.logo instanceof Node) {
      logoLink.appendChild(opts.logo);
    }

    // CTA desktop button
    let ctaDesktopBtn = null;
    if (opts.cta) {
      ctaDesktopBtn = createCtaElement(opts.cta, false);
    }

    barEl.appendChild(menuBtn);
    barEl.appendChild(logoLink);
    if (ctaDesktopBtn) barEl.appendChild(ctaDesktopBtn);

    // Content container
    const contentEl = document.createElement('div');
    contentEl.className = 'card-nav__content';
    contentEl.id = contentId;
    contentEl.setAttribute('aria-hidden', String(!isOpen));

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'card-nav__cards';

    // Build cards
    buildCards();

    contentEl.appendChild(cardsContainer);

    // CTA wide mobile container
    let ctaWideWrap = null;
    let ctaWideBtn = null;
    if (opts.cta) {
      ctaWideWrap = document.createElement('div');
      ctaWideBtn = createCtaElement(opts.cta, true);
      ctaWideWrap.appendChild(ctaWideBtn);
      contentEl.appendChild(ctaWideWrap);
    }

    panelEl.appendChild(barEl);
    panelEl.appendChild(contentEl);
    panelEl.appendChild(rimEl);
    rootEl.appendChild(panelEl);
    container.appendChild(rootEl);

    // Helper to create CTA anchor or button
    function createCtaElement(cta, isWide) {
      const el = document.createElement(cta.href ? 'a' : 'button');
      if (!cta.href) el.type = 'button';
      else el.href = cta.href;
      el.className = isWide ? 'card-nav__cta card-nav__cta--wide' : 'card-nav__cta';
      el.textContent = cta.label || 'Action';
      if (isWide && !isOpen) el.tabIndex = -1;

      el.addEventListener('click', (e) => {
        if (cta.onClick) cta.onClick(e);
        if (isWide) setOpen(false);
        if (cta.href && cta.href.startsWith('#')) {
          smoothScrollTo(cta.href);
        }
      });
      return el;
    }

    // Populate or rebuild cards
    function buildCards() {
      cardsContainer.innerHTML = '';
      (opts.items || []).forEach((item, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-nav__card';
        if (item.bgColor) {
          cardEl.setAttribute('data-tinted', '');
          cardEl.style.background = item.bgColor;
          if (item.textColor) cardEl.style.color = item.textColor;
        }

        const headEl = document.createElement('div');
        headEl.className = 'card-nav__card-head';

        const labelEl = document.createElement('span');
        labelEl.className = 'card-nav__label';
        labelEl.textContent = item.label;
        headEl.appendChild(labelEl);

        if (item.description) {
          const descEl = document.createElement('p');
          descEl.className = 'card-nav__description';
          descEl.textContent = item.description;
          headEl.appendChild(descEl);
        }
        cardEl.appendChild(headEl);

        const linksList = document.createElement('ul');
        linksList.className = 'card-nav__links';

        (item.links || []).forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement(link.href ? 'a' : 'button');
          if (!link.href) a.type = 'button';
          else a.href = link.href;
          a.className = 'card-nav__link';
          if (link.ariaLabel) a.setAttribute('aria-label', link.ariaLabel);
          if (!isOpen) a.tabIndex = -1;

          // Arrow container
          const arrowSpan = document.createElement('span');
          arrowSpan.className = 'card-nav__arrow';
          arrowSpan.setAttribute('aria-hidden', 'true');
          arrowSpan.innerHTML = ARROW_SVG_OUT + ARROW_SVG_IN;

          a.appendChild(arrowSpan);
          a.appendChild(document.createTextNode(link.label));

          a.addEventListener('click', (e) => {
            if (opts.onLinkClick) opts.onLinkClick(link, item, e);
            if (link.onClick) link.onClick(e);
            setOpen(false);

            if (link.href && link.href.startsWith('#')) {
              e.preventDefault();
              smoothScrollTo(link.href);
            }
          });

          li.appendChild(a);
          linksList.appendChild(li);
        });

        cardEl.appendChild(linksList);
        cardsContainer.appendChild(cardEl);
      });
    }

    // Apply CSS Variables according to Theme, Template & Accent Color
    function applyStyles() {
      const modeKey = (opts.theme === 'light') ? 'light' : 'dark';
      const templateKey = opts.template === 'cyan' ? 'cyan' : 'forest';
      const presetKey = `${templateKey}-${modeKey}`;

      const palette = THEMES[presetKey] ?? THEMES[modeKey] ?? THEMES.dark;
      const vars = {
        ...palette,
        '--cn-max': `${opts.maxWidth}px`,
        '--cn-bar': '60px',
        '--cn-inset': '8px',
        '--cn-gap': '8px',
        '--cn-radius': '18px',
        '--cn-logo': '24px',
        '--cn-card': `${opts.cardHeight}px`
      };

      if (opts.surface === 'glass') {
        vars['--cn-blur'] = 'blur(20px) saturate(1.6)';
      } else if (opts.surface === 'solid') {
        vars['--cn-panel'] = palette['--cn-solid'];
        vars['--cn-blur'] = 'none';
      }

      if (opts.accentColor) {
        vars['--cn-cta'] = opts.accentColor;
        vars['--cn-cta-ink'] = contrastInk(opts.accentColor) || '#ffffff';
        vars['--cn-cta-shadow'] = 'inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px -6px rgba(0, 0, 0, 0.45)';
        vars['--cn-cta-hover'] = 'brightness(1.08)';
      }

      for (const [key, value] of Object.entries(vars)) {
        rootEl.style.setProperty(key, value);
      }
    }

    applyStyles();

    // Smooth scroll helper
    function smoothScrollTo(hash) {
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (history.pushState) {
          history.pushState(null, null, hash);
        }
      }
    }

    // Spring Physics State
    const state = {
      p: isOpen ? 1 : 0,
      v: 0,
      height: contentEl.offsetHeight || 0,
      bar: 60
    };

    function render() {
      state.bar = parseFloat(getComputedStyle(panelEl).getPropertyValue('--cn-bar')) || 60;
      panelEl.style.height = `${state.bar + Math.max(0, state.p) * state.height}px`;

      const cards = Array.from(contentEl.querySelectorAll('.card-nav__card'));
      if (ctaWideWrap) cards.push(ctaWideWrap);
      const count = cards.length;
      const lag = count > 1 ? Math.min(clamp(opts.stagger, 0, 0.3), 0.7 / (count - 1)) : 0;
      const span = 1 - lag * (count - 1);

      cards.forEach((card, index) => {
        const local = clamp((state.p - index * lag) / Math.max(span, 0.05), 0, 1);
        const e = easeOut(local);
        if (opts.cardEffect === 'unfold') {
          card.style.transform = `translateY(${(1 - e) * -10}px) rotateX(${(1 - e) * -72}deg)`;
          card.style.opacity = `${clamp(local * 1.8, 0, 1)}`;
          card.style.filter = '';
        } else if (opts.cardEffect === 'fade') {
          card.style.transform = `translateY(${(1 - e) * 6}px)`;
          card.style.opacity = `${e}`;
          card.style.filter = e < 0.999 ? `blur(${(1 - e) * 6}px)` : '';
        } else {
          // 'rise'
          card.style.transform = `translateY(${(1 - e) * 26}px) scale(${0.97 + 0.03 * e})`;
          card.style.opacity = `${e}`;
          card.style.filter = '';
        }
      });
    }

    function tick(now) {
      rafId = 0;
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 1 / 60;
      lastTime = now;
      const target = isOpen ? 1 : 0;

      if (reduceMotion) {
        state.p = target;
        state.v = 0;
      } else {
        const speed = clamp(opts.speed, 0.2, 3);
        const bounce = clamp(opts.bounce, 0, 1);
        const k = 160 * speed * speed;
        const zeta = isOpen ? 1 - 0.68 * bounce : 1;
        const steps = Math.ceil(dt / (1 / 240));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) {
          state.v += (-k * (state.p - target) - 2 * zeta * Math.sqrt(k) * state.v) * h;
          state.p += state.v * h;
        }
      }

      const done = Math.abs(state.p - target) < 0.0005 && Math.abs(state.v) < 0.002;
      if (done) {
        state.p = target;
        state.v = 0;
      }

      render();

      if (done && target === 0) {
        isShown = false;
        rootEl.removeAttribute('data-shown');
      }

      if (!done && !isDestroyed) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function wake() {
      if (!rafId && !isDestroyed) {
        lastTime = 0;
        rafId = requestAnimationFrame(tick);
      }
    }

    function refreshHeight() {
      state.height = contentEl.offsetHeight;
      render();
    }

    function setOpen(next) {
      if (next === isOpen) return;
      isOpen = next;

      if (isOpen) {
        isShown = true;
        rootEl.setAttribute('data-shown', '');
        rootEl.setAttribute('data-open', '');
      } else {
        rootEl.removeAttribute('data-open');
      }

      menuBtn.setAttribute('aria-expanded', String(isOpen));
      contentEl.setAttribute('aria-hidden', String(!isOpen));

      if (opts.menuLabel) {
        const wordOpen = menuBtn.querySelector('.card-nav__word--open');
        const wordClose = menuBtn.querySelector('.card-nav__word--close');
        if (wordOpen) wordOpen.setAttribute('aria-hidden', String(isOpen));
        if (wordClose) wordClose.setAttribute('aria-hidden', String(!isOpen));
      } else {
        menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      }

      // Update tabindex on cards links for accessibility
      const links = contentEl.querySelectorAll('.card-nav__link, .card-nav__cta--wide');
      links.forEach(l => {
        if (isOpen) l.removeAttribute('tabindex');
        else l.setAttribute('tabindex', '-1');
      });

      refreshHeight();
      wake();

      if (typeof opts.onOpenChange === 'function') {
        opts.onOpenChange(isOpen);
      }
    }

    // Toggle menu on click
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!isOpen);
    });

    // Hover open mode
    function onPointerEnter(e) {
      if (opts.openOn !== 'hover' || e.pointerType === 'touch') return;
      clearTimeout(leaveTimer);
      setOpen(true);
    }

    function onPointerLeave(e) {
      if (opts.openOn !== 'hover' || e.pointerType === 'touch') return;
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => setOpen(false), 160);
    }

    rootEl.addEventListener('pointerenter', onPointerEnter);
    rootEl.addEventListener('pointerleave', onPointerLeave);

    // Close on outside pointerdown
    function onDocPointerDown(e) {
      if (!isOpen) return;
      if (rootEl.contains(e.target)) return;
      setOpen(false);
    }

    // Close on Escape key
    function onDocKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setOpen(false);
        menuBtn.focus();
      }
    }

    document.addEventListener('pointerdown', onDocPointerDown);
    document.addEventListener('keydown', onDocKeyDown);

    // Responsive Narrow Mode Detection
    function measureNarrow() {
      const parentWidth = rootEl.parentElement ? rootEl.parentElement.offsetWidth : Infinity;
      const isNowNarrow = rootEl.offsetWidth < NARROW || window.innerWidth < NARROW || parentWidth < NARROW;
      if (isNowNarrow !== isNarrow) {
        isNarrow = isNowNarrow;
        rootEl.toggleAttribute('data-narrow', isNarrow);
        refreshHeight();
      }
    }

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        measureNarrow();
        refreshHeight();
      });
      resizeObserver.observe(rootEl);
      resizeObserver.observe(contentEl);
    } else {
      window.addEventListener('resize', measureNarrow);
    }

    measureNarrow();
    refreshHeight();

    // Intro Animation
    if (opts.intro && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(() => {
        const width = panelEl.offsetWidth;
        const height = panelEl.offsetHeight;
        const radius = parseFloat(getComputedStyle(panelEl).borderTopLeftRadius) || 18;
        if (typeof panelEl.animate === 'function') {
          panelEl.animate(
            [
              { clipPath: `inset(0px ${Math.max(0, (width - height) / 2)}px round ${height / 2}px)`, opacity: 0 },
              { clipPath: `inset(0px 0px round ${radius}px)`, opacity: 1 }
            ],
            { duration: 820, easing: EASE_OUT, fill: 'backwards' }
          );
          Array.from(barEl.children).forEach((child, index) => {
            child.animate(
              [
                { opacity: 0, transform: 'translateY(8px)' },
                { opacity: 1, transform: 'translateY(0)' }
              ],
              { duration: 560, delay: 220 + index * 70, easing: EASE_OUT, fill: 'backwards' }
            );
          });
        }
      });
    }

    // Return Public Controller Instance
    return {
      el: rootEl,
      panel: panelEl,
      content: contentEl,

      /**
       * Get or set open state
       */
      open(next) {
        if (typeof next === 'boolean') {
          setOpen(next);
        }
        return isOpen;
      },

      /**
       * Update configuration dynamically
       */
      update(newOpts = {}) {
        const prevTheme = opts.theme;
        const prevTemplate = opts.template;
        const prevLang = opts.lang;

        opts = { ...opts, ...newOpts };

        if (newOpts.lang && newOpts.lang !== prevLang) {
          const pack = I18N[newOpts.lang] || I18N.en;
          if (!newOpts.items) opts.items = pack.items;
          if (!newOpts.cta) opts.cta = { ...opts.cta, label: pack.cta };
          
          if (opts.menuLabel) {
            const wordOpen = menuBtn.querySelector('.card-nav__word--open');
            const wordClose = menuBtn.querySelector('.card-nav__word--close');
            if (wordOpen) wordOpen.textContent = pack.menuOpen;
            if (wordClose) wordClose.textContent = pack.menuClose;
          }
          if (ctaDesktopBtn) ctaDesktopBtn.textContent = opts.cta.label;
          if (ctaWideBtn) ctaWideBtn.textContent = opts.cta.label;
          buildCards();
        } else if (newOpts.items) {
          buildCards();
        }

        if (newOpts.theme !== undefined || newOpts.template !== undefined || newOpts.accentColor !== undefined || newOpts.surface !== undefined) {
          applyStyles();
        }

        if (newOpts.open !== undefined) {
          setOpen(Boolean(newOpts.open));
        }

        refreshHeight();
        wake();
      },

      /**
       * Clean up and destroy instance
       */
      destroy() {
        isDestroyed = true;
        if (rafId) cancelAnimationFrame(rafId);
        clearTimeout(leaveTimer);
        document.removeEventListener('pointerdown', onDocPointerDown);
        document.removeEventListener('keydown', onDocKeyDown);
        rootEl.removeEventListener('pointerenter', onPointerEnter);
        rootEl.removeEventListener('pointerleave', onPointerLeave);
        if (resizeObserver) resizeObserver.disconnect();
        else window.removeEventListener('resize', measureNarrow);
        if (rootEl.parentNode) rootEl.parentNode.removeChild(rootEl);
      }
    };
  }

  return initCardNav;
});
