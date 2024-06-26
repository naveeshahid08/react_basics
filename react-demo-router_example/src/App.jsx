import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Persons from './routes/Persons.jsx';
import Root from './routes/Root.jsx';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29, location: 'Helsinki' },
    { id: 2, name: 'Kati', title: 'developer', age: 25, location: 'NY' },
    { id: 3, name: 'Karin', title: 'designer', age: 45, location: 'Tartu' },
  ]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/persons', element: <Persons persons={persons} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
