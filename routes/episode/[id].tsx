
import { Handlers, FreshContext, PageProps } from '$fresh/server.ts';
import Axios from "axios";
import EpisodeInfo from "../../components/episodeInfo.tsx";


type episodeApi = {
    id:string,
    name: string,
    air_date: string,
    episode: string
    characters: string[]
}

type charactersApi = {
    id:string,
    name:string,
    image: string
}

type Data = {
    id:string
    name: string,
    air_date: string,
    episode: string
    characters: charactersApi[]
}

export const handler: Handlers = {
    GET: async ( _req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params
        try{
            const episode = await Axios.get<episodeApi>(`https://rickandmortyapi.com/api/episode/${id}`)
            const charactersURL = episode.data.characters
            const characters:charactersApi[] = await Promise.all(charactersURL.map( async(characterURL) =>{
                const character = await Axios.get<charactersApi>(characterURL)
                return character.data
            }))
            return ctx.render({
                id: episode.data.id,
                name: episode.data.name,
                air_date: episode.data.air_date,
                episode: episode.data.episode,
                characters: characters
            })
        }catch(_e){
            return new Response("Error")
        }
    }
}

const Page = (props: PageProps<Data>) => {
    const {id, name, air_date, episode, characters} = props.data
    return <EpisodeInfo id = {id} name = {name} air_date = {air_date} episode = {episode} characters={characters} />
}

export default Page