import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";
import Avis from './Avis';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './index.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoreDeets from './MoreDeets';
import Home from './Home';
import Choix from './Choix';
import Validation from './Validation';
import Confirmation from './Confirmation';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';






function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <Router>
    <div className="App">
    <nav className="navbar">
      <h1>Liverpool kit </h1>
      <div className="links">

        <button onClick={()=>handleClick('en')} >
            English
        </button>
        <button onClick={()=>handleClick('ko')} >
            Korean
        </button>
        <button onClick={()=>handleClick('chi')} >
            Chinese
        </button>
        {t('Hello')}
        <Link to="/choix">{t('Choix de t-shirts')} </Link>
        <Link to="/ambassadeur">{t('Nos Ambassadeur')} </Link>
        <Link to="/avis" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>{t('Avis')}</Link>
      </div>
    </nav>
      <div className="content">
      <Switch>
            
            
            <Route exact path="/choix">
            <Choix />
            </Route>
            <Route exact path="/ambassadeur">
              <MoreDeets />
            </Route>
            <Route exact path="/avis">
              <Avis />
            </Route>

            <Route exact path="/validation">
            <Validation />
            </Route>

            <Route exact path="/confirmation">
            <Confirmation />
            </Route>
            
          </Switch>
          
          
          <div style={{ float: 'left'}} >
                <img src='./img/ap.PNG' className="img-fluid border-radius p-4" alt="" />
            </div>

          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      {t('Hello')}
        <Card.Title>{t('ACHETER VOS T-SHIRTS LEGENDES !!')}</Card.Title>
        <Card.Text>{t('Vous aussi vous etes un supporter de Liverpool \
         et vous aimeriez en plus d\'avoir des t-shirts \
         de legende ,prendre des photos avec nos \
         ambassadeurs qui sont des anciens entraineurs \
         et joueurs du clubs vous etes au bon endroit !!')}
         
        </Card.Text>
        <Button variant="primary">Choisir le kit </Button>
      </Card.Body>
    </Card>
          
         
          <div className="dessous" >
            <h1>L'histoire du club : <br /> </h1>
            <p>
            {t('Le Liverpool Football Club est un club de football anglais fondé le 13 août 1892 et basé à Liverpool,\
            dans le Nord-Ouest de l\'Angleterre. Ses joueurs (les « Reds ») évoluent depuis sa création au stade \
            d\'Anfield. Son emblème est le « Liver bird », un oiseau mythique, mi-cormoran mi-aigle. \
            Le chant You\'ll Never Walk Alone, l\'hymne et la devise du club, est mondialement connu.\
            Le Liverpool FC possède un des plus beaux palmarès européens avec six Ligues des\
            champions, trois Coupes de l\'UEFA, quatre Supercoupes de l\'UEFA, et une coupe du \
            monde des clubs, et l\'un des plus grands palmarès anglais avec dixneuf championnats \
            , huit Coupes d\'Angleterre, neuf Coupes de la Ligue et quinze Community Shield.')}
            
        </p>
        </div>
          
      </div>


      <Footer />
    </div>
    </Router>

    
  );
  
}

export default App;
