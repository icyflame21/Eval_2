import React, { useEffect, useState } from 'react';
import './UserDetails.css'

export const UserDetails = () => {
    const userDetails1 = JSON.parse(localStorage.getItem('details1'))
    const userDetails2 =JSON.parse(localStorage.getItem('details2'));
    return (
        <>
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    User Details
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
    </>);
}