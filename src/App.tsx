import "./App.css";
import { Header } from "./components/ui/header/Header";
import { Heroes } from "./components/Heroes";
import { Pagination } from "./components/ui/pagination/Pagination";
import { SearchForm } from "./components/SearchForm";
import { useHeroes } from "./hooks/useHeroes";
import { useSearch } from "./hooks/useSearch";
import { useSearchForm } from "./hooks/useSearchForm";
import { useSort } from "./hooks/useSort";
import { Loader } from "./components/ui/loader/Loader";

const App: React.FC = () => {
  const { sort, handleSort } = useSort();
  const { search, setSearch, error } = useSearch();
  const {
    heroes,
    loading,
    currentPage,
    setCurrentPage,
    totalHeroes,
    heroesPerPage,
    getHeroes,
    lastIndex, 
    firstIndex,
    isSearchPerformed
  } = useHeroes({
    search,
    sort,
  });

  const { handleSubmit, handleChange } = useSearchForm({
    getHeroes,
    setSearch,
  });

  const paginatedHeroes = heroes.slice(firstIndex, lastIndex)

  return (
    <div className="page">
      <Header />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        error={error}
        handleSort={handleSort}
        sort={sort}
      />
      <main>{loading ? 
        <div>
          {<Loader />}
        </div>
        : <Heroes heroes={paginatedHeroes} isSearchPerformed ={isSearchPerformed} />}</main>
      <Pagination
        heroesPerPage={heroesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalHeroes={totalHeroes}
      />
    </div>
  );
};

export default App;
