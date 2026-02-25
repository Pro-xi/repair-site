import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/#features'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ 
    text: '512-766-3825', 
    href: 'tel:5127663825', 
    variant: 'primary' 
  }],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: [
        { text: 'Diagnostics', href: getPermalink('/#pricing') },
        { text: 'Computer Repair', href: getPermalink('/#pricing') },
        { text: 'Remote Support', href: getPermalink('/#pricing') },
        { text: 'In-Home Networking', href: getPermalink('/#pricing') },
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
    { text: '226 Almquist St, Hutto, TX 78634', href: 'https://www.google.com/maps/search/?api=1&query=226+Almquist+St+Hutto+TX+78634' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © 2026 Pro-xi Tech Support · 226 Almquist St, Hutto, TX 78634 · All rights reserved.
  `,
};