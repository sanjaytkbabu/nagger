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

interface part {
  text: string
} 

function IntervalTime() {
  return (
    // <Box sx={{ width: 300 }}>
   
    <div className='cls_div_row'>
    <span className='cls_timer_span'></span>  
    <div className='cls_timer_div'>
    <span className='cls_timer'>1 <label className='cls_timer_label'>min</label></span>
    <span className='cls_timer'>30 <label className='cls_timer_label'>min</label></span>
    <span className='cls_timer'>1 <label className='cls_timer_label'>hour</label></span>
    </div>
      </div>
      
 
  );
}




function DiscreteSlider(props: part) {
  return (
    // <Box sx={{ width: 300 }}>
    <div className='cls_div_row'>
      <span className='cls_checkbox'>
    <label><Checkbox />{props.text}:</label>
    </span>
    <span className='cls_slider'>
      <Slider
        aria-label="Minutes"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        step={10}
        marks
        min={0}
        max={60}
        size='medium'
        
      />
      </span>
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
          <Heading /> <IntervalTime /> <DiscreteSlider text="Eyes"/>
          <DiscreteSlider text="Fingers"/> <DiscreteSlider text="Arms"/> <DiscreteSlider text="Legs"/>
          <DiscreteSlider text="Neck"/> <DiscreteSlider text="Water"/> <DiscreteSlider text="Posture"/>
          <DiscreteSlider text="Breath"/>
        </div>
        } />
      </Routes>
    </Router>
  );
}
