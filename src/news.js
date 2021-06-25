import React, { Component } from 'react'
import  {Button,Alert}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 
const axios = require('axios').default;


class News extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      news:"",
      result : "",
      
    }
  }


  check_news_status = () => {
    const mythis = this
    axios.post('http://127.0.0.1:8000/news', {
      content: this.state.news
    })
    .then(function (response) {
      console.log(response.data);
      mythis.setState({result: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }



render() {
  return (
    <html dir="rtl" lang="ar">

    <div className="News">
        <div  className="container card text-center"> 
          <div>
            <Alert style={{margin:10}} variant="success" >Fake news Detector</Alert>
            <div className="card-body">
              <textarea defaultValue={""} className="form-control" placeholder="Insert The news Here...(Arabic language)" value={this.state.news} 
              onChange={e => this.setState({ news: e.target.value })}/>
              <Button type="button" className="btn btn-primary my-2" onClick={() => this.check_news_status()}>CHECK</Button>
              <div className="card-footer text-muted">
                 <input style={{textAlign:'center'}} type="text" id="result" className="text-muted ml-2" value={this.state.result} disabled />
              </div>
            </div>
          </div>
        <hr></hr>
        </div>
        
        </div>
        </html>
  );  
}
}
export default News;
