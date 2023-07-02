import { useSelector } from "react-redux";
import Main from "./Main";
import "./context.css";

const Service = () => {
  const isLight = useSelector((state)=>state.isLight);

  return (
    <div className={isLight ? "light" : "dark"}>
      <Main />
      <h2>Services are not available currently.</h2>
    </div>
  );
};

export default Service;