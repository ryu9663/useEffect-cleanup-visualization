import { useEmptyDepStore } from "@/pages/EmptyDep/index.store";
import { Button } from "junyeol-components";

export const EmptySidebarBtn = () => {
  const [count, setCount] = useEmptyDepStore((state) => [
    state.count,
    state.setCount,
  ]);

  return (
    <Button>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>count++</button>
    </Button>
  );
};
