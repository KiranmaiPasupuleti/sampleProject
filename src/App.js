import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import ThankYouPage from './Components/ThankyouPage/ThankYouPage';
import HomeDashboard from './Components/HomeDashboard/HomeDashboard';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import LoginUseForm from './Components/Login/LoginUseForm';
import RegisterFormHook from './Components/Register/RegisterFormHook';
import CheckOut from './Components/CheckOut/CheckOut';
import AllOrders from './Components/AllOrders/AllOrders';
import CheckOutModule from './Components/CheckOutModule/CheckOutModule';
import CheckModule from './Components/CheckOutModule/CheckModule';
import Profile from './Components/Profile/Profile';
import Address from './Components/Address/Address';
import Order from './Components/Order/Order';
import InvoicePdf from './Components/InvoicePdf/InvoicePdf';
import { createContext, useState } from 'react';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LoginUseForm/>}/>
      <Route path='/register' element={<RegisterFormHook/>} />
      {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
      <Route path='/thankyou' element={<ThankYouPage/>}/>
      <Route path='/home' element={<HomeDashboard/>} />
      <Route path='/productDetails/:id' element={<ProductDetail/>} />        
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/credit-card' element={<CheckOut/>}/>
      <Route path='/allorders' element={<AllOrders/>} />
      <Route path='/addProductToCartCheckout' element={<CheckOutModule/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/order' element={<Order/>}/>
      <Route path='/getCustAddress' element={<Address/>} />
      <Route path='/invoicePdf' element={<InvoicePdf/>}/>
      {/* <Route path='/checkoutmodules' element={<CheckModule/>} /> */}
    </Route>
  )
)

// export const CartContext = createContext({cartListData:[],addToCart: () => {}})

export function App() {
// const [cartList,setCartList] = useState([])

//   const addToCart = (id) => {
//     console.log(`item addes to cart ${id}`)
//   }

  return (
    <div className="App">
      {/* <CartContext value={{cartListData: cartList, addToCart}}> */}
        <RouterProvider router={router}/>

      {/* </CartContext> */}
    </div>
  );
}


