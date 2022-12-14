import { BrowserRouter } from "react-router-dom";
import { Router } from "../src/Router";
function App() {

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
      
        {/* <RouterProvider router = {routerApp}/> */}
       <BrowserRouter>
       <Router/>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App;
