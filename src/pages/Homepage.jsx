
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ChatComponent from './ChatComponent'; // Adjust this import path to the location of your ChatComponent

// Mock API call
const getFeaturedPetsApi = () => {
  // Replace this with your actual API call
  return Promise.resolve([
    {
      id: 1,
      name: 'Guinness',
      age: '2 years',
      breed: 'Boston Terrier',
      color: 'Black',
      location: 'Enniskillen',
      image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=996',
    },
    {
      id: 2,
      name: 'Homer',
      age: '3 months',
      breed: 'Mixed',
      color: 'Grey',
      location: 'Cork',
      image: 'https://www.shutterstock.com/image-photo/funny-dog-disgust-denial-disagreement-600nw-723325606.jpg',
    },
    // ... more pets
  ]);
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  petCard: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  petName: {
    fontWeight: 'bold',
  }
};

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getFeaturedPetsApi().then(data => {
      setPets(data);
    }).catch(error => {
      console.error('Error fetching featured pets:', error);
    });
  }, []);

  const petCards = useMemo(() => pets.map(pet => (
    <div key={pet.id} style={styles.petCard}>
      <img src={pet.image} alt={pet.name} style={styles.image} />
      <h5 style={styles.petName}>{pet.name}</h5>
      <p>{pet.age}</p>
      <p>{pet.breed}</p>
      <Link to={`/adopt/${pet.id}`}>Adopt Me!</Link>
    </div>
  )), [pets]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to Pedaption!</h2> 
      <p>Explore some of our adorable pets available for adoption:</p>
      <div>
        {petCards}
      </div>

      {/* ChatComponent is included here */}
      <ChatComponent />
    </div>
  );
};

export default Home;
