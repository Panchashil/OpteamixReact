import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRouteComp = ({Component}) => {
const nav = useNavigate();
// const {Component} = props;

useEffect(()=>{
       if(!sessionStorage.getItem("user")){
              nav('/');
       }
},[]);

    return (
        <div>
            <Component></Component>
        </div>
    )
}

export default ProtectedRouteComp
