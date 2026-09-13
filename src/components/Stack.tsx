import type { ItechType } from "../types/techType";

interface StackProps {
  selectedStack: ItechType[];
  onRemove: (technology: ItechType) => void;
  onRemoveAll: () => void;
}

const Stack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: StackProps) => {

  return (
    <aside className="h-fit rounded-xl border border-gray-100 bg-white p-4 shadow-sm">

      <h2 className="text-sm font-semibold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-[12px] text-gray-400">
        {selectedStack.length} Technology
        {selectedStack.length !== 1 ? "ies" : ""} Selected
      </p>

      {selectedStack.length === 0 ? (

        <div className="mt-5 flex min-h-[80px] items-center justify-center rounded-lg border border-dashed border-gray-00">
          <p className="text-center text-[12px] text-gray-400">
            Your stack is empty.
          </p>
        </div>

      ) : (

        <>

          <div className="mt-4 space-y-2">

            {selectedStack.map((technology) => (

              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-gray-100 p-2"
              >

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-5 w-5 object-contain"
                />

                <div className="min-w-0 flex-1">

                  <p className="truncate text-[12px] font-medium text-slate-900">
                    {technology.name}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>

                </div>

                <button
                  onClick={() => onRemove(technology)}
                  className="text-[25px] text-gray-300 transition hover:text-red-500"
                  title={`Remove ${technology.name}`}
                >
                  ×
                </button>

              </div>

            ))}

          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-[12px] font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>

        </>

      )}

    </aside>
  );
};

export default Stack;

