# React Native Floating Menu

A customizable floating menu component for React Native with animated background functionality.

## Installation

Install the package using npm or yarn:

```bash
npm install rn-floating-menu
# or
yarn add rn-floating-menu

Usage

import { FloatingMenu } from 'rn-floating-menu';

const actionMenus = [
{
title: 'Menu1',
icon: 'menu1_icon',
handler: () => console.log('Menu1'),
},
{
title: 'Menu2',
icon: 'menu2_icon',
handler: () => console.log('Menu2'),
},
];

<FloatingMenu actionMenus={actionMenus} />;

## Example

<FloatingMenu
actionMenus={actionMenus}
subActionButtonStyle={{ backgroundColor: 'red' }}
backShadow={true}
subActionTextStyle={{ color: 'yellow' }}
backShadowStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
mainActionButtonStyle={{ backgroundColor: 'green' }}
subActionContainerStyle={{ bottom: 100, right: 50 }}
/>

Props

actionMenus (required): An array of menu items to display. Each item should be an object with the following properties:

title: (string) The title text to display for the menu item.
icon: (string) The name of the icon to display for the menu item. Ensure that the icon name is compatible with the react-native-vector-icons library.
handler: (function) The function to be executed when the menu item is pressed.
subActionButtonStyle (optional): An object containing custom styles for the submenu buttons. Use this prop to override the default styles.

backShadow (optional): A boolean to enable or disable the background shadow animation when the menu expands. Default is false.

subActionTextStyle (optional): An object containing custom styles for the submenu text. Use this prop to override the default text styles.

backShadowStyle (optional): An object containing custom styles for the background shadow. Use this prop to customize the appearance of the background shadow.

mainActionButtonStyle (optional): An object containing custom styles for the main action button. Use this prop to override the default button styles.

subActionContainerStyle (optional): An object containing custom styles for the submenu container. Use this prop to customize the layout of the submenu items.
```
