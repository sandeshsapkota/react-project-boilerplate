interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface RepositoryType {
  id: number;
  full_name: string;
  html_url: string;
  watchers: number | string;
  stargazers_count: number | string;
  forks: number | string;
  updated_at: string;
  owner: Owner;

  name: string;
  default_branch: string;
  open_issues: number;
  open_issues_count: number;
  description: string;
  size: string;
  language: string;
  watchers_count: number;
  forks_count: number;
  created_at: string;
  pushed_at: string;
}
