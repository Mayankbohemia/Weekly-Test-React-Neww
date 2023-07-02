import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setIsLight} from '../slice';

const Main = () => {

    const isLight = useSelector((state)=>state.isLight);

    const dispatch = useDispatch()

    return(
        <>
        <h3>Geekster</h3>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/contact">CONTACT</Link>
        <br />
        <Link to="/service">SERVICE</Link>
        <br />
        <br />
        <button onClick={()=>{dispatch(setIsLight())}}>Toggle Theme to {isLight?"Dark":"Light"}</button>
         
        </>
    )
}

export default Main;