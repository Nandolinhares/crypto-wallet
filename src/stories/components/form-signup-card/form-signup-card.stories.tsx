import React, { ReactElement } from 'react'
import StoryRouter from 'storybook-react-router'
import { Meta } from '@storybook/react/types-6-0'
import LoginSignupCard from '../../../presentation/components/login-signup-card/login-signup-card.component'

export default {
  title: 'Components/FormSignup',
  component: LoginSignupCard,
  decorators: [StoryRouter()]
} as Meta

export const SignupCard = (): ReactElement => <LoginSignupCard value="signup" />
