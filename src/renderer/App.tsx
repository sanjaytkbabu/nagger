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
import Box from '@mui/joy/Box';
import { styled } from '@mui/material/styles';

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
    <label><Checkbox defaultChecked/>{props.text}:</label>
    </span>
    <Box className='cls_slider'>
      <IOSSlider
        color="primary" 
        aria-label="Minutes"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        step={10}
        marks
        min={0}
        max={60}
        size='small'
        disabled={false} 
        
        
        
      />
      </Box>
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
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));