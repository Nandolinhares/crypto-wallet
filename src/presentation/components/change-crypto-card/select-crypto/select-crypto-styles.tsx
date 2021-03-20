import React from 'react'
import { makeStyles, Radio, RadioProps, withStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  radioTitle: {
    color: '#fff',
    '&': {
      color: '#fff !important'
    }
  },
  formControlLabel: {
    color: '#fff'
  }
})

export const GreenRadio = withStyles({
  root: {
    color: 'green',
    '&$checked': {
      color: 'green'
    }
  },
  checked: {}
})((props: RadioProps) => <Radio color="default" {...props} />)
