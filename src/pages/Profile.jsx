import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMyProfileApi, updateMyProfileApi } from "../apis/Api";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    getMyProfileApi().then((res) => {
      if (res.data.success) {
        setUser(res.data.user);
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleImageFunction = (event) => {
  //   const file = event.target.files[0];
  //   setUserImage(file);
  //   setPreviewImage(URL.createObjectURL(file));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);

    updateMyProfileApi(formData).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        // Update user state if necessary
      } else {
        toast.error(res.data.message);
      }
    }).catch((err) => {
      console.log(err);
      toast.error("Internal Server Error!");
    });
  };

  return (
    <>
      <div className="m-4">
        <h1>My Profile</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="form-control mb-2"
            type="text"
          />
          <label>Last Name</label>
          <input
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="form-control mb-2"
            type="text"
          />
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control mb-2"
            type="email"
          />
          <label>User Image</label>
          <input
            // onChange={handleImageFunction}
            type="file"
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
