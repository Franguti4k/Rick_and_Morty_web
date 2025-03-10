import { FunctionalComponent } from "preact";

type Props = {
    character: {
        id: string;
        name: string;
        image: string;
    };
};

const CharacterContainer: FunctionalComponent<Props> = (prop) => {
    const character = prop.character;

    return (
        <div class="characterContainer">
            <a href= {`/character/${character.id}`}><img  src={character.image}/></a>
            <h3>{character.name}</h3>
        </div>
    );
};

export default CharacterContainer;
