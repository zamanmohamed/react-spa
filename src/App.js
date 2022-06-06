import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainUI from "./main_UI/MainUI";
import UserProfile from "./user/UserProfile";

const App = () => {
  return (
    <Routes>
      <Route path="react-spa/" element={<MainUI />} />
      <Route path="profile/:id" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
