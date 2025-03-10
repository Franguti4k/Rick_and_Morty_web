import { FunctionalComponent } from 'preact/src/index.d.ts';
import Characters from "./Characters.tsx";
type character = {
    id:string,
    name:string,
    image:string
}
type Props = {
    id:string,
    name: string,
    air_date: string,
    episode: string,
    characters: character[]
}

const EpisodeInfo:FunctionalComponent<Props> = (prop) => {
    return (
        <div>
            <div class= "inicioIMG">
                <a href="/">
                <img src="https://media.tenor.com/BgR83Df82t0AAAAe/portal-rick-and-morty.png" width= "100px"/>
                </a>
            </div>
            <div class= "episodeInfo">
                <h1>Epidode {prop.id}</h1>
                <ul>
                    <li><strong>Name: </strong>{prop.name}</li>
                    <li><strong>Air_date: </strong>{prop.air_date}</li>
                    <li><strong>Episode: </strong>{prop.episode}</li>
                </ul>
            </div>
            <div class = "Episode-Characters">
                <h2>Episode Characters</h2>
                <Characters characters={prop.characters}/>
            </div>
        </div>
    )
}

export default EpisodeInfo