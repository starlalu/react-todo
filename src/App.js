import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
function App() {
  const [todoCurrent,SetTodo]=useState('');
  const [todoList,SetTodoList]=useState([]);
  const [sampleGetApi,SetsampleGetApi]=useState([]);
  const removeItem=(index)=>{
    SetTodoList(todoList.filter((o, i) => index !== i));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <p>Todo Form</p>
        <div className="form-group">
          <input type="text"  value={todoCurrent} onChange={(e)=>SetTodo(e.target.value)}  style={{color:'black'}}/>
          <button type="button" style={{color:'white', backgroundColor:'#61dafb'}} onClick={(index)=>SetTodoList([...todoList,{id:Date.now(),text: todoCurrent}])}>Add</button>
        </div>

        <button onClick={()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
               console.log(response.data);
               SetsampleGetApi(response.data);
          })
        }} style={{color:'black'}}>Click Me</button>
       
    </div>
    {
      todoList.map((value,index)=>{
          return( <div className="form-group" style={{paddingTop:"3px"}} key={index}><input type="disabled"  defaultValue={value.text} style={{color:'black'}} /> <button type="button" style={{color:'white', backgroundColor:'#61dafb'}} onClick={()=> removeItem(index)}>Delete</button></div>)
      })

    }
     <table><tbody><tr style={{border:'1px red  dashed'}}><td style={{border:'1px red  dashed'}}>Number</td><td style={{border:'1px red  dashed'}}>Title</td><td style={{border:'1px red  dashed'}}>Post</td></tr>
   
    
    {
     
       sampleGetApi.map((obj,index)=>{
        return (<tr key={index} style={{border:'1px red  dashed'}} className="App-table"><td style={{border:'1px red  dashed'}}>{index}</td><td style={{border:'1px red  dashed'}}>{obj.title}</td><td style={{border:'1px red  dashed'}}>{obj.body}</td></tr>);

        })

    }
      </tbody>
       </table>
      </header>
     
      
    </div>
  );
}

export default App;
/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer" 
>
Learn React
</a> */