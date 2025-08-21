// src/assets/Icons.jsx
import React from 'react';

export const Logo = (props) => (
  <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4F46E5' }} />
        <stop offset="100%" style={{ stopColor: '#A855F7' }} />
      </linearGradient>
      <linearGradient id="logo-gradient-alt" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#D946EF' }} />
        <stop offset="100%" style={{ stopColor: '#EC4899' }} />
      </linearGradient>
    </defs>
    <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="800" fill="url(#logo-gradient)">
      99<tspan fill="url(#logo-gradient-alt)">Winner</tspan>
    </text>
  </svg>
);

export const IconSlots = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C10.3431 2 9 3.34315 9 5V6H7C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H8V20C8 21.1046 8.89543 22 10 22H14C15.1046 22 16 21.1046 16 20V18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6H15V5C15 3.34315 13.6569 2 12 2ZM12 4C12.5523 4 13 4.44772 13 5V6H11V5C11 4.44772 11.4477 4 12 4ZM7 8H17C17.5523 8 18 8.44772 18 9V15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8Z" /></svg>;
export const IconCards = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M2.99805 9.00006V19.0001C2.99805 20.1046 3.89348 21.0001 4.99805 21.0001H14.998C16.1026 21.0001 16.998 20.1046 16.998 19.0001V16.0001H9.99805C6.68431 16.0001 3.99805 13.3138 3.99805 10.0001V9.00006H2.99805ZM7.99805 5.00006C7.99805 3.89549 8.89348 3.00006 9.99805 3.00006H19.998C21.1026 3.00006 21.998 3.89549 21.998 5.00006V15.0001C21.998 16.1046 21.1026 17.0001 19.998 17.0001H16.998V10.0001C16.998 7.23864 14.7595 5.00006 11.998 5.00006H7.99805Z" /></svg>;
export const IconLive = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" /></svg>;
export const IconSports = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11 7H13V11H17V13H13V17H11V13H7V11H11V7Z" /></svg>;
export const IconTwitter = (props) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.84C20.33,8.63 20.33,8.42 20.32,8.21C21.17,7.63 21.88,6.87 22.46,6Z"/></svg>;
export const IconInstagram = (props) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12,2.04C6.5,2.04 2,6.54 2,12.04C2,17.54 6.5,22.04 12,22.04C17.5,22.04 22,17.54 22,12.04C22,6.54 17.5,2.04 12,2.04M12,20.04C7.58,20.04 4,16.46 4,12.04C4,7.62 7.58,4.04 12,4.04C16.42,4.04 20,7.62 20,12.04C20,16.46 16.42,20.04 12,20.04M12,6.54C8.97,6.54 6.5,9.01 6.5,12.04C6.5,15.07 8.97,17.54 12,17.54C15.03,17.54 17.5,15.07 17.5,12.04C17.5,9.01 15.03,6.54 12,6.54M12,15.54C10.06,15.54 8.5,13.98 8.5,12.04C8.5,10.1 10.06,8.54 12,8.54C13.94,8.54 15.5,10.1 15.5,12.04C15.5,13.98 13.94,15.54 12,15.54M17.5,6.04C16.95,6.04 16.5,6.49 16.5,7.04C16.5,7.59 16.95,8.04 17.5,8.04C18.05,8.04 18.5,7.59 18.5,7.04C18.5,6.49 18.05,6.04 17.5,6.04Z"/></svg>;
export const LuckySpinWheel = (props) => (
  <svg viewBox="0 0 200 200" {...props}>
    <defs><path id="sector" d="M100 100 L100 10 A90 90 0 0 1 163.64 43.3 Z"></path></defs>
    <g>
      <use href="#sector" fill="#4F46E5" transform="rotate(0, 100, 100)"></use>
      <use href="#sector" fill="#6D28D9" transform="rotate(45, 100, 100)"></use>
      <use href="#sector" fill="#A855F7" transform="rotate(90, 100, 100)"></use>
      <use href="#sector" fill="#C026D3" transform="rotate(135, 100, 100)"></use>
      <use href="#sector" fill="#DB2777" transform="rotate(180, 100, 100)"></use>
      <use href="#sector" fill="#C026D3" transform="rotate(225, 100, 100)"></use>
      <use href="#sector" fill="#A855F7" transform="rotate(270, 100, 100)"></use>
      <use href="#sector" fill="#6D28D9" transform="rotate(315, 100, 100)"></use>
    </g>
    <circle cx="100" cy="100" r="20" fill="#0a0a0a" stroke="#FBBF24" strokeWidth="2"></circle>
    <polygon points="100,2 95,20 105,20" fill="#FBBF24" />
  </svg>
);
