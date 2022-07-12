import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Create } from "./pages/Create";
import { Read } from "./pages/Read";
import { Update } from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;