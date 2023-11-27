import { useCountDepStore } from "@/pages/CountDep/index.store";
import { Section } from "@/styles/theme";
import { useEffect, useState } from "react";

export const CountDep = () => {
  const [count] = useCountDepStore((state) => [state.count]);
  const [clouserCount, setClouserCount] = useState(0);
  useEffect(() => {
    console.log("[count]", count);
    setClouserCount(count);

    return () => console.log("[count] clear", count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <Section>
      <h2>{"[count]"}</h2>
      {count}

      <h3>closure count</h3>
      {clouserCount}
    </Section>
  );
};
