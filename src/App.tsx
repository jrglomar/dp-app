import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './components/Pages/Root'
import Home from './components/Pages/Home';
import History from './components/Pages/History';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/history',
        element: <History />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
