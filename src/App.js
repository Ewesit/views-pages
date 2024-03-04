// configure routes

import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';


function App(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='CharacterList' element={<CharacterList />} />
            <Route path='Characters' element={<Characters />} />
            <Route path='NotFound' element={<NotFound />} />
            <Route path='characterDetails' element={<CharacterDetails />} />
            

        

        

        </Routes>
    );
}

export default App;