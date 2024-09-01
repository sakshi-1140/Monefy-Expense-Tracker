import React, { useState } from "react";
import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

function SignUpSignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const navigate = useNavigate();
  const signUpWithEmail = () => {
    setLoading(true);
    console.log("Name", name);
    // create a new account using firebase
    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user Credential:", user);
            toast.success("Successfully Signed Up!");
            setLoading(false);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            createDoc(user); // Create doc with user id
            navigate("/dashboard");
          })
          .catch((error) => {
           // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Passwords do not match. Please try again.");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
    }
  };

  async function createDoc(user) {
    // //create User Doc
    // // write(!userId exist)
    setLoading(true);
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();

      try {
        await setDoc(doc(db, "users", user.uid), {
          name: displayName ? displayName : name,
          email,
          photoURL: photoURL ? photoURL : "",
          createdAt,
        });
        
        toast.success("Account Created!"); // comment this line later , this is unnecessary.
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        console.error("Error creating user document: ", error);
        setLoading(false);
      }
    } else {
      // toast.error("User already Exist. ");
      setLoading(false);
    }
  }

  const loginUsingEmail = () => {
    //console.log("login clicked");
    setLoading(true);
    if (password != "" && email != "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Logged In Successfully!");
          setLoading(false);
          navigate("/dashboard");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
        });
    } else {
      toast.error("All Fields are mandatory!");
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result); // remove this  as of 27/08
      const token = credential.accessToken;  // remove this as of 27/08
      // The signed-in user info.
      const user = result.user;
      console.log("user ::", user);
      createDoc(user);
      toast.success("User Authenticated Successfully!"); // used later one & remove this.
      //toast.success("Logged In Successfully!"); // used this
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      //console.error("Error signing in with Google: ", error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {loginForm ? (
        <div className="signup-signin-container">
          <h2 className="title">
            Login on <span className="blue-text">Monefy.</span>
          </h2>
          <form>
            <Input
              label={"Email"}
              type={"email"}
              state={email}
              setState={setEmail}
              placeholder={"JohnSmith@gmail.com"}
            />
            <Input
              label={"Password"}
              type={"password"}
              state={password}
              setState={setPassword}
              placeholder={"Example123"}
            />
            <Button
              disabled={loading}
              text={loading ? "Loading..." : "Login with Email and Password"}
              onClick={loginUsingEmail}
            />
            <p className="p-login">or</p>
            <Button
              onClick={signInWithGoogle}
              text={loading ? "Loading..." : "Login with Google"}
              blue={true}
            />
            <p className="p-login ">
              Or Don't Have An Account?
              <span
                onClick={() => setLoginForm(!loginForm)}
                className="blue-text cursor"
              >
                {" "}
                Click Here.
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className="signup-signin-container">
          <h2 className="title">
            Sign Up on <span className="blue-text">Monefy.</span>
          </h2>
          <form>
            <Input
              label={"Full Name"}
              type={"text"}
              state={name}
              setState={setName}
              placeholder={"John Smith"}
            />
            <Input
              label={"Email"}
              type={"email"}
              state={email}
              setState={setEmail}
              placeholder={"JohnSmith@gmail.com"}
            />
            <Input
              label={"Password"}
              type={"password"}
              state={password}
              setState={setPassword}
              placeholder={"Example123"}
            />
            <Input
              label={"Confirm Password"}
              type={"password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder={"Example123"}
            />
            <Button
              disabled={loading}
              text={loading ? "Loading..." : "Sign Up with Email and Password"}
              onClick={signUpWithEmail}
            />
            <p className="p-login">or</p>
            <Button
              onClick={signInWithGoogle}
              text={loading ? "Loading..." : "Sign Up with Google"}
              blue={true}
            />
            <p className="p-login">
              Or Have An Account Already?
              <span
                onClick={() => setLoginForm(!loginForm)}
                className="blue-text cursor"
              >
                {" "}
                Click Here.
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpSignIn;
