import { use, useState } from "react";
import type { ItechType } from "../techTypes";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import toast from "react-hot-toast";

interface TechnologiesProps {
  techPromise: Promise<ItechType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  const [selectedStack, setSelectedStack] = useState<ItechType[]>([]);

  const handleToggle = (technology: ItechType) => {
    setSelectedStack((previousStack) => {
      const isSelected = previousStack.some(
        (item) => item.id === technology.id
      );

      if (isSelected) {
        return previousStack;
      }
      
      return [...previousStack, technology];
    });
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (technology: ItechType) => {
    setSelectedStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== technology.id
      )
    );
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h1>

          <p className="mt-1 text-[12px] text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_180px]">


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => {

              const isSelected = selectedStack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  onToggle={handleToggle}
                />
              );
            })}

          </div>

          <Stack
            selectedStack={selectedStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;