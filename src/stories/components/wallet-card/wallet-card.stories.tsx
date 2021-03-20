import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import WalletCard from '../../../presentation/components/wallet-card/wallet-card.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Components/WalletCard',
  component: WalletCard,
  decorators: [StoryRouter()]
} as Meta

export const together = (): ReactElement => {
  return (
    <Provider store={store}>
      <WalletCard type="money" value="2000" />
      <WalletCard type="bitcoin" value="0.0008421" />
      <WalletCard type="brita" value="487.29" />
    </Provider>
  )
}

export const money = (): ReactElement => {
  return (
    <Provider store={store}>
      <WalletCard type="money" value="2000" />
    </Provider>
  )
}

export const bitcoin = (): ReactElement => {
  return (
    <Provider store={store}>
      <WalletCard type="bitcoin" value="0.0008421" />
    </Provider>
  )
}

export const brita = (): ReactElement => {
  return (
    <Provider store={store}>
      <WalletCard type="brita" value="487.29" />
    </Provider>
  )
}
