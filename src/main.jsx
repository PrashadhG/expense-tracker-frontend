import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryTable from './Components/DateTable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored  "
      transition:Bounce
    />
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<App />}></Route>
        <Route path="/category/:category" component={CategoryTable} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
