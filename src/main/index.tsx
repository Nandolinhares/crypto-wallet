import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/router'
import { MakeApp } from '@/main/factories/pages/home'

ReactDOM.render(<Router makeApp={MakeApp} />, document.getElementById('main'))
