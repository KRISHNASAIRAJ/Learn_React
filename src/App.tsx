import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button onClick={() => alert("Hello World!")}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
