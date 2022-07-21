import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ambassadeur from './Ambassadeur';
import Avis from './Avis';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoreDeets from './MoreDeets';


const Home = () => {
    return (
        <div className="Home">

<div style={{ float: 'left'}} >
                <img src='./img/ap.PNG' className="img-fluid border-radius p-4" alt="" />
            </div>

          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>ACHETER VOS T-SHIRTS LEGENDES !!</Card.Title>
        <Card.Text>
         Vous aussi vous etes un supporter de Liverpool
         et vous aimeriez en plus d'avoir des t-shirts
         de legende ,prendre des photos avec nos
         ambassadeurs qui sont des anciens entraineurs
         et joueurs du clubs vous etes au bon endroit !!
        </Card.Text>
        <Button variant="primary">Choisir le kit </Button>
      </Card.Body>
    </Card>
          
         
          <div className="dessous" >
            <h1>L'histoire du club : <br /> </h1>
            <p>
            Le Liverpool Football Club est un club de football anglais fondé le 13 août 1892 et basé à Liverpool,
            dans le Nord-Ouest de l'Angleterre. Ses joueurs (les « Reds ») évoluent depuis sa création au stade 
            d'Anfield. Son emblème est le « Liver bird », un oiseau mythique, mi-cormoran mi-aigle. 
            Le chant You'll Never Walk Alone, l'hymne et la devise du club, est mondialement connu.
            Le Liverpool FC possède un des plus beaux palmarès européens avec six Ligues des
            champions, trois Coupes de l'UEFA, quatre Supercoupes de l'UEFA, et une coupe du 
            monde des clubs, et l'un des plus grands palmarès anglais avec dixneuf championnats 
            d'Angleterre, huit Coupes d'Angleterre, neuf Coupes de la Ligue et quinze Community Shield.
        </p>
        </div>
      </div>

      );
  }
   
  export default Home;