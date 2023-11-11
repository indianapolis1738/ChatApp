import HomeScreen from './functions/HomeScreen'
import Send from './functions/Send'
import Receive from './functions/Receive'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import History from './functions/History';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen/>
  },
  {
    path: 'send',
    element: <Send/>
  },
  {
    path: 'receive',
    element: <Receive/>
  },
  {
    path: 'history',
    element: <History />
  }
])

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
