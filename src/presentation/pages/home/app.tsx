import React from 'react'
import { Container } from '@material-ui/core'
import Login from '@/presentation/components/login/login.component'

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Login />
    </Container>
  )
}

export default App
