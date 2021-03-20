import React, { ReactElement } from 'react'
import StoryRouter from 'storybook-react-router'
import { Meta } from '@storybook/react/types-6-0'
import Header from '../../../presentation/components/header/header.component'
import Statement from '../../../presentation/pages/statement/statement'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Pages/Statement',
  component: Statement,
  decorators: [StoryRouter()],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

export const statement = (): ReactElement => {
  return (
    <Provider store={store}>
      <Header />
      <Statement />
    </Provider>
  )
}
