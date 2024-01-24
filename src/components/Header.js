import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_LOGO, SUPPORTED_LANG } from "../utils/constants";
import { removeMovies } from "../utils/moviesSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeMovies());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [navigate, dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="Logo" />
        {user && (
          <div className="flex p-2">
            {
              showGPTSearch && 
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            }
            <button
              onClick={handleGPTSearchClick}
              className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white"
            >
              GPT Search
            </button>
            <img
              className="w-10 h-10"
              src={user?.photoURL || USER_LOGO}
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
