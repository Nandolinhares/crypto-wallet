import React, { ReactElement } from 'react'
import StoryRouter from 'storybook-react-router'
import { Meta } from '@storybook/react/types-6-0'
import Header from '../../../presentation/components/header/header.component'
import { App } from '../../../presentation/pages/home'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Pages/Home',
  component: App,
  decorators: [StoryRouter()],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

export const home = (): ReactElement => {
  return (
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  )
}
