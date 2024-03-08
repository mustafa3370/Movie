
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
const Router = createBrowserRouter([
{path:'/',element:<Layout/>,children:[
    { path: "/", element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "*", element: <Error/> }
]},
])


function App() {
  return <>
<RouterProvider router={Router}/>

  </>
}

export default App;
