import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class CheckOut extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    errors: {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
    },
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    // Basic validation for card number, cardholder name, and CVC
    const errors = { ...this.state.errors };

    switch (name) {
      case 'number':
        errors.number = value.length > 16 ? 'Card number must be 16 digits' : '';
        break;
      case 'name':
        errors.name = (value.length === 0 || value.length < 4) ? 'Cardholder name is required & must be atleast 4 characters' : '';
        break;  
      case 'expiry':
        errors.expiry = value.length < 4 ? 'Expiry date must be 4 digits' : '';
        break;
      case 'cvc':
        errors.cvc = value.length < 3 ? 'CVC must be 3 digits' : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  render() {
    return (
      <div className='container-fluid' id="PaymentForm">
        <div className='row'>
        <div className='col-12 p-4'>
        <Cards
        className={"col-11"}
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        </div>
        <form className='col-12 m-2 d-flex flex-column align-items-center'>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='col-11 col-md-4 m-2'
          />
          <span style={{ color: 'red' }}>{this.state.errors.number}</span>

          <input
            type="text"
            name="name"
            placeholder="Card holder name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='col-11 col-md-4 m-2'

          />
          <span style={{ color: 'red' }}>{this.state.errors.name}</span>

          <input
            type="number"
            name="expiry"
            placeholder="Card expiry"
            onChange={this.handleInputChange}
            className='col-11 col-md-4 m-2'
            onFocus={this.handleInputFocus}
          />
          <span style={{ color: 'red' }}>{this.state.errors.expiry}</span>

          <input
            type="number"
            name="cvc"
            placeholder="Card cvc"
            className='col-11 col-md-4 m-2'
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <span style={{ color: 'red' }}>{this.state.errors.cvc}</span>
        </form>
        </div>
      </div>
    );
  }
}













// import React from 'react';
// import Cards from 'react-credit-cards';
// import 'react-credit-cards/es/styles-compiled.css';

// export default class CheckOut extends React.Component {
//   state = {
//     cvc: '',
//     expiry: '',
//     focus: '',
//     name: '',
//     number: '',
//   };
 
//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   }
  
//   handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     this.setState({ [name]: value });
//   }
  
//   render() {
//     return (
//       <div id="PaymentForm">
//         <Cards
//           cvc={this.state.cvc}
//           expiry={this.state.expiry}
//           focused={this.state.focus}
//           name={this.state.name}
//           number={this.state.number}
//         //   className={'bg-primary'}
//         />
//         <form>
//         	<input
//             type="tel"
//             name="number"
//             placeholder="Card Number"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Card holder name"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="number"
//             name="expiry"
//             placeholder="Card expiry"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="number"
//             name="cvc"
//             placeholder="Card cvc"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
          
//         </form>
//       </div>
//     );
//   }
// }