import { getPermalink, getBlogPermalink } from './utils/permalinks';

/**
 * ENGLISH NAVIGATION DATA
 */
export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Gallery', href: getPermalink('/gallery') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Pricing', href: getPermalink('/#pricing') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    { text: 'Español', href: '/es', variant: 'tertiary' },
    { 
      text: 'Pay Now', 
      href: 'https://www.paypal.com/ncp/payment/8SPBXD7HR38GG', 
      target: '_blank', 
      variant: 'primary' 
    },
  ],
};

/**
 * SPANISH NAVIGATION DATA
 */
export const headerDataEs = {
  links: [
    { text: 'Inicio', href: getPermalink('/es') },
    { text: 'Galería', href: getPermalink('/gallery') },
    { text: 'Servicios', href: getPermalink('/es/services') },
    { text: 'Precios', href: getPermalink('/es/#pricing') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contacto', href: getPermalink('/es/contact') },
  ],
  actions: [
    { text: 'English', href: '/', variant: 'tertiary' },
    { 
      text: 'Pagar Ahora', 
      href: 'https://www.paypal.com/ncp/payment/8SPBXD7HR38GG', 
      target: '_blank', 
      variant: 'primary' 
    },
  ],
};

/**
 * SHARED FOOTER DATA
 */
export const footerData = {
  links: [
    {
      title: 'Our Services / Servicios',
      links: [
        { text: 'Diagnostics / Diagnóstico', href: getPermalink('/#pricing') },
        { text: 'Computer Repair', href: getPermalink('/services') },
        { text: 'Remote Support', href: getPermalink('/services') },
        { text: 'In-Home Networking', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '512-766-3825', href: 'tel:5127663825' },
    { text: 'Make a Payment', href: 'https://www.paypal.com/ncp/payment/8SPBXD7HR38GG' },
    { 
      text: '226 Almquist St, Hutto, TX 78634', 
      href: 'https://maps.google.com/?q=226+Almquist+St+Hutto+TX+78634',
      target: '_blank',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © 2026 Pro-Xi Tech Support · 226 Almquist St, Hutto, TX 78634 · All rights reserved.
  `,
};