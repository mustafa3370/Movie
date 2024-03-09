
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
import Series from './components/series/Series';
const Router = createBrowserRouter([
{path:'/',element:<Layout/>,children:[
    { path: "home", element: <Home />},
    { path: "home", element: <Home />},
    { path: "series", element: <Series/>},
    { path: "*", element: <Error/>}
]},
])


function App() {
  return <>
<RouterProvider router={Router}/>

  </>
}

export default App;
