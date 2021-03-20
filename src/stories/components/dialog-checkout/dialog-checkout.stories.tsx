import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import DialogCheckout from '../../../presentation/components/dialog-checkout/dialog-checkout.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

const openDialogInformation = {
  error: false,
  message: 'Mensagem teste',
  open: true
}

export default {
  title: 'Components/DialogCheckout',
  component: DialogCheckout,
  decorators: [StoryRouter()]
} as Meta

export const starter = (): ReactElement => {
  return (
    <Provider store={store}>
      <DialogCheckout openDialogInformation={openDialogInformation} setOpenDialogInformation="" />
    </Provider>
  )
}
