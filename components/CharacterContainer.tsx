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

    // Función para redirigir cuando se hace clic en la imagen
    const handleClick = () => {
        window.location.href = `/character/${character.id}`;
    };

    return (
        <div class="characterContainer">
            <a href= {`/character/${character.id}`}><img  src={character.image}/></a>
            <h3>{character.name}</h3>
        </div>
    );
};

export default CharacterContainer;
