import { useCountDepStore } from "@/pages/CountDep/index.store";
import { Button } from "junyeol-components";
export const CountDepBtn = () => {
  const [count, setCount] = useCountDepStore((state) => [
    state.count,
    state.setCount,
  ]);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      {count}
      <span>count++</span>
    </Button>
  );
};
