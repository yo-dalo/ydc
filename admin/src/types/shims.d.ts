// Basic shims for non-TS modules and assets to reduce missing-declaration errors
declare module '*.js';
declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.json';

// Fallback for any other imports (use sparingly)
declare module '*';
