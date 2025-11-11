import { EventDelegation } from "./page/EventDelegation";
import { UseEffectandDebounce } from "./page/UseEffectandDebounce";
// import { UserProvider } from "./page/UseReducerAndUseContrext";
import { UseReducerExample } from "./page/UseReducerExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { ProductedRoute } from "./route/ProductedRoute";
import "./App.css";
import { LoginForm } from "./component/forms/LoginForm";
import { RouterContext } from "./component/Authcontext";
import { Trottle } from "./page/TrottleExample";

function App() {
  return (
    <div className="App">
      <RouterContext>
        <BrowserRouter>
          {/* <UserProvider> */}
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/trottle" element={<Trottle />} />
            <Route
              path="/desh"
              element={
                <ProductedRoute>
                  <Dashboard />
                </ProductedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <UseEffectandDebounce />
        <UseReducerExample />
        <EventDelegation />
        {/* </UserProvider> */}
      </RouterContext>
    </div>
  );
}

export default App;
