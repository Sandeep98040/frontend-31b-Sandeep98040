import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getMyProfileApi, updateMyProfileApi } from "../apis/Api";

const EditProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userImageUrl: '',
  });
  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMyProfileApi().then((res) => {
      if (res.data.success) {
        setUser(res.data.user);
        setPreviewImage(res.data.user.userImageUrl);
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUserImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    if (userImage) {
      formData.append("userImage", userImage);
    }

    updateMyProfileApi(formData).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/profile');
      } else {
        toast.error(res.data.message);
      }
    }).catch((err) => {
      console.log(err);
      toast.error("Internal Server Error!");
    });
  };

  return (
    <div className="m-4">
      <h3>Editing Profile</h3>
      <div className="d-flex gap-3">
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="form-control mb-2"
            type="text"
            placeholder="Enter first name"
          />
          <label>Last Name</label>
          <input
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="form-control mb-2"
            type="text"
            placeholder="Enter last name"
          />
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            className="form-control mb-2"
            placeholder="Enter your email"
          />
          <label>User Image</label>
          <input
            onChange={handleImageChange}
            type="file"
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Update Profile
          </button>
        </form>
        <div>
          <h6>Image Preview</h6>
          {previewImage ? (
            <img src={previewImage} alt="Profile" className="img-fluid rounded-4 object-fit-cover" width={200} height={200} />
          ) : (
            <p>No image selected!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;