import React, { useState, useEffect } from "react";
import Image from "next/image";

interface IsometricSquareProps {
  selectedOption: string | null;
  adjustPoints: (amount: number) => void;
  canAddItem: (cost: number) => boolean;
  setMap: (map: [any][any]) => void;
  locRow: any; 
  locCol: any;
  currentMap: [any][any]
}

const IsometricSquare: React.FC<IsometricSquareProps> = ({
  selectedOption,
  adjustPoints,
  canAddItem,
  setMap,
  locRow,
  locCol,
  currentMap,
}) => {
  const [displayOption, setDisplayOption] = useState<string | null>(null);
  const [workerInterval, setWorkerInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleClick = () => {
    if (selectedOption === "House" && canAddItem(30)) {
      const updatemap = [...currentMap];
      updatemap[locRow][locCol] = 1;
      setMap(updatemap);      
      adjustPoints(-10);
      setDisplayOption("House");
    } else if (selectedOption === "Worker" && canAddItem(10)) {
      const updatemap = [...currentMap];
      updatemap[locRow][locCol] = 2;
      adjustPoints(-30);
      setDisplayOption("Worker");
      const interval = setInterval(() => {
        adjustPoints(1);
      }, 6000);
      setWorkerInterval(interval);
    }
  };

  const handleDelete = () => {
    if (displayOption === "House") {
      adjustPoints(10);
    } else if (displayOption === "Worker") {
      adjustPoints(30);
      if (workerInterval) {
        clearInterval(workerInterval);
        setWorkerInterval(null);
      }
    }
    setDisplayOption(null);
  };

  useEffect(() => {
    return () => {
      if (workerInterval) {
        clearInterval(workerInterval);
      }
    };
  }, [workerInterval]);

  const getImageSrc = () => {
    if (displayOption === "House") {
      return "/house.png"; // Ruta a la imagen de la casa
    } else if (displayOption === "Worker") {
      return "/work.png"; // Ruta a la imagen del trabajador
    }
    return "/pasto.png"; // Ruta a la imagen predeterminada
  };

  return (
    <div
      className="relative w-24 h-24 transform bg-green-500 hover:bg-green-400 flex justify-center items-center cursor-pointer border-2 border-gray"
      onClick={handleClick}
    >
      {displayOption ? (
        <>
          <Image
            src={getImageSrc()}
            alt={displayOption}
            layout="fill"
            objectFit="cover"
          />
          <button
            className="absolute top-0 right-0 p-1 text-xs text-red-500"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from bubbling up to the parent div
              handleDelete();
            }}
          >
            x
          </button>
        </>
      ) : (
        <Image
          src="/pasto.png"
          alt="Pasto"
          layout="fill"
          objectFit="cover"
          className="hover:bg-green-400"
        />
      )}
    </div>
  );
};

export default IsometricSquare;
