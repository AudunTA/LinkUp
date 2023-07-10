import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes basename="LinkUp">
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
