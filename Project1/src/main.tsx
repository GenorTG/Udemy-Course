import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'App'
import ErrorPage from 'containers/ErrorPage'
import Home from 'containers/Home'
import ListMaker from 'containers/ListMaker'
import Flashcards from 'containers/Flashcards'
import AccordionShowcase from 'containers/AccordionShowcase'
import BillTipping from 'containers/BillTipping'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'listmaker',
        element: <ListMaker />
      },
      {
        path: 'flashcards',
        element: <Flashcards />
      },
      {
        path: 'accordionshowcase',
        element: <AccordionShowcase />
      },
      {
        path: 'BillTipping',
        element: <BillTipping />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
)
