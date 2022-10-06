import "./App.css";
import { StockDetailPage } from "./pages/StockDetailPage";
import { StockOverViewPage } from "./pages/StockOverViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverViewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
