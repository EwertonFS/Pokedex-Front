import AppBarPokedexDetails from "../../components/AppBar/AppBarPokemonsDetails/AppBarPokedexDetails";
import CardsImg from "../../components/Cards/PokemonsDetails/CardsImg";
import CardsStatus from "../../components/Cards/PokemonsDetails/CardsStatus";
import CardsMoves from "../../components/Cards/PokemonsDetails/CardsMoves";
import CardsTypes from "../../components/Cards/PokemonsDetails/CardsTypes";
import { ContainerCards } from "./styled";
import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";

const PokemonsDetailsPage = () => {
  return (
    <>
    <SearchAppBar title={'Lista de Detalhes'}/>
      {/* <AppBarPokedexDetails /> */}
      <ContainerCards>
        <CardsImg />
        <CardsStatus />
        <CardsTypes />
        <CardsMoves />
      </ContainerCards>
    </>
  );
};

export default PokemonsDetailsPage;
