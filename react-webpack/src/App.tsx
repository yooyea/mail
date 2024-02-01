import * as React from "react";
import aa from "@/assets/imgs/a.png";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline flex select-none">
        Hello world!
      </h1>
      <img src={aa}></img>
    </div>
  );
};

export default App;
