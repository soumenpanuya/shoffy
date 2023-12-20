import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {GlobalStyle} from "./style/GlobalStyle";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Header />,
      errorElement: <ErrorPage />,
      children:[
        {path:'/',element:<HomePage />}
      ]  
    }
  ])
  return (
  
    <>
    <GlobalStyle />
    <RouterProvider router={router} />
    </>

  );
}

export default App;
