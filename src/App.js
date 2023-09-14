
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0)
  const [step,setStep] = useState(0)
  const date = new Date()
  date.setDate(date.getDate() + count)
  
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 w-80 mt-12 shadow-md rounded py-4">
      <div className='flex justify-center items-center my-3'>
        <button onClick={()=>setStep((s)=>s-1)} className='btn btn-primary'> - </button>
      <span className='px-2'>Step: {step}</span>
      <button onClick={()=>setStep((s)=>s+1)} className='btn btn-primary'>+</button>
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={()=>setCount((c)=>c-step)} className='btn btn-primary'> - </button>
      <span className='px-2'>Count: {count}</span>
      <button onClick={()=>setCount((c)=>c+step)} className='btn btn-primary'>+</button>
      </div>
        <div className='flex justify-center mt-3 text-sm'>
          <span>{count === 0 ? 'Today is ': count < 0 ? `${Math.abs(count) } days ago was `: `${count} days from today will be `}</span>
        <p>{date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
