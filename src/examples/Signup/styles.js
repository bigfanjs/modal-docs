import styled from "styled-components";
import { Modal } from "@bigfan/modal";

export const SignUp = styled(Modal)`
  width: 90%;
  height: 70%;
  box-shadow: 0px 2px 30px #000;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  min-height: 500px;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  width: 50%;
`;

export const Illustration = styled.img`
  width: 50%;
  background-color: #c0eeff;
`;

export const TextInput = styled.input`
  color: #3f3d56;
  display: block;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #3f3d56;
  border-radius: 6px;
  margin: 0px;
  padding: 15px;
  outline: none;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;

  > input {
    margin-top: 20px;
    :first-of-type {
      margin-top: 0;
    }
  }

  @media (min-width: 470px) {
    max-width: 500px;
  }
`;

export const SubmitButton = styled.input`
  display: block;
  border: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 50px;
  margin: 0px;
  padding: 0px 35px;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  height: 50px;
  min-height: 50px;
  appearance: none;
  border-radius: 10px;
  background-color: #f50257;
`;
