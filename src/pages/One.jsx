import React from 'react';
import './Home.css'
import {
    Link
} from 'react-router-dom';

export const Contact = () => {
    return (
        <>
        <div className='form_1'>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
            </div>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Age</label>
  <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Age"/>
    </div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Date of Birth</label>
  <input type="date" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Birth"/>
            </div>
            <div class="col-12">
    <Link to="/registration/two"><button type="submit" class="btn btn-primary">Next</button></Link>
  </div>
        </div>    
        </>
    );
}