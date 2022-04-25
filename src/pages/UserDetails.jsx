import React, { useEffect, useState } from 'react';
import './UserDetails.css'

export const UserDetails = () => {
    const userDetails1 = JSON.parse(localStorage.getItem("Detail_1"));
    console.log(userDetails1);
    const userDetails2 =JSON.parse(localStorage.getItem("Detail_2"));
    return (
        <>
    <div class="card" style={{ width: "18rem",backgroundColor: "grey",color:'white' }}>
     <div class="card-header">
    User Details
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{userDetails1[0]}</li>
    <li class="list-group-item">{ userDetails1[1]}</li>
    <li class="list-group-item">{ userDetails1[2]}</li>
    <li class="list-group-item">{ userDetails2[0]}</li>
    <li class="list-group-item">{ userDetails2[1]}</li>
    <li class="list-group-item">{ userDetails2[2]}</li>
  </ul>
</div>
    </>);
}