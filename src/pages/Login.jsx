import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../apis/Api";
import { Link } from "react-router-dom"; // Make sure this line is added

// ... rest of your component code

const Login = () => {
  //step1: Create a state variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //step1: Check data in console
    console.log(email, password);
    const data = {
      email: email,
      password: password,
    };

    // api call
    loginApi(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          //  set token and user data in local storage
          localStorage.setItem("token", res.data.token);

          // converting incoming json
          const convertedJSON = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJSON);
        }
      })
      .catch((err) => {
        console.error("Server error");
      });
  };

  return (
    //   <>
    //     <h1 className="m-3"> Login to your account!</h1>
    //     <form className="m-3 w-25">
    //       <label>Email</label>
    //       <input
    //         onChange={changeEmail}
    //         className="form-control mb-2"
    //         type="email"
    //         placeholder="Enter your email"
    //       />

    //       <label>Password</label>
    //       <input
    //         onChange={changePassword}
    //         className="form-control mb-2"
    //         type="password"
    //         placeholder="Enter your password"
    //       />

    //       <button onClick={handleSubmit} className="btn btn-success w-100">
    //         Login
    //       </button>
    //       <a href="" className="text-decoration-none text-black">
    //         New to the application?
    //       </a>
    //     </form>
    //   </>
    // );
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f2f4",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "0 0 20px" }}>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#6c5ce7",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <Link
  to="/home"
  style={{
    marginRight: "1rem",
    color: "white", // Set the color to white
    textDecoration: "none",
  }}
>
  LOG IN
</Link>

          </button>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="#" style={{ color: "#6c5ce7", textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>
          <hr style={{ margin: "20px 0" }} />

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="#" style={{ color: "#6c5ce7", textDecoration: "none" }}>
              Need an account?{" "}
              <Link
                to="/signup"
                style={{
                  marginRight: "1rem",
                  color: "#6c5ce7",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
