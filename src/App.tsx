import React from 'react';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './components/layout/Layout';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
              <Route index element={<Episodes/>}/>
              <Route path={"/characters/:episodeId"} element={<Characters/>}/>
              <Route path={"/characterdetails/:characterId"} element={<CharacterDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>    
  );
};

export default App;
