import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TambahComp from './Component/Class/TambahComp';
import AboutPage from './Component/Fungsional/AboutPage';
import DetailComp from './Component/Fungsional/DetailComp';
import HomePage from './Component/Fungsional/HomePage';
import ListComp from './Component/Fungsional/ListComp';
import NavbarComp from './Component/Fungsional/NavbarComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/detail/:id" component={DetailComp}/>
        <Route exact path="/mahasiswa" component={ListComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
