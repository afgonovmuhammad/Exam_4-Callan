import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout, Home, About_Us,Services,Universities,Students,News, Contacts} from './Routes/Routes'
import Loader from './component/Loader/Loader'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Suspense fallback = {<Loader/>}>

        <Layout />
      </Suspense>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "About_Us",
        element: (
          <Suspense fallback={<Loader />}>
            <About_Us />
          </Suspense>
        ),

        
      },

      {
        path: "Services",
        element: (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        ),

        
      },
      {
        path: "Universities",
        element: (
          <Suspense fallback={<Loader />}>
            <Universities />
          </Suspense>
        ),
      },

      {
        path: "Students",
        element: (
          <Suspense fallback={<Loader />}>
            <Students />
          </Suspense>
        ),
      },

      {
        path: "News",
        element: (
          <Suspense fallback={<Loader />}>
            <News />
          </Suspense>
        ),
      },

      {
        path: "Contacts",
        element: (
          <Suspense fallback={<Loader />}>
            <Contacts />
          </Suspense>
        ),
      },


      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <Error />
          </Suspense>
        ),
      }

    ]
  }


])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App