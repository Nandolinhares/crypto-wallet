import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import { App } from '../../../presentation/pages/home'

export default {
  title: 'Pages/Home',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

export const home = (): ReactElement => <App />
