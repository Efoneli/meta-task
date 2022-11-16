import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/layouts/Layouts";
import PlaceToStay from "./pages/PlaceToStay";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={ <Layouts /> }>
       <Route index element={<Home />} />
      
      <Route path="/placetostay" element={<PlaceToStay />} />

     </Route>
      )
    );
    return <RouterProvider router={router} />;
}

export default App;