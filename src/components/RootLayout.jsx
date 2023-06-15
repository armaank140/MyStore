
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux";
import store from "../store/store";

export default function RootLayout() {

  return (
    
        <>
        <Provider store={store}>
        <Navbar/>
      
      <main>
          <Outlet/>
      </main>
          
        </Provider>
      
        </>
   
  )
}
