/**
  If you are reading this code, putting all of the Provider, Scene and Modal
  in one place is just for the purpose of making it possible to show the
  modals on mdx files.
*/

import React from "react";
import { Provider, Scene, useModal } from "@bigfan/modal";

import * as styles from "./styles";

function NotificationForm() {
  const { closeModal } = useModal();

  return (
    <styles.NotificationForm style={{ position: "absolute" }}>
      <styles.Head>
        <styles.XIcon
          src="/static/img/x.svg"
          alt="close"
          onClick={closeModal}
        />
      </styles.Head>
      <styles.SmileyFace src="/static/img/smiley.svg" alt="smiley" />
      <styles.SuccessTitle>success</styles.SuccessTitle>
      <styles.SuccessSubTitle>
        hey there, your post was successfully created.
      </styles.SuccessSubTitle>
      <styles.Bar>
        <styles.Tag>successfull</styles.Tag>
      </styles.Bar>
    </styles.NotificationForm>
  );
}

function NotificationScene() {
  const {
    types: { NOTIFICATION },
    effects: { SLIDE_LEFT },
    openModal,
  } = useModal();
  const modals = { [NOTIFICATION]: NotificationForm };

  return (
    <>
      <Scene modals={modals} />
      <button
        className="button button--warning button--lg"
        onClick={() =>
          openModal(NOTIFICATION, {
            effect: SLIDE_LEFT,
            timeout: 5000,
            noOverlay: true,
            spring: true,
            scroll: true,
          })
        }
      >
        Show Notification
      </button>
    </>
  );
}

export default function Notification() {
  return (
    <Provider types={{ NOTIFICATION: "NOTIFICATION" }}>
      <NotificationScene />
    </Provider>
  );
}
