import React,{useState} from 'react';
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
import App from './App';
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


function English() {
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
        <Link to="/choix">{t('Choose you\'re kit')} </Link>
        <Link to="/ambassadeur">{t('Our Ambassador')} </Link>
        <Link to="/avis" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>{t('Notice')}</Link>
      </div>
    </nav>
      <div className="content">
      <Switch>
            
            
            <Route exact path="/choix">
            <Choix />
            </Route>
            <Route exact path="/app">
            <App />
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
          
          <ProgressBar now={now} striped variant="info" label={`${now}%`} />

          <div style={{ float: 'left'}} >
                <img src={"./img/ap.PNG"}  className="img-fluid border-radius p-4" alt="" />
            </div>

          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      {t('Hello')}
        <Card.Title>{t('BUY YOUR LEGENDS T-SHIRTS !!')}</Card.Title>
        <Card.Text>{t('You  are a Liverpool fan\
          and you would  like to have t-shirts \
          of legend, take pictures with our \
          ambassadors who are former coaches\
          and club players you are in the right place !!')}
         
        </Card.Text>
        <Button variant="primary">Choose the kit </Button>
      </Card.Body>
    </Card>
          
         
          <div className="dessous" >
            <h1>L'histoire du club : <br /> </h1>
            <p>
            {t('Liverpool Football Club is an English football club founded on August 13, 1892 and based in Liverpool,\
             in the North West of England. Its players (the "Reds") have evolved since its creation at the stadium \
             of Anfield. Its emblem is the "Liver bird", a mythical bird, half-cormorant half-eagle. \
             The chant You\'ll Never Walk Alone, the club\'s anthem and motto, is world famous.\
             Liverpool FC has one of the finest European records with six Leagues of \
             champions, three UEFA Cups, four UEFA Super Cups, and a European Cup\
             club world, and one of the greatest English honors with nineteen championships\
             , eight FA Cups, nine League Cups and fifteen Community Shields.')}
            
        </p>
        </div>
          
      </div>

      <Link to="/app" className="link-dark d-inline-flex text-decoration-none rounded">
        <button> Get back in the french version </button>
        </Link>
    
        <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Guide!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body><p>
          Here is a short guide on how to navigate our website for you
                       help pick up your t-shirt:<br />
                       To choose a kit you have two choices:
                       you can click on the button choose kit or click on the link at the top of the page "choice of t-shirts"
                      
                       Then you can scroll down to see
                       all the kits and choose one or make your choice by year in the bar provided, to choose an outfit just click
                       on the image.
          
                       Finally a confirmation page where you must enter your
                       information and validate it, then click on submit.
                       To know a little more about the ambassadors click on the link at the top: our
                       ambassadors
          
                    </p></Card.Body>
        </Accordion.Collapse>
      </Card>
      
    </Accordion>

      <Footer />
    </div>
    </Router>

    
  );
  
}

export default English;