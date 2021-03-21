import React from 'react'
// MUI
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
// Styles
import { useStyles } from './select-buy-sell-button-styles'

type Props = {
  stateSelected: any
  setStateSelected: any
}

const SelectBuySellButton: React.FC<Props> = ({ stateSelected, setStateSelected }: Props) => {
  const classes = useStyles()
  return (
    <BottomNavigation
      value={stateSelected}
      onChange={(event, newValue) => {
        setStateSelected(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.buttonSelected} id="select-buy-state" label="COMPRA" />
      <BottomNavigationAction className={classes.buttonSelected} id="select-sell-state" label="VENDA" />
    </BottomNavigation>
  )
}

export default SelectBuySellButton
