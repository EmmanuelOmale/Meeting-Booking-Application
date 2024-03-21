import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import HomePage from "./pages/Home";
import Meeting from "./pages/Meeting";
import ErrorPage from "./pages/NoPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet" element={<Meeting />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
