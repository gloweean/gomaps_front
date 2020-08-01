import React, {Component} from 'react';
import './App.css';


function PasswordsChecker(props) {
  console.log("password checking...");
  if (props.password1 === props.password2) {
    console.log("password1: "+ props.password1);
    console.log("password2: "+ props.password2);
    return <p>two passwords matching each other!!</p>
  } else if (props.password1 !== props.password2) {
    return <p>passwords doesn't matching each other</p>
  }
  return <p>passwords doesn't matching each other</p>
  // 여기서 legnth checker 넣고, 규칙 넣고
}

class SetPassword extends Component {
  state = {

  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password1: '',
      password2: ''
    };
  } // constructor는 객체를 초기화해주는 역할, super가 붙어있어야 porps를 새로 만들어주고 메모리 할당도 해준다.

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
    console.log("handler changed");
    console.log("e :" + e.target.value);
  }

  render() {
    const password1 = this.state.password1;
    const password2 = this.state.password2;
    console.log("render loading");
    return (
      <fieldset>
        <legend>Password</legend>
        <lable htmlFor="password1">PASSWORD1 : </lable>
        <input type="password" name="password1" value={password1} onChange={this.handleChange}/>
        <lable htmlFor="password2">PASSWORD2 : </lable>
        <input type="password" name="password2" value={password2} onChange={this.handleChange}/>
        <PasswordsChecker password1={password1} password2={password2}/>
      </fieldset>
    );

  }

}

class App extends Component {
  render () {
    return (
      <SetPassword/>
    )
  }
}

export default App ;

// function App() {
//   function BolingVerdict(props) {
//     if (props.password1 === props.password2) {
//       return <p>two passwords matching each other!!</p>
//     }
//     return <p>passwords doesn't matching each other</p>
//   }
//
//   class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         password1: '',
//         password2: ''
//       };
//     }
//
//
//     handleChange(e) {
//       this.setState({password2: e.target.password2});
//     }
//
//     render() {
//       const password1 = this.state.password1;
//       const password2 = this.state.password2;
//       return (
//         <fieldset>
//           <legend>Password1</legend>
//           <input value={password1}/>
//           <legend>Enter password again: </legend>
//           <input value={password2} onChange={this.handleChange}/>
//           <BolingVerdict password1={password1} password2={password2}/>
//         </fieldset>
//       );
//     }
//   }
//
//   return (
//     <Calculator/>
//   )
//
// }


