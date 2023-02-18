import { useContext } from "react";
import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";
import PokedexCards from "../../components/Cards/PokedexCard/PokedexCards";
import GlobalStateContext from "../../global/GlobalStateContex";

const PokedexPage = () => {
  const { pokedex } =useContext(GlobalStateContext);

  return (
    <>
      <SearchAppBar title={"Pokédex"} />

      {pokedex && pokedex.map((poke) => {
          <PokedexCards key={poke.name} poke={poke}/>;
        })}
    </>
  );
};

export default PokedexPage;
