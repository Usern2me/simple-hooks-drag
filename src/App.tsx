import React from 'react';
import './App.css';
import Drag from './Drag'

const list=['aaaaaaa','bbbbbbbb','cccccccc','dddddd','eeeeeee']
const App: React.FC = () => {
  return (
    <div className="App">
      <Drag>
        {list.map((item:string,index:number) => {
          return <div className="dragBox" key={index}>{index} : {item}</div>
        })
      }
      </Drag>
    </div>
  );
}

export default App;
