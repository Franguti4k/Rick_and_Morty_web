import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios"
import CharacterInfo from "../../components/CharacterInfo.tsx";

type characterApi = {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: {name:string},
    image: string,
    episode: string[]
}
type episodeApi = {
    id: string,
    name:string
}
type Data = {
    name: string,
    status: string,
    type: string,
    gender: string,
    origin: string,
    image: string,
    episodes: episodeApi[]
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params
        try{
            const character = await Axios.get<characterApi>(`https://rickandmortyapi.com/api/character/${id}`)
            const episodesURL = character.data.episode
            const episodes:episodeApi[] = await Promise.all(episodesURL.map(async(url) => {
                const ep = await Axios.get<episodeApi>(url)
                return ep.data
            }))
            return  ctx.render({
                name: character.data.name,
                type: character.data.type,
                origin: character.data.origin.name,
                image: character.data.image,
                gender: character.data.gender,
                status: character.data.status,
                episodes: episodes

            })
        }catch(_e){
            return new Response("Error")
        }

        
    }
}


const Page = (props: PageProps<Data>) => { 
    const {name, status, gender, origin, type, image, episodes} = props.data
    return <CharacterInfo name = {name} status= {status} type = {type} gender= {gender} origin= {origin} image= {image} episodes={episodes}/>
}
    
export default Page;