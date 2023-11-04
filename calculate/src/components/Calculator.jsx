import { useState } from "react"

export default function Calculator() {
   const [num, setNum] = useState(0)
   const [oldnum, setOldNum] = useState(0)
   const [operator, setOperator] = useState()


   function inputNumber(e) {
      const number = e.target.value
      num === 0 ? setNum(number) : setNum(num + number )
   }

   function clear() {
      setNum(0)
   }
   function porcentage() {
      setNum(num / 100)
   }
   function changeSing() {
      num > 0 ? setNum(-num) : setNum(Math.abs(num))
      
   }
   function operatorHandler (e) {
      const operatorInput = e.target.value
      setOperator(operatorInput)
      setOldNum(num)
      setNum(0)
   }
   function calculate() {
      operator === "÷" 
      ? setNum((oldnum) / (num)) 
      : operator === "x" 
      ? setNum((oldnum) * (num))
      : operator === "-" 
      ? setNum((oldnum) - (num))
      : operator === "+" 
      ? setNum((parseFloat(oldnum)) + (parseFloat(num))) 
      : 0
   
   }

   return(
      <>
      <div id="input-calculater">
         <input 
            disabled
            type="text" 
            id="input"
            value={num}
         />
      </div>
         <div id="keys">
         <button className="btn-darck" style={{color:"#ff0043", backgroundColor: "#f1f5f9"}} onClick={clear}>C</button>
         <button className="btn-white" onClick={changeSing}>+/-</button>
         <button className="btn-white" onClick={porcentage}>%</button>
         <button className="btn-orange" onClick={operatorHandler} value={"÷"}>÷</button>
         <button className="btn-darck" onClick={inputNumber} value={7} >7</button>
         <button className="btn-darck" onClick={inputNumber} value={8}>8</button>
         <button className="btn-darck" onClick={inputNumber} value={9}>9</button>
         <button className="btn-orange" onClick={operatorHandler} value={"x"}>x</button>
         <button className="btn-darck" onClick={inputNumber} value={4}>4</button>
         <button className="btn-darck" onClick={inputNumber} value={5}>5</button>
         <button className="btn-darck" onClick={inputNumber} value={6}>6</button>
         <button className="btn-orange" onClick={operatorHandler} value={"-"}>-</button>
         <button className="btn-darck" onClick={inputNumber} value={1}>1</button>
         <button className="btn-darck" onClick={inputNumber} value={2}>2</button>
         <button className="btn-darck" onClick={inputNumber} value={3}>3</button>
         <button className="btn-orange" onClick={operatorHandler} value={"+"}>+</button>
         <button className="btn-darck" style={{width: "11rem"}} onClick={inputNumber} value={0}>0</button>
         <button className="btn-darck" onClick={inputNumber} value={"."}>.</button>
         <button style={{backgroundColor: "#84a8f5", color: "#f1f5f9" }} onClick={calculate}>=</button>
         </div>
         
      </>
   )
}