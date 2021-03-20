import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import StoryRouter from 'storybook-react-router'
import SelectCrypto from '../../../../presentation/components/buy-sell-crypto-card/select-crypto/select-crypto.component'
import { Provider } from 'react-redux'
import store from '../../../../presentation/redux/store'

export default {
  title: 'Components/SelectCrypto',
  component: SelectCrypto,
  decorators: [StoryRouter()]
} as Meta

export const selectCrypto = (): ReactElement => {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: '#373536' }}>
        <SelectCrypto cryptoSelected="bitcoin" setCryptoSelected="" />
      </div>
    </Provider>
  )
}
