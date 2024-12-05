import React, { useState } from 'react';

const Contact = () => {
  // State hooks for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xldejegq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        PopUp(); // Show popup after successful submission
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue sending your message. Please try again.');
    }
  };

  // PopUp function
  const PopUp = () => {
    alert('Your message was sent successfully');
  };

  return (
    <section id="contact" style={styles.contactSection}>
      <div style={styles.container}>
        <h2 style={styles.header}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions, feel free to reach out to us. We're here to help!
        </p>
        <form id="contact-form" onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label htmlFor="email" style={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

// Inline styles for the component
const styles = {
  contactSection: {
    padding: '40px 0',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    color: '#333',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ff6347',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Contact;
