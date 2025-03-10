import Characters from "../components/Characters.tsx";

type charactersApi = {
  id: string;
  name: string;
  image: string;
};

type CharacterResponse = {
  info: {
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: charactersApi[];
};

export default async function Home(req: Request) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page") || "1";

  try {
    const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const characters: CharacterResponse = await data.json();

    if (!characters.results) {
      return <div>Error al cargar los personajes</div>;
    }

    return (
      <div>
        <Characters characters={characters.results} />
        <div class = "botones"style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
          {characters.info.prev && (
            <a href={`/?page=${parseInt(page) - 1}`} style={{ padding: "10px", border: "1px solid black" }}>
              Anterior
            </a>
          )}
          {characters.info.next && (
            <a href={`/?page=${parseInt(page) + 1}`} style={{ padding: "10px", border: "1px solid black" }}>
              Siguiente
            </a>
          )}
        </div>
      </div>
    );
  } catch (e) {
    console.log("Error:", e);
    return <div>Error al cargar los personajes</div>;
  }
}
