
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePetApi, updatePetApi } from "../../apis/Api";
import { toast } from "react-toastify";


const AdminEditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State variables for pet details
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petType, setPetType] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetching pet data
  useEffect(() => {
    getSinglePetApi(id).then((res) => {
      const pet = res.data.pet;
      setPetName(pet.name);
      setPetAge(pet.age);
      setPetBreed(pet.breed);
      setPetDescription(pet.description);
      setPetType(pet.type);
      setOldImage(pet.imageUrl);
    });
  }, [id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPetImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", petName);
    formData.append("age", petAge);
    formData.append("breed", petBreed);
    formData.append("description", petDescription);
    formData.append("type", petType);
    formData.append("image", petImage);

    updatePetApi(id, formData).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/admin/dashboard');
      } else {
        toast.error(res.data.message);
      }
    }).catch((err) => {
      console.log(err);
      toast.error("Internal server error!");
    });
  };

  return (
    <div className="m-4">
      <h3>
        Editing Pet - <span className="text-danger">{petName}</span>
      </h3>
      <div className="d-flex gap-3">
        <form onSubmit={handleSubmit}>
          <label>Pet Name</label>
          <input
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="form-control mb-2"
            type="text"
            placeholder="Enter pet name"
          />

          <label>Pet Age</label>
          <input
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            type="number"
            className="form-control mb-2"
            placeholder="Enter pet age"
          />

          <label>Pet Breed</label>
          <input
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            className="form-control mb-2"
            type="text"
            placeholder="Enter pet breed"
          />

          <label>Pet Type</label>
          <select
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="form-control mb-2"
          >
            <option value="">Select Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            {/* Add more pet types as needed */}
          </select>

          <label>Pet Description</label>
          <textarea
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            className="form-control mb-2"
            rows="3"
            placeholder="Enter description"
          ></textarea>

          <label>Pet Image</label>
          <input
            type="file"
            className="form-control mb-2"
            onChange={handleImageChange}
          />

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Update Pet
          </button>
        </form>

        <div>
          <h6>Current Image</h6>
          <img
            src={oldImage}
            alt="Current Pet"
            className="img-fluid rounded-4"
            width={200}
            height={200}
          />

          <h6 className="mt-4">New Image Preview</h6>
          {previewImage ? (
            <img
              src={previewImage}
              alt="New Pet"
              className="img-fluid rounded-4"
              width={200}
              height={200}
            />
          ) : (
            <p>No new image selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEditPet;
