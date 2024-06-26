"use client";
import { useState } from "react";
import Sidebar from "./sideBar";
import IsometricSquare from "./IsometricSquare";

const Game: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [points, setPoints] = useState<number>(100); // Iniciar con 100 puntos por ejemplo
  const array = Array.from({ length: 5 }, () => Array(5).fill(0));
  const [map, setMap] = useState(array);
  console.log(map);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const adjustPoints = (amount: number) => {
    setPoints((prevPoints) => {
      const newPoints = prevPoints + amount;
      return newPoints < 0 ? 0 : newPoints; // No permitir puntos negativos
    });
  };

  const canAddItem = (cost: number) => points >= cost;

  const rows = 5;
  const cols = 5;
  const squares = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      squares.push(
        <IsometricSquare
          key={`${i}-${j}`}
          selectedOption={selectedOption}
          adjustPoints={adjustPoints}
          canAddItem={canAddItem}
          setMap={setMap}
          locRow={i}
          locCol={j}
          currentMap={map}
        />
      );
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/agua.png')] bg-cover">
      <div className="grid grid-cols-5 gap-2">{squares}</div>
      <Sidebar onSelectOption={handleSelectOption} />
      <div className="fixed top-0 right-0 m-4 text-black">Points: {points}♦</div>
    </div>
  );
};

export default Game;
