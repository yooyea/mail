import * as React from "react";
import aa from "@/assets/imgs/a.png";
import { Button } from "@/components/ui/button"

const App: React.FC = () => {
  return (
    <div>
      <Button>Button</Button>
      <h1 className="text-3xl font-bold underline flex select-none">
        Hello world!
      </h1>
      <img src={aa}></img>
    </div>
  );
};

export default App;
