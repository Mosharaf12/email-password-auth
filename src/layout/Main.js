import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <h3>This is Authentication profile</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;