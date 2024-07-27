import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
// import Projects from './routes/Projects.jsx';
// import Tech from './routes/Tech.jsx';
// import Resume from './routes/Resume.jsx';
// import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/404.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>
  },
  // {
  //   path: "/projects",
  //   element: <Layout><Projects /></Layout>
  // },
  // {
  //   path: "/tech",
  //   element: <Layout><Tech /></Layout>
  // },
  // {
  //   path: "/resume",
  //   element: <Layout><Resume /></Layout>
  // },
  // {
  //   path: "/contact",
  //   element: <Layout><Contact /></Layout>
  // }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
