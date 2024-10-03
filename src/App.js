import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/** @namespace App/renderHeaderContents */
function renderHeaderContents() {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
        Header Works
      </p>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </>
  )
}

/** @namespace App/renderMainContents */
function renderMainContents() {

}

/** @namespace App/renderFooterContents */
function renderFooterContents() {
    return (
      <>
        <p>Footer Works</p>
      </>
    )
}

/** @namespace App/MakeButton */
class MakeButton extends Component {
  showButton() {
    return null;
  }

  render() {
      return (
        <div className='make-button'>{this.showButton('button')}</div>
      );
   }
}

// /** @namespace App/App */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/** @namespace App/App */
function App() {
  return (
    // <div className="App">
    //   {renderHeaderContents()}
    //   {renderMainContents('test')}
    //   {renderFooterContents()}

    // </div>
   
    <div className="App">
       <MakeButton />
      <header className="App-header">
     
      {renderHeaderContents()}
      {renderMainContents('token')}
      {renderFooterContents()}
     
      </header>
      
    </div>
  );
}
export default App;
