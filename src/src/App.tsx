import BezierCurve from "./components/bezier-canvas";
import Header from "./components/header";
import { InputTabs } from "./components/input-tabs";
import { useWindowSize } from "./hooks/useWindowSize";
import { PointProvider } from "./hooks/usePointContext";
import IterationSlider from "./components/iteration-slider";

function App() {
  const windowSize = useWindowSize();

  console.log(windowSize);

  return (
    <>
      <Header />

      <PointProvider>
        <div className={`flex justify-around h-[${windowSize.height - 64}px]`}>
          <div className={`p-10 self-center flex flex-col`}>
            <BezierCurve />
            <IterationSlider />
          </div>

          <div className='self-center'>
            <InputTabs />
          </div>
        </div>
      </PointProvider>
    </>
  );
}

export default App;