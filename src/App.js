import "./App.css";
import { EventDelegation } from "./page/EventDelegation";
import { UseEffectandDebounce } from "./page/UseEffectandDebounce";
import { UserProvider } from "./page/UseReducerAndUseContrext";
import { UseReducerExample } from "./page/UseReducerExample";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UseEffectandDebounce />
        <UseReducerExample />
        <EventDelegation />
      </UserProvider>
    </div>
  );
}

export default App;
