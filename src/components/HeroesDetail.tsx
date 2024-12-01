import "./HeroesDetail.css";

import { HeroesProps } from "../lib/definitions/heroes";
import { HeroesCard } from "./HeroesCard";
import { useHeroSelection } from "../hooks/useHeroesSetelction";

export function HeroesDetail({ heroes }: HeroesProps) {
  const { selectedHero, selectHero, deselectHero } = useHeroSelection();
  console.log("HeroesDetail", selectHero);
  return (
    <div className="heroes-detail-container">
      {selectedHero ? (
        <>
          <HeroesCard hero={selectedHero} />

          <button onClick={deselectHero} className="back-button">
            Go Back
          </button>
        </>
      ) : (
        <ul className="heroes">
          {heroes.map((hero) => (
            <li
              className="hero"
              key={hero.id}
              onClick={() => selectHero(hero)} // Maneja la selección del héroe
            > 
              <h2>{hero.name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
