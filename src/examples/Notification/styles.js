import styled from "styled-components";
import { Modal } from "@bigfan/modal";

export const NotificationForm = styled(Modal)`
  width: 400px;
  height: 200px;
  box-shadow: 0px 2px 30px #414141cc;
  background-color: #fff;
  border-radius: 10px;
  top: 80px;
  right: 20px;
  background-color: #3de590;
  text-align: center;
`;

export const Head = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0 0;
`;

export const XIcon = styled.img`
  width: 20px;
  display: block;
  cursor: pointer;
`;

export const SuccessTitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
`;

export const SuccessSubTitle = styled.h6`
  margin: 10px 0 0;
`;

export const Bar = styled.div`
  width: 100%;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
`;

export const Tag = styled.h4`
  margin: 0;
  text-transform: uppercase;
  line-height: 40px;
`;

export const SmileyFace = styled.img`
  width: 45px;
`;
