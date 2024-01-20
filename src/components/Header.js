import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_LOGO } from "../utils/constants";
import { removeNowPlayingMovies, removeTrailerVideo } from "../utils/moviesSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          dispatch(removeNowPlayingMovies());
          dispatch(removeTrailerVideo());
          navigate("/");
        }
      });
      return () => unSubscribe();
  },[navigate,dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
      });
  };
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img
          className="w-44"
          src={LOGO}
          alt="Logo"
        />
        {user && (
          <div className="p-4">
            <img
              className="w-10 h-10"
              src={
                user?.photoURL ||
                USER_LOGO
              }
              alt="userIcon"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
