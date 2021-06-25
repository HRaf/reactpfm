import React, { Component } from 'react';
import axios from 'axios';
import  {Button,Alert,Form,InputGroup}  from 'react-bootstrap';

class SearchPage extends Component {

    state = {
      result: [],
      userInput: null,
    }


  handleSubmit = event=> {
    event.preventDefault();
    

    // requete de recherche :  
    const query = {
        query: {
            query_string : {"fields" : ["title", "body"], query : `*${this.state.userInput}*`}
        }
      };
    var input = document.getElementById("userText").value;
    this.setState({ userInput: input });
    // get 'http://localhost:9200/ < index ou je stock les données > /_search
    axios.get('http://localhost:9200/news-index/_search', {params: {
        source: JSON.stringify(query),
        source_content_type: "application/json",
      }}).then(res => {
        var result = res.data.hits.hits;
        this.setState({ result: result });
        console.log(this.state.result);
        for (let i = 0; i < this.state.result.length; i++) {
            console.log(this.state.result[i]["_source"]["title"]);
          }
      })

  }

  render() {
    return (
        <html dir="rtl" lang="ar">
        <div class="container-fluid">
        <div class="row">
        <div class="col-md-5">
        <form action="/search" >
          <input style={{margin:10}} class="form-control" type="search" placeholder="...Search" name="query" id="userText" onChange={e => { this.setState({ userInput: e.target.value }) }}/>
          <Button  style={{margin:10}} variant="success" type="submit" onClick={this.handleSubmit}><i>بحت</i></Button>
        </form>
        </div>
        <div class="col-md-7" >
        <div style={{margin:2}}>
          {   this.state.result &&
              <div>
                  {this.state.result.map((t)=> (<><h5 style={{fontWeight:'bold'}}> {t["_source"]["title"]} </h5><p> {t["_source"]["body"]} </p><br/></>)
                  )}
              </div>
          }
        </div>
        </div>
        </div> 
        </div>
        </html>
    );

    


  }
}

export default SearchPage;