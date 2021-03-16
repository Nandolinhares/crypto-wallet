import { makeLoginFactory } from '../../../../main/factories/usecases/make-login-factory'

// Adapter
import { makeCreateAccountFactory } from '../../../../main/factories/usecases/create-account-factory'

type Props = {
  value: string
  username: string
  setErrorState: any
}

export const VerifyLoginSignup = ({ ...props }: Props): void => {
  switch (true) {
    // If signup and username doesnt exists in localStorage
    case (props.value === 'signup' && localStorage.getItem(props.username) === null):
      makeCreateAccountFactory().create(props.username)
      location.reload()
      break
    // If login and username exists in localStorage
    case (props.value === 'login' && localStorage.getItem(props.username) !== null):
      makeLoginFactory().login(props.username)
      location.reload()
      break
    case (props.value === 'login' && localStorage.getItem(props.username) === null):
      props.setErrorState({
        error: true,
        helperText: 'Usuário não encontrado'
      })
      break
    default:
      props.setErrorState({
        error: true,
        helperText: 'O usuário já existe'
      })
      break
  }
}
