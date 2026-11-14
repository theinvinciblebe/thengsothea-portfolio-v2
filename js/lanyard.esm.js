/**
 * Lanyard 3D WebGL Simulation Component (ES Module)
 * Palette: #fffbda (Cream) and #00371c (Deep Forest Green)
 */
import * as THREE from 'three';

// Ensure global THREE is set for internal functions if needed
if (typeof window !== 'undefined' && !window.THREE) {
  window.THREE = THREE;
}

// Re-export from lanyard.js or provide ES module exports
import './lanyard.js';

export const initLanyard = window.initLanyard;
export const generateBadgeBack = window.generateBadgeBack;
export const generateStrap = window.generateStrap;
export const Lanyard = window.Lanyard;
export default initLanyard;

