import React, { Component } from 'react';
import './credit_card.css';

class Credit extends Component {
    constructor(props)
    {
      super(props)
      
      }

      renderCardNumber = number => {
        number = number.toString()
        // '7253325678951245'
        let resultStr = ''
        for(let i =0; i < number.length; i += 4) 
        {
          resultStr += number.slice(i, i + 4) + ' '
        }
        
        return resultStr.trim()
        
      }

      rendervalidCard = valid_num => {
        valid_num = valid_num.toString()
        // '7253'
        let resultStr = ''
        for(let i =0; i < valid_num.length; i += 2) 
        {
          resultStr += valid_num.slice(i, i + 2) + '/'
    
        }
        resultStr=resultStr.slice(0, -1) /*Remove the last character  */
        
        return resultStr.trim()
        
      }

render(){
    return (
      <div className="credit">
        <h1>CREDIT CARD</h1>
        <img
          className="image1"
          src="https://docplayer.net/docs-images/80/82486208/images/2-4.jpg"
        />
        <div className="card">
          <div className="number">
            <p className="cordonnee">
            {this.renderCardNumber(this.props.num_card)}
              <br />
              <p>
                <strong>5422</strong>{" "}
                <p className="date">
                  MONTH/YEAR <p className="date1">{this.rendervalidCard(this.props.date)}</p>
                </p>
              </p>
            </p>
          </div>
          <img
            className="image2"
            src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l300.jpg"
          />
        </div>
        <p className="name">{(this.props.nom_user).toUpperCase()}</p>
      </div>
    );
  }
}
  export default Credit;