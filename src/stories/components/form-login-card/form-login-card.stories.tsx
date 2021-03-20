import React, { ReactElement } from 'react'
import StoryRouter from 'storybook-react-router'
import { Meta } from '@storybook/react/types-6-0'
import LoginSignupCard from '../../../presentation/components/login-signup-card/login-signup-card.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Components/FormLogin',
  component: LoginSignupCard,
  decorators: [StoryRouter()]
} as Meta

export const SignupCard = (): ReactElement => {
  return (
    <Provider store={store}>
      <LoginSignupCard value="login" />
    </Provider>
  )
}
