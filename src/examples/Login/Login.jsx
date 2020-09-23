/**
  If you are reading this code, putting all of the Provider, Scene and Modal
  in one place is just for the purpose of making it possible to show the
  modals on mdx files.
*/

import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Provider, Scene, useModal } from '@bigfan/modal'

import * as styles from './styles'

function LoginForm () {
  return (
    <styles.Login>
      <styles.Illustration src={useBaseUrl('img/nature.svg')} />
      <styles.FormWrapper>
        <styles.Form>
          <h1>Login to bigfan Modal</h1>
          <styles.TextInput name='email' type='text' placeholder='Your email' />
          <styles.TextInput
            name='password'
            type='password'
            placeholder='Your password'
          />
          <styles.SubmitButton type='submit' />
        </styles.Form>
      </styles.FormWrapper>
    </styles.Login>
  )
}

function LoginScene () {
  const {
    types: { LOGIN },
    openModal
  } = useModal()
  const modals = { [LOGIN]: LoginForm }

  return (
    <>
      <Scene modals={modals} />
      <button
        className='button button--warning button--lg'
        onClick={() => openModal(LOGIN)}
      >
        Log in
      </button>
    </>
  )
}

export default function Login () {
  return (
    <Provider types={{ LOGIN: 'LOGIN' }}>
      <LoginScene />
    </Provider>
  )
}
