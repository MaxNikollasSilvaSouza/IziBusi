import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - Configurando Router
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Contatos from './routes/pages/contatos/contatos.jsx';
import Capa from './routes/pages/capa/capa.jsx';
import ErrorPage from './routes/pages/error404/Error404.jsx';
/*
const router = createBrowserRouter([

  {
    path: "/",
    element: <Capa></Capa>
  },
  {
    path: "contato",
    element: <Contatos></Contatos>
  }

]);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    //3- Página de erro
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      
        {
          path: "/",
          element: <Capa></Capa>
        },
        {
          path: "contato",
          element: <Contatos></Contatos>
        }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
