import React, { useState } from 'react';

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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '80%',
    height: '100px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  info: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
    alert('Message sent!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.info}>
        If you have any questions or inquiries, feel free to reach out to us. We're here to help!
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          style={styles.textarea} 
          required 
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      <div>
        <p style={styles.info}><strong>Email:</strong> sandy@gmail.com</p>
        <p style={styles.info}><strong>Phone:</strong> +9779804062184</p>
        <p style={styles.info}><strong>Address:</strong> Balkot, Bhaktapur</p>
      </div>
    </div>
  );
};

export default ContactUs;
