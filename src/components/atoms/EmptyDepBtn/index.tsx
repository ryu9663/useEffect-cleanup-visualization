import { useEmptyDepStore } from "@/pages/EmptyDep/index.store";

export const EmptySidebarBtn = () => {
  const [count, setCount] = useEmptyDepStore((state) => [
    state.count,
    state.setCount,
  ]);

  return (
    <>
      <pre>
        <code></code>
      </pre>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>count++</button>
    </>
  );
};
