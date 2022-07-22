import 'bootstrap/dist/css/bootstrap.min.css';
import Validation from './Validation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Choix = () => {
    
    
    const now = 50;
      const refreshPage = event => { 
        window.location.reload();
      }
    return (
        <Router>
            
        <div classNameName="Choix">

            <Switch>

                <Route exact path="/validation">
                    <Validation />
                </Route>

            </Switch>

            <ProgressBar now={now} striped variant="warning" label={`${now}%`} />
            
            
            <section>
                <div id="lewla">
                    <Link to="/validation"  className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1892</h6> <br />
                        <img src='./img/kit/1892-1949/1892.PNG' className="img-fluid border-radius p-4" alt="" /> </Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1896</h6> <br />
                        <img src='./img/kit/1892-1949/1896.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                </div>

                <div id="tania">
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1900-1906</h6> <br />
                        <img src='./img/kit/1892-1949/1900-1906.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1902-1904</h6> <br />
                        <img src='./img/kit/1892-1949/1902-1904.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1904-1907</h6> <br />
                        <img src='./img/kit/1892-1949/1904-1907.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1907-1910</h6> <br />
                        <img src='./img/kit/1892-1949/1907-1910.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                </div>
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1936-1940</h6> <br />
                    <img src='./img/kit/1892-1949/1936-1940.PNG' id="talta" className="img-fluid border-radius p-4" alt="" />
                </Link> <br />
                
            </section>




            <div id="4">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1951-1955</h6> <br />
                    <img src='./img/kit/1950-1979/1951-1955.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1955-1956</h6> <br />
                    <img src='./img/kit/1950-1979/1955-1956.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1956-1962</h6> <br />
                    <img src='./img/kit/1950-1979/1956-1962.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
            </div>

            <div id="5">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1962-1968</h6> <br />
                    <img src='./img/kit/1950-1979/1962-1968.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1968-1973</h6> <br />
                    <img src='./img/kit/1950-1979/1968-1973.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
            </div>

            <div id="6">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1973-1974</h6> <br />
                    <img src='./img/kit/1950-1979/1973-1974.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1974-1975</h6> <br />
                    <img src='./img/kit/1950-1979/1974-1975.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1974-1976</h6> <br />
                    <img src='./img/kit/1950-1979/1974-1976.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1976-1977</h6> <br />
                    <img src='./img/kit/1950-1979/1976-1977.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1979-1980</h6> <br />
                    <img src='./img/kit/1950-1979/1979-1980.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
            </div>






            <div id="7">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1980-1981</h6> <br />
                    <img src='./img/kit/1980-2009/1980-1981.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1981-1982</h6> <br />
                    <img src='./img/kit/1980-2009/1981-1982.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1982-1983</h6> <br />
                    <img src='./img/kit/1980-2009/1982-1983.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1983-1984</h6> <br />
                    <img src='./img/kit/1980-2009/1983-1984.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1984-1985</h6> <br />
                    <img src='./img/kit/1980-2009/1984-1985.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1985-1986</h6> <br />
                    <img src='./img/kit/1980-2009/1985-1986.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1986-1987</h6> <br />
                    <img src='./img/kit/1980-2009/1986-1987.PNG' className="img-fluid border-radius p-4" alt="" /></Link>  <br />
                    
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1987-1988</h6> <br />
                        <img src='./img/kit/1980-2009/1987-1988.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>1988-1989</h6> <br />
                        <img src='./img/kit/1980-2009/1988-1989.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                </div>



            <div id="8">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1989-1990</h6> <br />
                    <img src='./img/kit/1980-2009/1989-1990.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1990-1991</h6> <br />
                    <img src='./img/kit/1980-2009/1990-1991.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1991-1992</h6> <br />
                    <img src='./img/kit/1980-2009/1991-1992.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1992-1993</h6> <br />
                    <img src='./img/kit/1980-2009/1992-1993.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1993-1994</h6> <br />
                    <img src='./img/kit/1980-2009/1993-1994.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1994-1995</h6> <br />
                    <img src='./img/kit/1980-2009/1994-1995.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1995-1996</h6> <br />
                    <img src='./img/kit/1980-2009/1995-1996.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1996-1997</h6> <br />
                    <img src='./img/kit/1980-2009/1996-1997.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1997-1998</h6> <br />
                    <img src='./img/kit/1980-2009/1997-1998.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1998-1999</h6> <br />
                    <img src='./img/kit/1980-2009/1998-1999.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
            </div>

            <div id="9">
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>1999-2000</h6> <br />
                    <img src='./img/kit/1980-2009/1999-2000.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2000-2001</h6> <br />
                    <img src='./img/kit/1980-2009/2000-2001.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2001-2002</h6> <br />
                    <img src='./img/kit/1980-2009/2001-2002.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2002-2003</h6> <br />
                    <img src='./img/kit/1980-2009/2002-2003.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2003-2004</h6> <br />
                    <img src='./img/kit/1980-2009/2003-2004.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2004-2005</h6> <br />
                    <img src='./img/kit/1980-2009/2004-2005.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2005-2006</h6> <br />
                    <img src='./img/kit/1980-2009/2005-2006.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2006-2007</h6> <br />
                    <img src='./img/kit/1980-2009/2006-2007.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2007-2008</h6> <br />
                    <img src='./img/kit/1980-2009/2007-2008.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2008-2009</h6> <br />
                    <img src='./img/kit/1980-2009/2008-2009.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    
                <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                    <h6 style={{margin: '20px'}}>2009-2010</h6> <br />
                    <img src='./img/kit/1980-2009/2009-2010.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                    

            </div>
        

                <div id="10">
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2010-2023</h6> <br />
                        <img src='./img/kit/2010-2023/2010-2011.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2011-2012</h6> <br />
                        <img src='./img/kit/2010-2023/2011-2012.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2012-2013</h6> <br />
                        <img src='./img/kit/2010-2023/2012-2013.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2013-2014</h6> <br />
                        <img src='./img/kit/2010-2023/2013-2014.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2014-2015</h6> <br />
                        <img src='./img/kit/2010-2023/2014-2015.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2015-2016</h6> <br />
                        <img src='./img/kit/2010-2023/2015-2016.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2016-2017</h6> <br />
                        <img src='./img/kit/2010-2023/2016-2017.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2017-2018</h6> <br />
                        <img src='./img/kit/2010-2023/2017-2018.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2018-2019</h6> <br />
                        <img src='./img/kit/2010-2023/2018-2019.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2019-2020</h6> <br />
                        <img src='./img/kit/2010-2023/2019-2020.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                </div>

                <div id="11">
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2020-2021</h6> <br />
                        <img src='./img/kit/2010-2023/2020-2021.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2021-2022</h6> <br />
                        <img src='./img/kit/2010-2023/2021-2022.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                    <Link to="/validation" className="link-dark d-inline-flex text-decoration-none rounded">
                        <h6 style={{margin: '20px'}}>2022-2023</h6> <br />
                        <img src='./img/kit/2010-2023/2022-2023.PNG' className="img-fluid border-radius p-4" alt="" /></Link> <br />
                        
                </div>


            

    </div>
    </Router>
        );
  }
   
export default Choix;