import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {
      image: " ./img/stvg.PNG" ,
      title: "Steven George Gerrard ",
      text: "Est né le 30 mai 1980 à Whiston dans la banlieue de Liverpool en Angleterre,\
      est un ancien footballeur international anglai évolué la quasi-totalité de sa carrière\
       dans son club formateur de Liverpool avant de conclure son parcours au Galaxy de Los Angeles.\
       Il est actuellement entraîneur d'Aston Villa.",
    },
    {
      image: "./img/dalglish.PNG",
      title: "« Kenny » Mathieson Dalglish",
      text: "est un footballeur international puis entraîn le 4 mars 1951 à Glasgow en Écosse. \
      Son passage à Liverpool coïncide avec une période glorieuse pour le club qui gagne trois Coupe\
      des clubs champions européens, une Supercoupe de l'UEFA, six championnats d’Angleterre,\
      deux coupes d'Angleterre, quatre coupes de la Ligue anglaise et sept Charity Shield.",
    },
    {
      image:"./img/rush.PNG",
      title: "Ian Rush",
      text: "Commence sa carrière à Chester City avant d'être recruté en avril 1980 par le Liverpool Football\
      Club. Le Gallois, issu d'une famille ouvrière, devient le héros du club de la cité industrielle. \
      L'abnégationdémontrée par l'attaquant suscite le respect et l'admiration des supporters d'Anfield.\
      Avec 360 réalisations en 660 matchs, Ian Rush reste le meilleur buteur queles Reds aient connu.",
    },
    {
      image:
        "./img/cara.PNG",
      title: "Jamie Carragher",
      text: "est un footballeur anglais né le 28 janvier 1978 à Bootle. Ce défenseur,\
      jouant principalement dans l'axe, a la particularité d'avoir été formé à partir \
      de l'âge de 14 ans à Liverpool après avoir, dans son enfance, soutenu le club rival\
      d'Everton. Il fut international anglais de 1999 à 2010.",
    },
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;