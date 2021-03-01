import React, {useState}  from "react";
import ReactDOM from "react-dom";
import './style.css'
import { 
  mdiAccountEditOutline, 
  mdiChevronDoubleRight,
  mdiPencilOutline,
  mdiShapePlus,
  mdiEraser,
  mdiAccountMultiplePlus,
  mdiAccountDetails,
  mdiPencilLock,
  mdiPencilLockOutline,
  mdiPencilMinus, 
  mdiShapePolygonPlus,
  mdiShapeRectanglePlus,
  mdiShapeSquarePlus,
  mdiBackspaceReverse,
  mdiBackspaceReverseOutline,
  mdiEraserVariant
} from '@mdi/js';
import Icon from '@mdi/react';
import {  } from "../src/chart.png";
const chsrt = "../src/chart.png"; 

const App = () => {

  const [showCallout, setShowCallout] = useState(1)
  const [callOutContent, setCallOutContent] = useState()

  const renderCallout = (callouts) => {
    return callouts.map((item, index) => {
      return <div key={index} className="callout-item">
        <div className="icon-layout">
          <Icon className="" path={item.icon} title="Delete icon" size={1} color='#FA5555' />
        </div> 
        <div className="item-layout"> 
          <p>{item.name}</p> </div> 
        </div>
    })
  }

  const handleCallout = (type) => {
  }

  return (  
    <div>
    <div className="main">
      <div className="sectionA">
        <div className="tools"> 
          <div className="list-icon-wrapper">
            <div className="list-selected-icon">
              <Icon className="uppericon" path={mdiAccountEditOutline} title="Delete icon" size={1} color='#FA5555' />
            </div>
            <p className="list-icon-title">Line</p>
          </div>
          <div className="callout-icon" onClick={() => setShowCallout(1)}>
            <Icon className="doubleright" path={mdiChevronDoubleRight} title="Delete icon" size={1} color='#FA5555' />
          </div> 
          {showCallout === 1 && <div className="callout-wrapper">
            {renderCallout([
              {name: 'Curved', icon: mdiAccountDetails }, 
              {name: 'Bezier', icon: mdiAccountMultiplePlus },
              {name: 'Straight', icon: mdiAccountEditOutline },
              {name: 'Bend', icon: mdiAccountEditOutline },
              {name: 'Cavani', icon: mdiAccountEditOutline }
            ])}
          </div>
          }         
        </div>
        
        <div className="tools"> 
          <div className="list-icon-wrapper">
            <div className="list-selected-icon">
              <Icon className="uppericon"  path={ mdiPencilOutline } title="Delete icon" size={1} color='#FA5555' />
            </div>
            <p className="list-icon-title">Pencil</p>
          </div>
          <div className="callout-icon" onClick={() => setShowCallout(2)}>
            <Icon className="doubleright" path={mdiChevronDoubleRight} title="Delete icon" size={1} color='#FA5555' />
          </div>
          {showCallout === 2 && <div className="callout-wrapper">
            {renderCallout([
              { name:'Pen' ,icon:mdiPencilLock}, 
              { name:'Biro', icon:mdiPencilLockOutline}, 
              { name:'Reynolds', icon:mdiPencilMinus }
            ])}
          </div>
          }           
        </div>

        <div className="tools"> 
          <div className="list-icon-wrapper">
            <div className="list-selected-icon">
              <Icon className="uppericon"  path={mdiShapePlus } title="Delete icon" size={1} color='#FA5555' />
            </div>
            <p className="list-icon-title">Shape</p>
          </div>
          <div className="callout-icon" onClick={() => setShowCallout(3)}>
            <Icon className="doubleright" path={mdiChevronDoubleRight} title="Delete icon" size={1} color='#FA5555' />
          </div> 
          {showCallout === 3 && <div className="callout-wrapper">
            {renderCallout([
              {name:'Square',icon:mdiShapePolygonPlus},
              {name:'Rectangle',icon: mdiShapeRectanglePlus}, 
             {name:'Star',icon:mdiShapeSquarePlus}
             ])}
          </div>
          }            
        </div>

        <div className="tools"> 
          <div className="list-icon-wrapper">
            <div className="list-selected-icon">
              <Icon className="uppericon"  path={mdiEraser } title="Delete icon" size={1} color='#FA5555' />
            </div>
            <p className="list-icon-title">Eraser</p>
          </div>
          <div className="callout-icon" onClick={() => setShowCallout(4)}>
            <Icon className="doubleright" path={mdiChevronDoubleRight} title="Delete icon" size={1} color='#FA5555' />
          </div> 
          {showCallout === 4 && <div className="callout-wrapper">
            {renderCallout([
              {name:'Clear',icon: mdiBackspaceReverse},
               {name:'Big',icon:mdiBackspaceReverseOutline}, 
               {name:'Small',icon:mdiEraserVariant}])}
          </div>
          }                
        </div>
      </div>
      <div className= "sectionB">
       {/* <p> Drawing board </p>  */}
      </div>

     

    </div>
     <div className= "sectionC">
       <div>
       
       <img  className="img" src={window.location.origin + "/chart.png"} />

       </div>
       <div className="title-bar"> 
         Title
       </div>
      </div>

    </div>
   


    

    
  )
}


  

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)