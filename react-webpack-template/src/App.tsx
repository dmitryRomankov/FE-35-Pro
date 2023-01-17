import "./styles.css";
import roadImage from "./road.jpeg";
import reactIcon from "./react-1.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        Edited React Template Typescript Webpack - {process.env.NODE_ENV} -{" "}
        {process.env.name}
      </h1>
      <img src={roadImage} alt="Road" width="300" height="200" />
      <img src={reactIcon} alt="Icon" width="300" />
      {/* <h2>{buildUrl("http://localhost:3000", "asd=asd")}</h2> */}

      <ClickCounter />
    </>
  );
};
