import React from 'react';
import {
    Link
} from 'react-router-dom';

export const Home = () => {
    return (
        <>
        <h2>This is Home page</h2>
            <Link to='/registration/one'><button style={{ marginTop: "10px" }} type="button" class="btn btn-info">Go To Form Page</button></Link>
    </>
    );
}