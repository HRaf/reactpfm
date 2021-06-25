import React, { Component } from 'react';
import  {Button,Alert}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 
const axios = require('axios').default;


class Sentimentanalysis extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      text_sentiment:"",
      result_sentiment : "",
      
    }
  }


  check_sentiment_status = () => {
    const mythis = this
    axios.post('http://127.0.0.1:8000/feelings', {
      content: this.state.text_sentiment
    })
    .then(function (response) {
      console.log(response.data);
      mythis.setState({result_sentiment: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }



render() {
  return (
    <div className="Sentimentanalysis">
        <div  className="container card text-center"> 
          <div>
            <Alert style={{margin:10}} variant="primary" >Analyse de sentiment</Alert>
            <div className="card-body">
              <textarea defaultValue={""} className="form-control" placeholder="Insert The feeling text Here..." value={this.state.text_sentiment} 
              onChange={e => this.setState({ text_sentiment: e.target.value })}/>
              <Button type="button" className="btn btn-primary my-2" onClick={() => this.check_sentiment_status()}>Predict</Button>
              <div classNam e="card-footer text-muted">
                 <input style={{textAlign:'center',fontWeight:'bold'}} type="text" id="result" className="text-muted ml-2" value={this.state.result_sentiment} disabled />
              </div>
            </div>
          </div>
        <hr></hr>
        </div>
        
        </div>
  );  
}
}
export default Sentimentanalysis;
