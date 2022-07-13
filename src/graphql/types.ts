export type LocationType = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
};

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationType;
  location: LocationType;
  image: string;
  episode: Episode[];
  created: string;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};
