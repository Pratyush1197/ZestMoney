import logo from './logo.svg';
import './App.css';
import React from 'react'
import ToDoListData from './TodoListData'




function App() {

  const [ToDoName, setToDoName] = React.useState('');
  const [ToDoDescription, setToDoDescription] = React.useState('');
  const [ToDoDate, setToDoDate] = React.useState('');
  const [ToDoListItems, setToDoListItems] = React.useState([]);
  const [DatePassed, setDatePassed] = React.useState(false)
  const [Showerror, setShowError] = React.useState(null)

  function AddToList(ToDoName,ToDoDescription,ToDoDate){

    var obj = {
      ToDoName: ToDoName,
      ToDoDescription: ToDoDescription,
      ToDoDate: ToDoDate,
      Completed: false,
      isEditable: false,
      isDatePassed: DatePassed
    }
    setToDoListItems(obj)
  
  }

  
  function CheckIfAllDataPresent(ToDoName,ToDoDescription,ToDoDate){
    if(ToDoName!== '' && ToDoDescription !== '' && ToDoDate !== ''){
      return true
    }
    else{
      return false
    }
  }
  
  function handleformSubmit()  {
   if (CheckIfAllDataPresent(ToDoName,ToDoDescription,ToDoDate)){
        AddToList(ToDoName,ToDoDescription,ToDoDate)
        setShowError(null)

    }
    else{
  
        setShowError('Please fill all the fields')

    
    }
    

  }  

  const handleToDoNameChange = (event) => {
    setToDoName(event.target.value);
  }



  const handleToDoDescription = (event) => {
    setToDoDescription(event.target.value);
  }

  const handleToDoDateChange = (event) => {
    var currDate = new Date(event.target.value);

    if(currDate<Date.now()){
      setDatePassed(true)
    }
    else{
      setDatePassed(false)
    }
    setToDoDate(currDate.toDateString());
    

  }


return (
  <div className="App">
  {Showerror !== null  && <div style={{backgroundColor: 'red', color: 'white', padding:'10px'}}>{Showerror}</div> }
   <div className="inputForm">
  
  <label>Name:</label>
  <input className="nameInput" onChange={handleToDoNameChange}></input>
  <br></br>
  <label>Description:</label>

  <input className="descInput" onChange={handleToDoDescription}/>
  <br></br>

  <label>Date:</label>
  <input className="dateInput" type="date" onChange={handleToDoDateChange}/>
  
  <br></br>

  <button className = "submit" onClick={handleformSubmit}>Submit</button>    
  </div>
   <ToDoListData ToDoListItems={ToDoListItems}/>
  </div>
);
    
  
}

export default App;
