import { useState } from 'react';
import { DoubleScrollBar } from '../components/slider'

function DoubleScrollBars() {
  const [data1, setData1] = useState({from:150,to:1000});
  const [data2, setData2] = useState({from:2,to:100});
  const [data3, setData3] = useState({from:2,to:100});
  const [data4, setData4] = useState({from:2,to:100});

  return (
    <div className="wrapper">

      <div className="wrapper-1">
        <DoubleScrollBar
        min={2}
        max={10}
        step={0.1}     
        classNameName="SB-1"
        onChange={(from,to)=>{
            setData1({from,to});
        }}

        />
        {/* <div id="display1" >{
          ` ${data1.from}  ${data1.to}`
        }</div> */}
        <div className="flex pt-[10px] gap-[100px]">
            <p>$150</p>
            <p>$1000</p>
        </div>
      </div>

      {/* <div className="wrapper-2">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        classNameName="SB-2"
          onChange={(from,to)=>{
              setData2({from,to});
          } }
        />
        <div id="display2">
          {
            `From: ${data2.from} To: ${data2.to}`
          }
        </div>
      </div> */}

      {/* <div className="wrapper-3">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        classNameName="SB-3"
          onChange={(from,to)=>{
              setData3({from,to});
          }}
        />
        <div id="display3">
          {
            `From: ${data3.from} To: ${data3.to}`
          } 
        </div> 
      </div> */}
      
      {/* <div className="wrapper-4">
        <DoubleScrollBar
        min={2}
        max={100}
        step={1}
        classNameName="SB-4"
          onChange={(from,to)=>{
              setData4({from,to});
          }}
        />
        <div id="display4">
          {
            `From: ${data4.from} To: ${data4.to}`
          }
        </div>
      </div> */}
     </div>
  );
}

export default DoubleScrollBars;