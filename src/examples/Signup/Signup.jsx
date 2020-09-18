import React from "react";

import street from "./street.svg";

import * as styles from "./styles";

export default function SignUp({ motion }) {
  return (
    <styles.SignUp style={motion}>
      <styles.FormWrapper>
        <styles.Form>
          <h1>SignUp to bigfan Modal</h1>
          <styles.TextInput name="email" type="text" placeholder="Your email" />
          <styles.TextInput
            name="password"
            type="password"
            placeholder="Your password"
          />
          <styles.SubmitButton type="submit" />
        </styles.Form>
      </styles.FormWrapper>
      <styles.Illustration src={street} />
    </styles.SignUp>
  );
}
