import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import CryptoCard from '../../../presentation/components/crypto-card/crypto-card'

export default {
  title: 'Components/BitcoinCard',
  component: CryptoCard
} as Meta

export const bitcoinCard = (): ReactElement => <CryptoCard value="Bitcoin" />
