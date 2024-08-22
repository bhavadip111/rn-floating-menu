# React Native Floating Menu

A customizable floating menu component for React Native with animated background functionality.

## Installation

Install the package using npm or yarn:

```bash
npm install rn-floating-menu
# or
yarn add rn-floating-menu
```

## Demo Video

Watch the demo video to see how the `react-native-floating-menu` works:

## Demo Video

Watch the demo video by this link: [Link to Demo Video](https://vimeo.com/1001475616)

## Usage

```js
import { FloatingMenu } from "rn-floating-menu";

const actionMenus = [
  {
    title: "Menu1",
    icon: "menu1_icon",
    handler: () => console.log("Menu1"),
  },
  {
    title: "Menu2",
    icon: "menu2_icon",
    handler: () => console.log("Menu2"),
  },
];

<FloatingMenu actionMenus={actionMenus} />;
```

## Example

```js
<FloatingMenu
  actionMenus={actionMenus}
  subActionButtonStyle={{ backgroundColor: "red" }}
  backShadow={true}
  subActionTextStyle={{ color: "yellow" }}
  backShadowStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  mainActionButtonStyle={{ backgroundColor: "green" }}
  subActionContainerStyle={{ bottom: 100, right: 50 }}
/>
```

## Props

| Prop                      | Type      | Required | Description                                                                                           |
| ------------------------- | --------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `actionMenus`             | `array`   | Yes      | An array of menu items to display. Each item should be an object with `title`, `icon`, and `handler`. |
| `subActionButtonStyle`    | `object`  | No       | Custom styles for the submenu buttons.                                                                |
| `backShadow`              | `boolean` | No       | Enables/disables the background shadow animation when the menu expands. Default is `false`.           |
| `subActionTextStyle`      | `object`  | No       | Custom styles for the submenu text.                                                                   |
| `backShadowStyle`         | `object`  | No       | Custom styles for the background shadow.                                                              |
| `mainActionButtonStyle`   | `object`  | No       | Custom styles for the main action button.                                                             |
| `subActionContainerStyle` | `object`  | No       | Custom styles for the submenu container.                                                              |

### `actionMenus` Example

Each object in the `actionMenus` array should have the following properties:

- **`title`**: (string) The title text to display for the menu item.
- **`icon`**: (string) The name of the icon to display for the menu item. Ensure that the icon name is compatible with the `react-native-vector-icons` library.
- **`handler`**: (function) The function to be executed when the menu item is pressed.

### Customization Example

You can customize various parts of the floating menu using the optional props. Here’s an example showing how to customize the appearance of the submenu and the background shadow:

```js
<FloatingMenu
  actionMenus={actionMenus}
  subActionButtonStyle={{ backgroundColor: "red" }}
  backShadow={true}
  subActionTextStyle={{ color: "yellow" }}
  backShadowStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  mainActionButtonStyle={{ backgroundColor: "green" }}
  subActionContainerStyle={{ bottom: 100, right: 50 }}
/>
```
