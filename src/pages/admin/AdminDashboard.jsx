import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

// Styles
const styles = {
  dashboard: {
    padding: '20px',
    maxWidth: '1000px',
    margin: 'auto',
  },
  petCard: {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  petImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  button: {
    padding: '8px 15px',
    margin: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
  },
  closeButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  formTextarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '100px',
  },
  imageUpload: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};

const AdminDashboard = () => {
  const [pets, setPets] = useState([]);
  const [showAddPetModal, setShowAddPetModal] = useState(false);

  // State variables for adding a new pet
  const [newPetName, setNewPetName] = useState('');
  const [newPetAge, setNewPetAge] = useState('');
  const [newPetBreed, setNewPetBreed] = useState('');
  const [newPetType, setNewPetType] = useState('');
  const [newPetDescription, setNewPetDescription] = useState('');
  const [newPetImage, setNewPetImage] = useState(null);

  const handleDelete = (petId) => {
    setPets(pets.filter(pet => pet.id !== petId));
    toast.success('Pet deleted successfully');
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    const newPetId = pets.length > 0 ? Math.max(...pets.map(p => p.id)) + 1 : 1;
    const newPet = {
      id: newPetId,
      name: newPetName,
      age: newPetAge,
      breed: newPetBreed,
      type: newPetType,
      description: newPetDescription,
      image: newPetImage,
    };
    setPets([...pets, newPet]);
    setShowAddPetModal(false);
    toast.success('Pet added successfully');
  };

  const petCards = useMemo(() => pets.map(pet => (
    <div key={pet.id} style={styles.petCard}>
      <div>
        <img src={pet.image} alt={pet.name} style={styles.petImage} />
        <strong>{pet.name}</strong> - {pet.age}, {pet.breed}
      </div>
      <button onClick={() => handleDelete(pet.id)} style={styles.button}>Delete</button>
    </div>
  )), [pets]);

  return (
    <div style={styles.dashboard}>
      <button onClick={() => setShowAddPetModal(true)} style={styles.button}>Add Pet</button>
      {petCards}
      {showAddPetModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <form onSubmit={handleAddPet}>
              <input type="text" placeholder="Name" value={newPetName} onChange={e => setNewPetName(e.target.value)} style={styles.formInput} />
              <input type="text" placeholder="Age" value={newPetAge} onChange={e => setNewPetAge(e.target.value)} style={styles.formInput} />
              <input type="text" placeholder="Breed" value={newPetBreed} onChange={e => setNewPetBreed(e.target.value)} style={styles.formInput} />
              <input type="text" placeholder="Type" value={newPetType} onChange={e => setNewPetType(e.target.value)} style={styles.formInput} />
              <textarea placeholder="Description" value={newPetDescription} onChange={e => setNewPetDescription(e.target.value)} style={styles.formTextarea}></textarea>
              <input type="file" onChange={(e) => setNewPetImage(URL.createObjectURL(e.target.files[0]))} style={styles.imageUpload} />
              <button type="submit" style={styles.button}>Add</button>
              <button type="button" onClick={() => setShowAddPetModal(false)} style={styles.closeButton}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
