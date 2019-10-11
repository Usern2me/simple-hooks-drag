import React from 'react';
import './App.css';
import { Drag } from './Drag'
import DragItem from './DragItem'

const list = ['aaaaaaa', 'bbbbbbbb', 'cccccccc', 'dddddd', 'eeeeeee']
const App: React.FC = (props) => {
  return (
    <div className="App">
      <Drag>
        {list.map((item: string, index: number) => {
          return (
            <DragItem key={index}>
              <div className="dragBox">{index} : {item[index]}</div>
            </DragItem>
          )
        })
        }
      </Drag>
    </div>
  );
}

export default App;
