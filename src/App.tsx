import { useState } from "react";
import { Button } from "@shadcn/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-(center 5xl)">Hello World {count}</h1>
      <div className="flex-s-center my">
        <Button className="" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
    </div>
  );
}

export default App;
