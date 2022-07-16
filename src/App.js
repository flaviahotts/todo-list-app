//import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Create } from "./pages/Create";
import { Read } from "./pages/Read";
import { Edit } from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit/:_id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;