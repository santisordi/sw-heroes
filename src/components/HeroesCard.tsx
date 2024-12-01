import { HeroesCardProps } from "../lib/definitions/heroes";

export function HeroesCard ({ hero }: HeroesCardProps){
    const heroImage = `/images/${hero.name.toLowerCase().replace(/\s+/g, '-')}.webp`;

    return (
     
       <div className="hero-container">
         {
            <div className="hero">
                <h3>{hero.name}</h3>
                <img src={heroImage} alt={hero.name} />
                <p>Gender: {hero.gender}</p>
                <p>Heigth: {hero.height}</p>
                <p>Mass:{hero.mass}</p>
                <p>Skin Color: {hero.skin_color}</p>
            </div>
        }
       </div>

)
}