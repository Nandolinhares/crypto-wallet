import React, { ReactElement } from 'react'
import StoryRouter from 'storybook-react-router'
import { Meta } from '@storybook/react/types-6-0'
import Header from '../../../presentation/components/header/header.component'
import Profile from '../../../presentation/pages/profile/profile'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Pages/Profile',
  component: Profile,
  decorators: [StoryRouter()],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

export const profile = (): ReactElement => {
  return (
    <Provider store={store}>
      <Header />
      <Profile />
    </Provider>
  )
}
