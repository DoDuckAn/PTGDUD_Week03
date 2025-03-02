import { useState } from "react";

function CalculatorInvest() {
    let [money,setMoney]=useState(0);
    let [rating,setRating]=useState(0);
    let [goal,setGoal]=useState(0);
    let [rowList,setRowlist]=useState([]);
    function handelChangeMoney(e){
        setMoney(parseFloat(e.target.value));
    }
    function handelChangeRating(e){
        setRating(parseFloat(e.target.value));
    }
    function handelChangeGoal(e){
        setGoal(parseFloat(e.target.value));
    }
    function calcute(){
        let newRowList=[];
        let tempMoney=money;
        let tempResult=tempMoney*(1+rating/100);
        let year=new Date().getFullYear();
        newRowList.push({year:year,money:tempMoney,rate:rating,result:tempResult});
        while(tempResult<goal){
            year++;
            tempMoney=tempResult;
            tempResult=tempMoney*(1+rating/100);
            newRowList.push({year:year,money:tempMoney,rate:rating,result:tempResult});
        }
        setRowlist(newRowList);
    }
  return (
    <div>
      <div style={{display:"flex", height:'30px', justifyContent:"center", alignItems:"center",gap:'10px'}}>
        <p>Money</p>
        <input type="number" onChange={handelChangeMoney}></input>
      </div>
      <div style={{display:"flex", height:'30px', justifyContent:"center", alignItems:"center",gap:'10px'}}>
        <p>Rating</p>
        <input type="number" onChange={handelChangeRating}></input>
      </div>
      <div style={{display:"flex", height:'30px', justifyContent:"center", alignItems:"center",gap:'10px'}}>
        <p>Goal</p>
        <input type="number" onChange={handelChangeGoal}></input>
      </div>
      <button onClick={calcute}>Calculate</button>
      <table style={{width:'400px'}}>
        <thead>
            <tr>
                <td style={{border:'1px solid white'}}>Year</td>
                <td style={{border:'1px solid white'}}>Money</td>
                <td style={{border:'1px solid white'}}>Rate</td>
                <td style={{border:'1px solid white'}}>Result</td>
            </tr>
        </thead>
        <tbody>
            {rowList.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td style={{border:'1px solid white'}}>{item.year}</td>
                        <td style={{border:'1px solid white'}}>{(item.money).toFixed(1)}</td>
                        <td style={{border:'1px solid white'}}>{item.rate}</td>
                        <td style={{border:'1px solid white'}}>{(item.result).toFixed(1)}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}
export default CalculatorInvest;