import { useEmptyDepStore } from "@/pages/EmptyDep/index.store";
import { Section } from "@/styles/theme";
import { useEffect, useState } from "react";

export const EmptyDep = () => {
  const [count] = useEmptyDepStore((state) => [state.count]);
  const [clouserCount, setClouserCount] = useState(0);

  useEffect(() => {
    console.log("[]", count);
    setClouserCount(count);

    return () => console.log("[] clear", count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section>
      <h2>{"[]"}</h2>
      {count}

      <h3>closure count</h3>
      {clouserCount}
    </Section>
  );
};
