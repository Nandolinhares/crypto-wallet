import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/router'
import { MakeApp } from '@/main/factories/pages/home'
import './global.css'

ReactDOM.render(<Router makeApp={MakeApp} />, document.getElementById('main'))
