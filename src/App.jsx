// asset and component
import "./index.css";
import LeftSide from "./section/LeftSide";
import RightSide from "./section/RightSide";

function App() {
  return (
    <main className="w-full grid grid-cols-12">
      <div className="hidden lg:block lg:col-span-8 h-[100vh] w-full sticky top-0">
        <LeftSide />
      </div>
      <div className="col-span-12 lg:col-span-4 overflow-auto">
        <RightSide />
      </div>
    </main>
  );
}

export default App;
