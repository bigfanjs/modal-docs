import styled from 'styled-components'
import { Modal } from '@bigfan/modal'

export const Login = styled(Modal)`
  @media screen and (max-width: 966px) {
    width: 90%;
  }
  width: 500px;
  height: auto;
  box-shadow: 0px 2px 30px #000;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
  overflow: hidden;
  position: absolute;
`

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
`

export const Illustration = styled.img`
  width: auto;
  height: 20em;
  background-color: #c0eeff;
  padding: 3px;
  box-sizing: border-box;
`

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
`

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  > input {
    margin-top: 10px;
    :first-of-type {
      margin-top: 0;
    }
  }

  @media (min-width: 470px) {
    max-width: 500px;
  }
`

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
  width: 100%;
`
