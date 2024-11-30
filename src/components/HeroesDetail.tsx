import './HeroesDetail.css'

import { HeroesProps } from "../lib/definitions/heroes";

export function HeroesDetail ({ heroes } : HeroesProps){

    return (
        <ul className="heroes">
        {
          heroes.map(hero => (
            <li className="hero" key={hero.id}>
              <h2>Hero Name:  {hero.name}</h2>
            </li>
          ))
        }
      </ul>
    )
}