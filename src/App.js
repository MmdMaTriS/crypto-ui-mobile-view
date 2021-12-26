import { Route, Routes } from "react-router-dom";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import Home from "./pages/Home/Home";
import Tickets from "./pages/Comments/Tickets/Tickets";
import RecordTicket from "./pages/Comments/RecordTicket/RecordTicket";
import NotFound from "./pages/404/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record-ticket" element={<RecordTicket />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomMenu />
    </>
  );
}

export default App;
