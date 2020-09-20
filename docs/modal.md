---
id: modal
title: Modal
sidebar_label: Modal
---

The `<Modal>` component is essential for your modals to work as it encapsulates all the behaviors and it allows you to customize your modals.

_your awesome login modal:_

```jsx
import React from "react";
import styled from "styled-components";
import { Modal } from "@bigfan/modal";

const MyAwesomeModal = styled(Modal)`
  overflow: hidden;
  border-radius: 30px;
`;

export default function Login() {
  return <MyAwesomeModal>My Awesome Modal!</MyAwesomeModal>;
}
```

## Props

The `<modal>` takes only two props, `className` and `style`. They are both intended for styling purposes.
