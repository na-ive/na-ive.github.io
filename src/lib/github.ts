export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repos");
    }
    const repos: GithubRepo[] = await response.json();

    // Sort by stargazers as a proxy for "important" projects if pinned isn't available
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
