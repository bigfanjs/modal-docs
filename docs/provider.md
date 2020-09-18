---
id: provider
title: Provider
sidebar_label: Provider
---

Any component anywhere beneath the provider is able to minupilate the modal scene.

```jsx
import React from "react";
import { Provider } from "@bigfan/modal";
import App from "./App";

const types = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  WARNING: "WARNING",
};

export default () => {
  return (
    <Provider types={types}>
      <App />
    </Provider>
  );
};
```

## props

### types

the **types** prop are the just your modal types. For any modal you want to add you have to create a type for it so you can open/close it anywhere throughout the component tree.
