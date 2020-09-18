---
id: scene
title: Scene
sidebar_label: Scene
---

The **Scene** component is the place where you want to display your open modals. It can only display a single modal. It has the ability to proform animations on both _open_ and _close_ states.

## Props

### modals

**modals** prop is a map of your modals

```jsx
import React from "react";
import { useModal } from "@bigfan/modal";

import Login from "common/app/Login";
import Signup from "common/app/Signup";
import Warning from "common/app/Warning";

export default () => {
  const {
    types: { LOGIN, SIGNUP, WARNING },
  } = useModal();

  return (
    <Scene
      modals={{
        [LOGIN]: Login,
        [SIGNUP]: Signup,
        [WARNING]: Warning,
      }}
    />
  );
};
```
