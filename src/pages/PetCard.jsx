import React, { useState } from 'react';

const PetCard = ({ pet, onDelete }) => {
  return (
    <div className="card">
      <img src={pet.image} alt={pet.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{pet.name}</h5>
        <p className="card-text">{pet.age} years old</p>
        <p className="card-text">{pet.location}</p>
        {pet.newThisWeek && <span className="badge bg-info">NEW THIS WEEK</span>}
        <button onClick={() => onDelete(pet.id)} className="btn btn-danger mt-2">Delete</button>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [pets, setPets] = useState([
    // ... assume there is an array of pet objects with id, name, age, image, location, and newThisWeek
  ]);

  // Add functions to handle adding and deleting pets
  const addPet = (newPet) => {
    setPets([...pets, { ...newPet, id: Date.now() }]); // Simplistic approach for example purposes
  };

  const deletePet = (petId) => {
    setPets(pets.filter(pet => pet.id !== petId));
  };

  // ... include additional functions and state for editing and searching if needed

  return (
    <div className="container mt-4">
      {/* Include additional UI for adding pets */}
      <button className="btn btn-success mb-3" onClick={() => addPet(promptNewPet())}>Add New Pet</button>

      <div className="row mb-3">
        <div className="col">
          {/* Include select and input elements for filtering options here */}
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary" type="button">Reset</button>
          <button className="btn btn-primary" type="button">Search</button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pets.map(pet => (
          <div className="col" key={pet.id}>
            <PetCard pet={pet} onDelete={deletePet} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Simulated function for adding a pet, in reality, you would have a form to fill this information
const promptNewPet = () => {
  const name = prompt('Enter pet name:');
  const age = prompt('Enter pet age:');
  const image = prompt('Enter pet image URL:');
  const location = prompt('Enter pet location:');
  return { name, age, image, location, newThisWeek: false };
};

export default AdminDashboard;
