import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Avis from './Avis';


const Confirmation = () => {
    return (
        <Router>
            <Switch>
            
            
            <Route exact path="/confirmation/avis">
            <Avis />
            </Route>
             
          </Switch>
        <div className="Confirmation">
            

        <img src='./img/congrats.jpg' alt="" style={{height: '350',width: '800', margin: '23px'}} />

        <p style={{margin: '23px'}}>
            Vous avez Acheter votre T-shirt legende avec succes , nous vous remercions 
            de la confiance que vous portez en nous et esperants que le kit satisfera vos attentes . 
            Au plaisir de vous revoire parmis nous !!
        </p>
        
        

        <div className="position-relative">
            <img src="../img/avis.PNG" style={{height: '20',width: '20'}} alt="" />




            




            <div className="position-absolute top-50 start-50 translate-middle">
                <Link to="/avis">
                <button class="btn btn-primary" type="button">Votre avis nous intéresse</button>
                </Link>
            </div>

        </div>
        <img src='./img/avis2.jpg' alt="" style={{height: '100',width: '100' }}></img>

        </div>
        </Router>
    );
  }
   
  export default Confirmation;