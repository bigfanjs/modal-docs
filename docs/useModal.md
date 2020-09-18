---
id: useModal
title: useModal
sidebar_label: useModal
---

`useModal` is a custom react hook that gives you access to the modal context that allows you to apporate on your scene. And when called it returns the following props:

`openModal`, `closeModal`, `effects`, `types`

## openModal

The `openModal` handler accepts a modal **type** and a **configs** object:

### type

The type of modal you want to open

### configs

| config    |                   definition                    | default |
| --------- | :---------------------------------------------: | :-----: |
| effect    |        the effect type you want to apply        | POP_UP  |
| timeout   | the modal closes automaticaly after the timeout |    0    |
| noOverlay |                 disable overlay                 |  false  |
| spring    |              enable spring motion               |  false  |

```jsx
import React from "react";
import { useModal } from "@bigfan/modal";

export default function Btn() {
  const {
    openModal,
    types: { NOTIFICATION },
    effects: { SLIDE_LEFT },
  } = useModal();

  return (
    <button
      onClick={() =>
        openModal(NOTIFICATION, {
          effect: SLIDE_LEFT,
          timeout: 5000,
          noOverlay: true,
          spring: true,
        })
      }
    >
      OPEN
    </button>
  );
}
```

## closeModal

closes any open modal.

```jsx
import React from "react";
import { useModal } from "@bigfan/modal";

export default function Btn() {
  const { closeModal } = useModal();

  return <button onClick={() => closeModal()}>CLOSE</button>;
}
```

## effects

types of effects avaliable

| effects types |
| ------------- |
| POP_UP        |
| FADE          |
| SLIDE_LEFT    |
| SLIDE_RIGHT   |
| FLIP_X        |
| FLIP_Y        |
| ROTATE        |

## types

all modal types user passed to the `<Provider>` component.
