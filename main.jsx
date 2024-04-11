 import React from 'react'
 import ReactDOM from 'react-dom/client'

 import { BrowserRouter, Routes, Route} from 'react-router-dom'

 import './main.scss'
 import * as bootstrap from 'bootstrap'

 import App from './App'
 import Home from './Home'
 import Register from './Register'
 import Login from './Login'
 import Deposit from './Deposit'
 import Data from './Data' 
 import Withdraw from './Withdraw'
 import ConditionalData from './ConditionalData'

 ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<App />}>
                <Route index element = {<Home />} />
                <Route path = "register" element = {<Register />} />
                <Route path = "login" element = {<Login />} />
                <Route path = "deposit" element = {<Deposit />} />
                <Route path = "data" element = {<Data />} />
                <Route path = "withdraw" element = {<Withdraw />} />
                <Route path = "conditional-data" element = {<ConditionalData />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>,
 )