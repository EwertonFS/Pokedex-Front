import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar"
import HomeCards from "../../components/Cards/HomeCards/HomeCards"
import { ContainerHomePage } from "./styled";


const HomePage = ()=>{

    //useEfect



    return (
        <> 
                <SearchAppBar />
            <ContainerHomePage>
                <HomeCards />
                <HomeCards />
                <HomeCards />
                <HomeCards />
                <HomeCards />
                <HomeCards />
            </ContainerHomePage>
        </>
      );
}

export default HomePage