import React from "react";
import { useModal } from "@bigfan/modal";

import smiley from "./smiley.svg";
import x from "./x.svg";

import * as styles from "./styles";

export default function AddToCart() {
  const { closeModal } = useModal();

  return (
    <styles.AddToCart style={{ position: "absolute" }}>
      <styles.Head>
        <styles.XIcon src={x} alt="close" onClick={closeModal} />
      </styles.Head>
      <styles.SmileyFace src={smiley} alt="smiley" />
      <styles.SuccessTitle>success</styles.SuccessTitle>
      <styles.SuccessSubTitle>
        hey there, your post was successfully created.
      </styles.SuccessSubTitle>
      <styles.Bar>
        <styles.Tag>successfull</styles.Tag>
      </styles.Bar>
    </styles.AddToCart>
  );
}
