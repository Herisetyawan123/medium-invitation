// asset and component
import "./index.css";
import LeftSide from "./section/LeftSide";
import RightSide from "./section/RightSide";

function App() {
  return (
    <main className="grid grid-cols-12 w-screen h-screen">
      <div className="hidden lg:block lg:col-span-8 h-full w-full">
        <LeftSide />
      </div>
      <div className="col-span-12 lg:col-span-4 h-full overflow-auto">
        <RightSide />
      </div>
    </main>
  );
}

export default App;
