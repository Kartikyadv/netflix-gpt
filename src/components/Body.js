import React, { useEffect } from 'react';
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
  },[]);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
    ])
    
  return (
    <>
    <RouterProvider router={appRouter}>

    </RouterProvider>
    </>
  )
}

export default Body