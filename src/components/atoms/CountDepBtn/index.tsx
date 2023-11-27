import { useCountDepStore } from "@/pages/CountDep/index.store";

export const CountDepBtn = () => {
  const [count, setCount] = useCountDepStore((state) => [
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
