import React from 'react'
// MUI
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core'

type Props = {
  openDialogInformation: any
  setOpenDialogInformation: any
}

const DialogCheckout: React.FC<Props> = ({ ...props }: Props) => {
  const handleClose = (): void => {
    props.setOpenDialogInformation({
      error: false,
      message: '',
      open: false
    })
  }
  return (
    <Dialog
      open={props.openDialogInformation.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle data-testid="dialog-message" id="alert-dialog-title">{props.openDialogInformation.message}</DialogTitle>
      {/* <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <h2 data-testid="dialog-message" ></h2>
        </DialogContentText>
      </DialogContent> */}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogCheckout
