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
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium border border-amber-200 dark:border-amber-500/20 w-max">
      <Star weight="fill" className="w-4 h-4" />
      <span>{stars}</span>
    </div>
  );
}
