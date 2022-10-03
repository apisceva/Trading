import "./App.css";
import { StockDetailPage } from "./pages/StockDetailPage";
import { StockOverViewPage } from "./pages/StockOverViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverViewPage />} />
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
