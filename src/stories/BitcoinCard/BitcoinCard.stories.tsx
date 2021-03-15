import React, { ReactElement } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import BitcoinCard from '../../presentation/components/bitcoin-card/bitcoin-card'

export default {
  title: 'Components/BitcoinCard',
  component: BitcoinCard
} as Meta

export const bitcoinCard = (): ReactElement => <BitcoinCard value="Bitcoin" />
