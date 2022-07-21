import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Avis = () => {
    return (
      <div className="Avis">
        
        <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <h6>Notre produit ou service vous permet-il d'atteindre vos objectifs ?</h6>
          <Form.Check
            inline
            label="oui"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="non"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
    </Form>


    <Form>
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <h6>Comment estimez-vous votre expérience globale?</h6>
          <Form.Check
            reverse
            label="Très satisfaisante"
            name="group2"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="Satisfaisante
            "
            name="group2"
            type="radio"
            id={`reverse-${type}-2`}
          />
         <Form.Check
            reverse
            label="Sans opinion"
            name="group2 "
            type={type}
            id={`reverse-${type}-3`}
          /><Form.Check
          reverse
          label="Peu satisfaisante"
          name="group2"
          type={type}
          id={`reverse-${type}-4`}
        /><Form.Check
        reverse
        label="Pas du tout satisfaisante"
        name="group2"
        type={type}
        id={`reverse-${type}-5`}
      />
          
        </div>
      ))}
    </Form>


    <Form>
      {['checkbox'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <h6>Que préférez-vous dans notre produit ?</h6>
          <Form.Check
            reverse
            label="Qualité"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="Prix"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            label="Design"
            type={type}
            id={`reverse-${type}-3`}
          />
          <Form.Check
            reverse
            label="Rencontre avec des legendes"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}
    </Form>

    <>
      <Form.Label htmlFor="inputPassword5"><h6> Comment pourrions-nous améliorer notre offre ?</h6></Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        
      />
      
    </>

    <>
      <Form.Label htmlFor="inputPassword5"><h6> Avez-vous d'autres commentaires ou suggestions à nous soumettre ?</h6></Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        
      />
      
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Soummettre 
      </Button>
      
    </div>
    </>

    <div style={{margin: '50px'}}>
              <h2>Les avis de nos clients precedents :</h2>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Tout s'est très bien passé! Les kits sont très original.
                  <span className="badge bg-primary rounded-pill">5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Le service est très bien organisès , on a eu nos kit dans le temp precisè
                  <span className="badge bg-primary rounded-pill" style={{background: 'red'}}>4.7</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Il n'y a pas de surprise leskits sont comme dans les photos , tres bonne idèe.
                  <span className="badge bg-primary rounded-pill">4.2</span>
                </li>
              </ul>
            </div>





            

      </div>
    );
  }
   
  export default Avis;