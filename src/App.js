import logo from './logo.svg';
import React,{useContext} from 'react';
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
import ProgressBar from 'react-bootstrap/ProgressBar';
import English from './English';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';




function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  const now = 25;
  return (
    <Router>
      
    <div className="App">
    <nav className="navbar">
      <h1>Liverpool kit </h1>
      <div className="links">

        
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
            <Route exact path="/english">
              <English />
            </Route>

            <Route exact path="/validation">
            <Validation />
            </Route>

            <Route exact path="/confirmation">
            <Confirmation />
            </Route>
            
          </Switch>
          
          <ProgressBar now={now} striped variant="info" label={`${now}%`} />

          <div style={{ float: 'left'}} >
                <img src={"./img/ap.PNG"}  className="img-fluid border-radius p-4" alt="" />
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

      <Link to="/english" className="link-dark d-inline-flex text-decoration-none rounded">
        <button> Aller vers la version anglaise </button>
        </Link>

        <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Guide!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body><p>
                      Voici un petit guide sur comment naviguer dans notre sit web pour vous
                      aider a prendre votre t-shirt :<br />
                      Pour choisir un kit vous avez deux choix :
                      vous pouvez cliquer sur le boutton choisir kit ou bien cliquer sur le lien en haut de la page "choix de t-shirts" 
                      
                      Ensuite vous pouvez scroller vers le bas pour voir
                      tout les kits et en choisir un ou bien faire votre choix par annee dans la barre fournit, pour choisir une tenue il suffit de cliquer 
                      sur l'image. 
          
                      Finalement une page de confirmation ou vous devez entrez  vos 
                      informations et les valider ,puis cliquer sur soummettre .
                      Pour savoir un peu plus sur les ambassadeurs cliquer sur le lien en haut: nos 
                      ambassadeurs 
          
                    </p></Card.Body>
        </Accordion.Collapse>
      </Card>
      
    </Accordion>

      <Footer />
    </div>
    </Router>

    
  );
  
}

export default App;
