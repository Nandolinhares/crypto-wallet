import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import StarterContent from '../../../presentation/components/starter-content/starter-content.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Components/StarterContent',
  component: StarterContent,
  decorators: [StoryRouter()]
} as Meta

export const starter = (): ReactElement => {
  return (
    <Provider store={store}>
      <StarterContent />
    </Provider>
  )
}
