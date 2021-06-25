import React, { Component } from "react";
import {Button,Alert,Dropdown,DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const axios = require('axios').default;

class Nlp extends Component {
constructor(props){
    super(props);
    this.state={
        nlp_text:"",
        nlp_result:"",

    }

}
nlp_operations = () => {
    const mythis = this
    axios.post('http://127.0.0.1:8000/nlp', {
      content: this.state.nlp_text
    })
    .then(function (response) {
      console.log(response.data);
      mythis.setState({nlp_result: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }







  render() {
    return (

      <div class="container-fluid">
          <h3>NLP SERVICES</h3>
          <div class="row">
              <div class="col-md-5">
                  <Alert variant="primary">Tokenization</Alert>
                  <Alert variant="secondary">Stemming</Alert>
                  <Alert variant="success">Limitezation</Alert>
                  <Alert variant="danger">Stopwords</Alert>
                  <Alert variant="warning">Post-tag</Alert>
                  <Alert variant="info">Bag of words</Alert>
                  <Alert variant="light">Tf-idf</Alert>
                  <Alert variant="dark">Word to vector</Alert>


                  
              </div>
              <div class="col-md-7">
                  <h5>Text:</h5>
                   <textarea defaultValue={""} className="form-control" placeholder="Insert The Text Here..." value={this.state.nlp_text} 
                   onChange={e => this.setState({ nlp_text: e.target.value })}/>
                   <div class="apply" style={{textAlign:"center"}}>
                   <DropdownButton   id="dropdown-basic-button" title="NlP Pipelines">
                  <Dropdown.Item class="info" type="button" onClick={() => this.nlp_operations()}>Tokenization</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Stemming</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Limitezation</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">StopWords</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Post-tag</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bag-of-words</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Tf-idf</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Word-to-vector</Dropdown.Item>
                  </DropdownButton>
                  <Button style={{width:300,margin:10}} class="info" type="button" onClick={() => this.nlp_operations()}>Apply</Button>

                  </div>
                  
                  <h5>Result:</h5>
                  <textarea defaultValue={""} id="result" className="form-control" type="text" placeholder="" value={this.state.nlp_result} disabled/>


              </div>

          </div>
          
        
      </div>
      
    );
  }
}
 
export default Nlp;