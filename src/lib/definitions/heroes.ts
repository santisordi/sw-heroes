export type Hero = {
    url: string
    id: string
    name: string    
    gender: string
    height: number
    mass: number
    skin_color: string
}

export interface HeroesProps{
    heroes: Hero[]
}
  
export interface UseHeroesProps {
    search: string;
    sort: boolean;
}
  
export interface UseHeroesReturn {
    heroes: Hero[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    heroesPerPage: number;
    totalHeroes: number;
    firstIndex: number;
    lastIndex: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    getHeroes: ({ search }: { search: string}) => Promise<void>;
}

export interface SearchHeroesParams {
    search: string;
    page?: number; 
  }