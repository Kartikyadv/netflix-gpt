import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInFrom) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
            photoURL:
              "https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <img
        className="absolute"
        src={BACKGROUND_IMG_URL}
        alt="Logo"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg bg-opacity-80 w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInFrom ? null : (
          <input
            ref={name}
            className="p-2 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-2 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
          name=""
          id=""
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? "New to Neftlix? Sign Up now"
            : "Already a User? Sign In now"}
        </p>
      </form>
    </>
  );
};

export default Login;
