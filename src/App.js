import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment";
import VirtualNin from "./Pages/VirtualNin";
import Home from "./Pages/Home";
import Download from "./Pages/DownloadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Virtualnin" element={<VirtualNin />} />
          <Route exact path="/details" element={<Home />} />
          <Route exact path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
