import logo from './logo.svg';
import './App.css';
import React from 'react'




function ToDoListData(props) {

  //const [ToDoName, setToDoName] = React.useState('');
  //const [ToDoDescription, setToDoDescription] = React.useState('');
  //const [ToDoDate, setToDoDate] = React.useState('');

  const [ToDoList, setToDoList] = React.useState([]);
  
  React.useEffect(() => {
    
    setToDoList([...ToDoList, props.ToDoListItems]);
    }, [props.ToDoListItems])


  function handleToggleEditButton(i){
   
      var TempArray = ToDoList.slice()
    TempArray[i].isEditable = !TempArray[i].isEditable
    setToDoList(TempArray)
    //props.ToDoList = TempArray.slice()


    


      
  }

  function handleCompletedState(i){
    var TempArray = ToDoList.slice()
    TempArray[i].Completed = !TempArray[i].Completed
    setToDoList(TempArray)
    //props.ToDoList = TempArray.slice()
  }
  

  const handleToggleDeleteButton = (key) => {
    
    setToDoList(ToDoList => ToDoList.filter((item, index) => key !== index))
    //props.ToDoList = ToDoList.slice()    
  }


  const handlEditOnNameChange = (event,i) => {
    
    ToDoList[i].ToDoName = event.target.value
   // props.ToDoList = ToDoList.slice()

  }

  return (
    <div className="App">
     
    {ToDoList.map((item,i) =>{
       return (
      <ul className="list-items">
       { i >0  && <div className="content">
       {item.isEditable ?  <input onChange={(event) => handlEditOnNameChange(event,i)} placeholder={item.ToDoName} />:<li className="nameList" style={{color: item.isDatePassed ? 'red':'black', textDecoration: item.Completed ? 'line-through': 'none'}}>{item.ToDoName}</li>}
        <li className="descList" >{item.ToDoDescription}</li>
        <li className="dateList" >{item.ToDoDate}</li>
        </div>}
        {i>0  && <div className="action-btns">
       <button className="edit-btn" onClick={() => handleToggleEditButton(i)}>{item.isEditable  ? 'Save' : 'Edit'}</button>

      <button className="delete-btn" onClick={() => handleToggleDeleteButton(i)}>Delete</button>
      
      {!item.Completed ? <button className="completed-btn"  onClick={()=>handleCompletedState(i)}>Done</button> : '' }
      </div>
        }
       </ul>
      
       )
       })}
     
    </div>
  );
}

export default ToDoListData;
