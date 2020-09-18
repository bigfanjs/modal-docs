import React from "react";

// import { Provider, Scene } from "@bigfan/modal";

// import Login from "../../examples/Login/Login";
// import Signup from "../../examples/Signup/Signup";
// import Notification from "../../examples/Notification/Notification";

// const types = {
//   LOGIN: "LOGIN",
//   SIGNUP: "SIGNUP",
//   NOTIFICATION: "NOTIFICATION",
// };

// const SceneWrapper = () => {
//   const {
//     types: { LOGIN, SIGNUP, NOTIFICATION },
//   } = useModal();

//   const modals = {
//     [LOGIN]: Login,
//     [SIGNUP]: Signup,
//     [NOTIFICATION]: Notification,
//   };

//   return <Scene modals={modals} />;
// };

export default ({ children }) => {
  return <div style={{ backgroundColor: "blue", display: "hidden" }}>wow!</div>;
};
