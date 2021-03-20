import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import BuySellCryptoCard from '../../../presentation/components/buy-sell-crypto-card/buy-sell-crypto-card.component'
import { Provider } from 'react-redux'
import store from '../../../presentation/redux/store'

export default {
  title: 'Components/BuySellCryptoCard',
  component: BuySellCryptoCard,
  decorators: [StoryRouter()]
} as Meta

export const start = (): ReactElement => {
  return (
    <Provider store={store}>
      <BuySellCryptoCard />
    </Provider>
  )
}
