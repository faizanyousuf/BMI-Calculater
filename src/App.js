import { useState } from 'react'
// import './App.css';

function App() {
  const [weight,setWeight]=useState();
  const [height,setHeight]=useState();
  const [status,setStatus]=useState();
  const [bmi,setBmi]=useState();

  function bmiresults(){
   
let bmi=(weight/(height/100)**2).toFixed(2);
    if(isNaN(bmi))
{alert('Please Enter Your Details')}
else{
    setBmi(bmi);
    let bmiStatus=getStatus(bmi);
    setStatus(bmiStatus);
  }
  setWeight('');
  setHeight('');
}

  function getStatus(bmi){
if(bmi<18.5) return "UnderWeight";
else if(bmi>=18.5 && bmi <24.9) return "Normal";
else if(bmi>=25 && bmi <29.9) return "OverWeight";
else if (bmi>30)return "Obese";
  }


  return (
    <div className="App">
<div className=" flex items-center justify-center">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div className='font-bold flex items-center justify-center bg-blue-400 rounded py-2 mb-3'>
<h1>BMI Calculater</h1>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Height in Cms
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" type="Number" placeholder="Enter Your Height" value={height} onChange={e=>setHeight(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Weight in Kgs
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="Number" placeholder="Enter Your Weight"value={weight} onChange={e=>setWeight(e.target.value)}/>
    </div>
    <div className="flex items-center justify-center">
      <button onClick={bmiresults} className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Calculate BMI
      </button>
    </div>
      <div className='px-3 py-2 rounded-full bg-blue-400 mt-5'>
      <p>Your Current BMI is : <span className='font-bold'>{bmi}</span></p>
      <p>You are Currently : <span className='font-bold'>{status}</span></p>
      </div>
  </form>
</div>
    </div>
  );
}

export default App;
