import { useNavigate } from "react-router-dom";


const DetailsPokemonName = (name)=> {
const navigate = useNavigate()
  
  navigate(`/pokemons/${name}`);
  }

  export default DetailsPokemonName 