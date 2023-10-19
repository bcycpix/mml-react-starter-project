// App.tsx
import * as React from "react";
import { useState } from "react";
import Light from "./Light";

function App() {
  const [cubeColor, setCubeColor] = useState<"red" | "yellow">("red");

  function handleCubeClick() {
    setCubeColor(cubeColor === "red" ? "yellow" : "red");
  }

  return (
    <>
      <Light />
      <m-cube
        onClick={handleCubeClick}
        x={-4}
        y={5}
        z={3}
        width={1}
        height={2}
        depth={1}
        ry={10}
        color={cubeColor}
      />
      <m-sphere x={0} y={5} z={3} radius={1} color="green" />
      <m-cylinder x="4" y="5" z="3" radius="0.5" height="2" color="blue" />
    </>
  );
}