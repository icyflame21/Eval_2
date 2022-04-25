import React,{useState} from 'react';
import './Home.css'
import {
    Link
} from 'react-router-dom';

export const Contact = () => {
    const [name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [date, setDate] = useState("")
    const [query, setQuery] = useState("")
    const details1=[]
    const handlenext = () => {
        details1.push(name, Age, date)
        localStorage.setItem('Detail_1', JSON.stringify(details1))
       setQuery('')
    }
    return (
        <>
        <div className='form_1'>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" value={name} onChange={(e) => {
                        setName(e.target.value);
                    } }/>
            </div>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Age</label>
                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Age" value={Age} onChange={(e) => {
                        setAge(e.target.value);
                    }}/>
    </div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Birth" value={date} onChange={(e) => {
                        setDate(e.target.value);
                    }}/>
            </div>
            <div class="col-12">
    <Link to="/registration/two"><button type="submit" class="btn btn-primary" onClick={handlenext}>Next</button></Link>
  </div>
        </div>    
        </>
    );
}