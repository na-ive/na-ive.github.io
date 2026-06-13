import { useEffect, useState } from "react";
import { Star } from "@phosphor-icons/react";

export function StarCounter({ repo }: { repo: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Failed to fetch stars", err));
  }, [repo]);

  if (stars === null) return null;

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 border-[1.5px] border-zinc-900 bg-zinc-900 text-zinc-100 text-xs font-mono font-bold uppercase tracking-[0.1em] w-max">
      <Star weight="fill" className="w-3 h-3" />
      <span>{stars}</span>
    </div>
  );
}
