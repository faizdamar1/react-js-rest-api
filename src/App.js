import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TambahComp from './Component/Class/TambahComp';
import AboutPage from './Component/Fungsional/AboutPage';
import DetailComp from './Component/Fungsional/DetailComp';
import HomePage from './Component/Fungsional/HomePage';
import ListComp from './Component/Class/ListComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';
import HooksUseEffect from './Component/Hooks/Fungsional/HooksUseEffect';
import { CartContext } from './Context/CartContext ';
import ProductComp from './Component/Fungsional/ProductComp';
import HooksReducer from './Component/Hooks/Fungsional/HooksReducer';

const App = () => {
  const [value, setValue] = useState(0)
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/detail/:id" component={DetailComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffect} />
          <Route exact path="/product" component={ProductComp} />
          <Route exact path="/reducer" component={HooksReducer} />
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
