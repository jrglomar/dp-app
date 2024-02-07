import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './components/Pages/RootPage'
import Home from './components/Pages/HomePage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
