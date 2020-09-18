import React from "react";

import nature from "./nature.svg";

import * as styles from "./styles";

export default function Login({ motion }) {
  return (
    <styles.Login style={motion}>
      <styles.FormWrapper>
        <styles.Form>
          <h1>Login to bigfan Modal</h1>
          <styles.TextInput name="email" type="text" placeholder="Your email" />
          <styles.TextInput
            name="password"
            type="password"
            placeholder="Your password"
          />
          <styles.SubmitButton type="submit" />
        </styles.Form>
      </styles.FormWrapper>
      <styles.Illustration src={nature} />
    </styles.Login>
  );
}
