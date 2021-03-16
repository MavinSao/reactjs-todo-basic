import {Button, Form} from 'react-bootstrap';
import './AddTask.css';

function AddTask({setValue,value,onAdd,isUpdate}) {
  return (
    <div>
        <h2 className="my-4 text-white">Input Task</h2>
        <div className="flexContainer">
            <Form.Control 
                type="text" 
                placeholder="Good morning Mavin, What in your main focus today?"
                value={value}  
                className="text-task"
                onChange={(e)=>setValue(e.target.value)}      
            />
            <Button className="btn-add" onClick={onAdd} disabled={value=='' ? true : false}>{isUpdate? 'Save':'Add'}</Button>
        </div>
    </div>
  )
}

export default AddTask
