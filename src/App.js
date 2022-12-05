import React from 'react';
import Profilephoto from './component/profile/Profilephoto';
import Fullname from './component/profile/Fullname';
import Adress from './component/profile/Adress';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Profilephoto/>
    <hr/>
    <Fullname/>
    <br/>
    <Adress/> */}
      <div className="card" style={{ width: "20rem" }}>
        <Profilephoto />
        <div className="card-body">
          <h5 className="card-title"><Fullname /></h5>
          <p className="card-text"><Adress /></p>
        </div>
      </div>

    </div>
  );

}

export default App;
