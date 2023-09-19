import { useNavigate } from "react-router-dom";

const navigateHook = (where) => {
  const navigate = useNavigate();
  navigate(`${where}`);
};

export default navigateHook;
