import Light from "./Light";

function App() {
  return (
    <>
      <Light />
      <m-cube x={-4} y={5} z={3} width={1} height={2} depth={1} ry={10} color="red" />
      <m-sphere x={0} y={5} z={3} radius={1} color="green" />
      <m-cylinder x="4" y="5" z="3" radius="0.5" height="2" color="blue" />
    </>
  );
}