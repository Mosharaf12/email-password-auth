
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './components/LoginBootstrap';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path:'/login',
        element: <LoginBootstrap></LoginBootstrap>
      },
      {
        path:'/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
     
    ]
  },
  
])

function App() {

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
     


      {/* <form onSubmit={handleRegister}>
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' />
        <br />
        <button type="submit">Register</button>

      </form> */}
    
    </div>
  );
}

export default App;
