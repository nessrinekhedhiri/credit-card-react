import React from 'react';
import './form.css';

class Form  extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_nom = this.handleChange_nom.bind(this);
        this.handleChange_date = this.handleChange_date.bind(this);
      }
    
      handleChange(e) {
        this.props.change(e);
      }
      handleChange_nom(e) {
        this.props.change_nom(e);
      }

      handleChange_date(e) {
        this.props.change_date(e);
      }
      
  render() {     
    return (
        
      <form className="form">
        <input className='number_input' type="number" onChange={this.handleChange} 
        placeholder=' tapez le numero de votre carte credit.........'/>
        <input className='number_input' maxLength='20' onChange={this.handleChange_nom} 
        placeholder=' tapez votre nom.........'/>
        <input className='number_input' type="number" max='4' onChange={this.handleChange_date} 
        placeholder=' tapez une date de valisation........'/>

      </form>
      
    );
  }
}
  export default Form;
