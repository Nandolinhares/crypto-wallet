import React, { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
// Redux
import { Provider } from 'react-redux'
import store from '../../redux/store'

export const renderWithProviders = (ui: ReactElement): RenderResult => {
  return render(<Provider store={store}>{ui}</Provider>)
}
