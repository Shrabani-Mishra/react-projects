import { useEffect, useState } from "react";
import "./Pokemon.css";

export const Pokemon = () => {
  const [poke, setPokemon] = useState(null);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       setError(error);
  //        setLoading(false)
  //       });
  // };
  const fetchPokemon=async()=>{
    try{
 const res =await fetch(API);
 const data=await res.json();
 setPokemon(data);
//  setLoading(false);
    }
    catch(error){
        console.log(error);
        setError(error);
        // setLoading(false);
        
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(poke);

  // Don't render until API data arrives
//   if (!poke) {
//     return <h2>Loading...</h2>;
//   }

if(loading){
    return (
    <div><h2>Loading...</h2>
    </div>
    );
}
if(error){
    return(
        <div>
          {/* error.message is ahuman readable eroor message */}
            <h1>Error:{error.message}</h1>
        </div>
    )
}
  return (
    <section className="pokemon-section">
      <header>Let's Catch Pokémon</header>

      <ul>
        <li className="pokemon-card">
          <figure>
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
            />
          </figure>

          <h1>{poke.name}</h1>
          <p>
            Height:<span>{poke.height}</span>
          </p>
          <p>
            Weight:<span>{poke.weight}</span>
          </p>
          <p>Speed:<span>{poke.stats[5].base_stat}</span></p>
        </li>
      </ul>
    </section>
  );
};