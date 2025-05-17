import ClampFormat from "./components/ClampFormat";
import ClampResult from "./components/ClampResult";

function App()
{
  return (
    <div className="flex flex-col h-dvh">
      <ClampResult></ClampResult>
      <ClampFormat></ClampFormat>
    </div>
  );
}

export default App;