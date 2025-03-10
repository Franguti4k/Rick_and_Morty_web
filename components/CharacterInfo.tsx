import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: string,
    image: string,
    episodes: Array<{
        id: string,
        name: string
    }>
}

const CharacterInfo:FunctionalComponent<Props> =  (props) => {
    const {name, status, type, gender, origin, image, episodes} = props
    return(
        <div class= "character">
            <div class= "inicioIMG">
                <a href="/">
                <img src="https://media.tenor.com/BgR83Df82t0AAAAe/portal-rick-and-morty.png" width= "100px"/>
                </a>
            </div>
            <div class= "characterInfo">
                <h1>{name}</h1>
                <div class= "tarjeta">
                    <img src={image}/>
                    <div>
                        <ul class= "lista_1">
                            <li><strong>status: </strong>{status}</li>
                            <li><strong>type: </strong>{type}</li>
                            <li><strong>gender: </strong>{gender}</li>
                            <li><strong>origin: </strong>{origin}</li>
                        </ul>
                    </div>
            </div>
            </div>
            <div class= "episodes">
                <h2>Episodes</h2>
                <ul>
                    {episodes.map((episode) => <a href={`/episode/${episode.id}`}><li><h3>Episode {episode.id}: {episode.name}</h3></li> </a>)}
                </ul>
                
            </div>   
        </div>
    )
}

export default CharacterInfo