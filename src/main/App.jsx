import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Routes from '../main/Routes'
import Logo from '../components/Logo'


export default props =>
    <HashRouter>
    <div className="app">
        <Header />
        <Nav />
        <Routes />
        <Logo />
    </div>
    </HashRouter>