---
id: styling
title: Styling
sidebar_label: Styling
---

## CSS-in-JS

`<Modal>` component takes a `className` prop which makes it possible to style it using `styled-component`:

```jsx
import { Modal } from "@bigfan/modal";
import styled from "styled-component";

const StyledModal = styled(Modal)`
  border-radius: 20px;
  background-color: lightblue;
`;

export default function Login() {
  <StyledModal>
    <div>My styled login modal</div>
  </StyledModal>;
}
```

## Inline styles

`<Modal>` accepts a style prop that overrides defaults styles.

```jsx
import { Modal } from "@bigfan/modal";

export default function Login() {
  <Modal style={{ borderRadius: 20, backgroundColor: "lightblue" }}>
    <div>My styled login modal</div>
  </Modal>;
}
```

## Vanila CSS

`modal` and `overlay` both provide class names `.modal` and `.overlay`.

```css
.modal {
  border-radius: 20px;
  background-color: lightblue;
  overflow: hidden;
}
```

:::caution

Please note that the modal already comes with a group of default inline styles:

```css
position: relative;
transform-origin: center center;
pointer-events: auto;
```

You won't be able to override these styles using both `CSS-in-JS` and `vanilla CSS` unless you are using the `!important` flag or **overriding them using inline styles**.

:::
