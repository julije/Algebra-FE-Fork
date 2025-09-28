import "./App.css";

function ConditionalRendering() {
  const broj = 2;
  const isLoading = true;
  const tekst = broj === 1 ? <p>broj je jedan</p> : <p>broj nije jedan</p>;
  const LS = <p>Loading spinner...</p>;
  return (
    <>
      <h2>Number?</h2>
      {tekst}
      {isLoading && <p>Loading spinner...</p>}
      {isLoading && LS}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ConditionalRendering />
    </div>
  );
}

export default App;
