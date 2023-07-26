// assets
import { IconTypography, IconPalette, IconShadow,IconAddressBook, IconPhoto } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconAddressBook,
  IconPhoto
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Gallery',
      type: 'collapse',
      icon: icons.IconPhoto,
      children: [
        {
          id: 'tabler-icons',
          title: 'Images Module',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Video Module',
          type: 'item',
          external: true,
          url: '/icons/material-icons',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'contact-icons',
      title: 'Contact Us ',
      type: 'collapse',
      icon: icons.IconAddressBook,
      children: [
        {
          id: 'contact-icons',
          title: 'Contact Us Query',
          type: 'item',
          url: '/icons/contact-icons',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'login',
      title: 'Log In',
      type: 'item',
      url: '/login',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default utilities;
