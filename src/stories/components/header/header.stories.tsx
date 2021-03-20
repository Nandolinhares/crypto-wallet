import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import Header from '../../../presentation/components/header/header.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [StoryRouter()]
} as Meta

export const header = (): ReactElement => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}
