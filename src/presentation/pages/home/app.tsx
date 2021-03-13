import React from 'react'
import { Container } from '@material-ui/core'
// Components
import { Header, StarterContent } from '../../components'

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <StarterContent />
    </Container>
  )
}

export default App
