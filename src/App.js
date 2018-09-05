import React, { Component } from 'react';

import './App.css';
import Credit from './credit_card'
import Form from './form'
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      num_card:'****************',
      nom_user:'********',
      date:'****'
    }
    this.handleChangenum = this.handleChangenum.bind(this);
    this.handleChangenom = this.handleChangenom.bind(this);
    this.handleChangedate = this.handleChangedate.bind(this);
  }
 
   handleChangenum(e) {
    this.setState({num_card: e.target.value.substring(0,16)});
  }
  handleChangenom(e) {
    this.setState({nom_user: e.target.value});
  }

  handleChangedate(e) {
    this.setState({date: e.target.value.substring(0,4)});
  }
  render() {
    return (
      <div className="App">
        <Credit num_card={this.state.num_card} nom_user={this.state.nom_user} date={this.state.date} />
        <Form  change={this.handleChangenum}  change_nom={this.handleChangenom} change_date={this.handleChangedate}/>

      </div>
    );
  }
}

export default App;
