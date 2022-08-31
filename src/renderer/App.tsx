import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// var x = 10;

// const Hello = () => {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h1>nagger</h1>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               🙏
//             </span>
//             Donate
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

const label = "hello, hello2"

function valuetext(value: number) {
  return `${value}°C`;
}
function DiscreteSlider({name}: any) {
  return (
    // <Box sx={{ width: 300 }}>
    <div className='cls_div_row'>
    <label><Checkbox />{name}:</label>
    
      <Slider
        aria-label="Minutes"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={120}
        size='medium'
        id='slider'
        
      />
      
      </div>
 
  );
}

const Heading = () => {
  return (
 <div>
      <div className='cls_div_title'>
    <p className='cls_title'>Reminders</p>
    
    <label className='cls_switch'><Switch defaultChecked /></label>
    </div>
    <div className='cls_p'>Decide how often Nagger should remind you to relax these:</div>

   
  

    </div>
  );
};

// const UI = () => {
//   return (
//   //  heading();
//     DiscreteSlider()
    




//   );
// };

const ui2 = () => {
  return (
    <h3>Yo</h3>
  );
};


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
          <Heading /> <DiscreteSlider name="Eyes"/>
          <DiscreteSlider name="Fingers"/> <DiscreteSlider name="Arms"/> <DiscreteSlider name="Legs"/>
          <DiscreteSlider name="Neck"/> <DiscreteSlider name="Water"/> <DiscreteSlider name="Posture"/>
          <DiscreteSlider name="Breath"/>
        </div>
        } />
      </Routes>
    </Router>
  );
}
