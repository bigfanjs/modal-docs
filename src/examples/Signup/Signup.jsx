/**
  If you are reading this code, putting all of the Provider, Scene and Modal
  in one place is just for the purpose of making it possible to show the
  modals on mdx files.
*/

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Provider, Scene, useModal } from "@bigfan/modal";

import * as styles from "./styles";

function SignUpForm() {
  return (
    <styles.SignUp>
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
      <styles.Illustration src={useBaseUrl("img/street.svg")} />
    </styles.SignUp>
  );
}

function SignupScene() {
  const {
    types: { SIGNUP },
    effects: { FLIP_X },
    openModal,
  } = useModal();
  const modals = { [SIGNUP]: SignUpForm };

  return (
    <>
      <Scene modals={modals} />
      <button
        className="button button--warning button--lg"
        onClick={() => openModal(SIGNUP, { effect: FLIP_X, spring: true })}
      >
        Sign up
      </button>
    </>
  );
}

export default function Signup() {
  return (
    <Provider types={{ SIGNUP: "SIGNUP" }}>
      <SignupScene />
    </Provider>
  );
}
