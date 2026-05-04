import Counter from "./Components/Counter";

function App() {
  return (
    <div style={{ backgroundColor: "#7d73e652", margin: "20px" }}>
      <h1 style={{ color: "#fafafa" }}>Welcome to Counter Application</h1>
      <p style={{ color: "#c4c1e0" }}>*This Application have minimum value 0</p>
      <br />
      <Counter />
    </div>
  )
}
export default App