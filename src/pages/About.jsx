import React from 'react';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: '600px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
};

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Pedaption</h1>
      <img 
        src="https://img.freepik.com/premium-vector/adopt-pet-concept_23-2148517279.jpg?w=740" 
        alt="About Us" 
        style={styles.image} 
      />
      <p style={styles.paragraph}>
        Welcome to Pedaption, a place where every pet finds a home! We are a non-profit 
        organization dedicated to the rescue, rehabilitation, and rehoming of pets in need. 
        Our mission is to connect loving families with wonderful pets while advocating for 
        responsible pet ownership.
      </p>
      <p style={styles.paragraph}>
        Since our inception in 2010, we have helped over 10,000 pets find their forever homes. 
        Our team consists of passionate volunteers and veterinary professionals who work 
        tirelessly to provide the best care for our animals. We believe that every pet 
        deserves a second chance at happiness, and we strive to make that a reality.
      </p>
      <p style={styles.paragraph}>
        If you're looking to adopt a pet, volunteer, or support our cause, we welcome you 
        to join our PetAdopt family. Together, we can make a difference in the lives of 
        pets in need.
      </p>
    </div>
  );
};

export default AboutUs;
