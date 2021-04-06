import "./App.css";
import Search from "./pages/Search";
import StatusProvider from "./context/StatusProvider";

function App() {
  return (
    <div className="App">
      <StatusProvider>
        <Search />
      </StatusProvider>
    </div>
  );
}

export default App;
