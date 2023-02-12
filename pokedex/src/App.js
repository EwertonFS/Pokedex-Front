import React from 'react';
import RoutesApp from "./routes/Routes";
import GlobalState from "./global/GlobalState";





function App() {
  return (
    <>  
      <GlobalState>
       <RoutesApp>

       </RoutesApp>
       </GlobalState>
        
    </>
  );
}

export default App;
