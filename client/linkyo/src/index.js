import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from './pages/landing-page';
import FaqAccordion from './components/faq-accordion';
// import { gsap } from 'gsap';
import Header from './components/header';
import Test from './components/test';
import BrowseDrops from './pages/browse-drops';
import CreateDrop from './pages/create-drop';
import LoginPage from './pages/login-page';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <h1>Welcome to Linkyo</h1>
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/accordion",
    element: <FaqAccordion />
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/browse/drops",
    element: <BrowseDrops />
  },
  {
    path: "/create/drop",
    element: <CreateDrop />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/test",
    element: <Test />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
