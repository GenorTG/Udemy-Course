import AdviceCounter from "./components/Challenges/AdviceCard";
import C1profilecard from "./components/C1profilecard";
import DateCounter from "./components/Challenges/DateCounter";

function App() {
  return (
    <div className="py-8 flex-center w-svw flex-col gap-10 min-h-svh h-full bg-gradient-to-b from-primary to-dark">
      <C1profilecard />
      <AdviceCounter />
      <DateCounter />
    </div>
  );
}

export default App;
