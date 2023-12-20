import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {GlobalStyle} from "./style/GlobalStyle";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Header />,
      errorElement: <ErrorPage />,
      children:[
        {path:'/',element:<HomePage />},
        {path:"signin",element:<SigninPage />},
        {path:"signup",element:<SignupPage />}
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
