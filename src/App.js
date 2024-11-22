import './App.scss';
import React, { useState } from 'react';

const MyTodoList = () => {
  const [mytodos, setMyTodos] = useState([]);
  const [inputData, setInputData] = useState('');

  // ----------------------Data Submit--------------------------------------
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (inputData=== ""){
      alert("please enter input field")

    }else{
      setMyTodos([...mytodos,{ text: inputData, isChecked: false }])
      setInputData('');
    }
   
console.log(inputData)
  };

  //----------------------Data Delete------------------------------------------
  const _handleDelete = (index) => {
    const newTodos = [...mytodos];
    newTodos.splice(index, 1);
    setMyTodos(newTodos);
  };

  //----------------------Data Checked-------------------------------------------
  const _checkedComplete = (index) => {
    const updatedTodos = mytodos.map((ele, index1) =>
      index1 === index ? { ...ele, isChecked: !ele.isChecked } : ele
    );
    setMyTodos(updatedTodos);
  };

  return (
    <div className='my_todo'>
      <h1>SUBSCRIBE</h1>
      <p>Get connected to our insights</p>
      <form onSubmit={_handleSubmit}>
        <input type="text" value={inputData} placeholder='Enter your details' onChange={(e) => setInputData(e.target.value)}/>
        <button type="submit" onSubmit={_handleSubmit}>Subscribe</button>
      </form>
      <hr/>
      <div className='data_list'>
        {mytodos.map((todo, index) => (
          <li key={index}>
            <span>
               <input type='checkbox' onClick={() => _checkedComplete(index)} />
            </span>

            <span style={{textDecoration: todo.isChecked ? 'line-through' : 'none',width:"100%",textAlign:"left"}}>
              {todo.text}
            </span>
            
            <button className='btn' onClick={() => _handleDelete(index)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MyTodoList;
