import { useCallback, useMemo, useRef, useState } from "react";
import { searchHeroes } from "../services/heroService";
import { Hero, UseHeroesProps } from "../lib/definitions/heroes";

export function useHeroes({ search, sort }: UseHeroesProps) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [heroesPerPage, setHeroesPerPage] = useState<number>(4);
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false)

  const previousSearch = useRef<string>(search);
  const totalHeroes = heroes.length
  const lastIndex = currentPage * heroesPerPage
  const firstIndex = lastIndex - heroesPerPage
  //callback to creat the function only when search is use
  const getHeroes = useCallback(async (
    { search }: { search: string }
  ) => {
    if (search === previousSearch.current) return;
    setIsSearchPerformed(true)
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;

      const newHeroes = await searchHeroes({ 
        search, 
        page: currentPage });
      if (newHeroes) {
        setHeroes (newHeroes);
      } else {
        setHeroes([]); // manejo por si el null
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  //useMemo for calculation
  const sortedHeroes = useMemo(() => {
    return sort
      ? [...heroes].sort((a, b) => a.name.localeCompare(b.name))
      : heroes;
  }, [sort, heroes]);

  return { 
    heroes: sortedHeroes,
    currentPage,
    setCurrentPage,
    heroesPerPage,
    getHeroes, 
    loading, 
    error,
    totalHeroes,
    lastIndex,
    firstIndex,
    isSearchPerformed
  };
}
