import React,{useState} from 'react';
import './Home.css'
import {
    Link
} from 'react-router-dom';
export const AboutUs = () => {
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [pin, setPin] = useState("")
    const [query, setQuery] = useState("")
    const details2=[]
    const handleSubmit = () => {
       details2.push(state,address,pin)
       localStorage.setItem('Detail_2', JSON.stringify(details2))
        setQuery('')
    }
    return (
        <>
            <div className='form_1'>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">State</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your State" value={state} onChange={(e) => {
                        setState(e.target.value);
                    } }/>
            </div>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Address</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Address" value={address} onChange={(e) => {
                        setAddress(e.target.value);
                    } }/>
    </div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">PIN</label>
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Pin Code" value={pin} onChange={(e) => {
                        setPin(e.target.value);
                    } }/>
            </div>
            <div class="col-12">
    <Link to="/user/details"><button type="submit" class="btn btn-primary" onClick={handleSubmit}>SUBMIT</button></Link>
  </div>
        </div> 
        </>
    );
}