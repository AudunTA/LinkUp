import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <Routes basename="LinkUp">
      <Route index element={<SignUp />}></Route>
      <Route path="/Feed" element={<Layout />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
