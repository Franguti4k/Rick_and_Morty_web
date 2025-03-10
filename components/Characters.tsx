import type { FunctionalComponent } from "preact/src/index.d.ts";
import Character from "./CharacterContainer.tsx";
type Character = {
    id:string,
    name: string,
    image: string
}
type Props = {
    characters: Character[]
}

const Characters:FunctionalComponent<Props> = (prop) => {
    const characters = prop.characters
    return(
        <div class= "charactersContainer">
            <h1>Rick And Morty Characters</h1>
            <div class="characters">
                {characters.map((character) => (
                <Character character={character}/>
                ))}
            </div>
            
        </div>
    )
}

export default Characters