import type { ItechType } from "../types/techType";

interface TechnologyCardProps {
  technology: ItechType;
  isSelected: boolean;
  onToggle: (technology: ItechType) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onToggle,
}: TechnologyCardProps) => {

  return (
    <div
      className={`flex min-h-[180px] flex-col rounded-xl border bg-white p-4 transition ${
        isSelected
          ? "border-pink-200 bg-gray-50 opacity-60"
          : "border-gray-100 shadow-sm hover:shadow-md"
      }`}
    >

      <div className="flex items-start justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-2 py-1 text-[12px] text-pink-500">
          {technology.badge}
        </span>

      </div>


      <h2 className="mt-3 text-[16px] font-semibold text-slate-900">
        {technology.name}
      </h2>

      <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-400">
        {technology.description}
      </p>

      <div className="mt-auto">

        <div className="mb-2 mt-3 flex items-center justify-between text-[11px]">

          <span className="rounded bg-gray-100 px-2 py-1 text-gray-500">
            {technology.category}
          </span>

          <span className="text-gray-400">
            {technology.difficulty}
          </span>

          <span className="text-yellow-500">
            ⭐ {technology.rating}
          </span>

        </div>

        <button
          disabled={isSelected}
          onClick={() => onToggle(technology)}
          className={`w-full rounded-md py-2 text-[12px] font-medium transition ${
            isSelected
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>

      </div>

    </div>
  );
};

export default TechnologyCard;