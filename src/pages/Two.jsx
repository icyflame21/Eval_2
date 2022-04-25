import React from 'react';
import './Home.css'
export const AboutUs = () => {
    return (
        <>
            <div className='form_1'>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">State</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your State"/>
            </div>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Address</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Address"/>
    </div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">PIN</label>
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Pin Code"/>
            </div>
            <div class="col-12">
    <button type="submit" class="btn btn-primary">SUBMIT</button>
  </div>
        </div> 
        </>
    );
}