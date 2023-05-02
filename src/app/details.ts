export interface Details {
  name: string;
  title: string;
  poster_path: string;
  profile_path: string;
  original_language: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  budget: number;
  overview: string;
  biography: string;
  production_companies: prodCompanies[];
  seasons: season[];
  homepage: string;
  id: number;
  known_for_department: string;
}
interface prodCompanies {
  name: string;
  logo_path: string;
}
interface season {
  name: string;
  overview: string;
  poster_path: string;
  showMore?: boolean;
}
