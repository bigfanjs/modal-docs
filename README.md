## Installation:

using npm
`npm i @bigfan/modal`

using yarn:
`yarn add @bigfan/modal`

## The Setup:

### Setp 1:

In your application entry point, wrap your app with the Provider component and pass it your modal types.

_index.js (entry point):_

```js
import React from "react";
import { Modal, Provider } from "@bigfan/modal";
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

### setp 2:

Inject the <Scene> component somewhere in your code where you want to display your modals and then map your modal types to the actual modals. The best place to put this component is your application layout component as shown in the following example.

_Layout.js:_

```js
import React from "react";
import { Scene, useModal } from "@bigfan/modal";

import Login from "common/app/Login";
import Signup from "common/app/Signup";
import Warning from "common/app/Warning";

export default function Layout({ children }) {
  const {
    types: { LOGIN, SIGNUP, WARNING },
  } = useModal();

  const modals = {
    [LOGIN]: Login,
    [SIGNUP]: Signup,
    [WARNING]: Warning,
  };

  return (
    <styles.Wrapper>
      <GlobalStyles />
      <Nav />
      <div className="content">{children}</div>
      <Footer />
      <Scene modals={modals} />
    </styles.Wrapper>
  );
}
```

### Setp 3:

You have to wrap all of your modals with a <Modal> component.

_common/app/Login.js:_

```js
import { Modal } from "@bigfan/modal";

export default function Login() {
  return (
    <Modal>
      <div>My login modal</div>
    </Modal>
  );
}
```

### Step 4:

At any component down the tree you can open any modal. In the following example, we want to open Login modal from Navbar component:

_NavBar.js:_

```js
import React from "react";
import { useModal } from "@bigfan/modal";

export default function NavBar() {
  const {
    openModal,
    modals: { LOGIN },
  } = useModal();

  return <div onClick={() => openModal(LOGIN)} />;
}
```
