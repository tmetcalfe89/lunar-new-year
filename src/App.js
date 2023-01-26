import Circles from "./components/Circles";
import useLunarNewYear from "./hooks/useLunarNewYear";
import * as Zodiac from "./zodiac";

function App() {
  const { currentAnimal, nextAnimal, daysRemaining } = useLunarNewYear();

  const animalStyle = {
    filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.35))",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <img
        style={{
          ...animalStyle,
          opacity: `${Math.max(daysRemaining / 365, 0.15)}`,
          zIndex: daysRemaining > 100 ? 2 : 1
        }}
        src={Zodiac[currentAnimal]}
        alt={currentAnimal}
      />
      <img
        style={{ ...animalStyle, opacity: `${Math.max((365 - daysRemaining) / 365, 0.15)}` }}
        src={Zodiac[nextAnimal]}
        alt={nextAnimal}
      />
      <Circles />
    </div>
  );
}

export default App;
