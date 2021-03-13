import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import Header from '../../presentation/components/header/header.component'

export default {
  title: 'Components/Header',
  component: Header
} as Meta

export const header = (): ReactElement => <Header />
