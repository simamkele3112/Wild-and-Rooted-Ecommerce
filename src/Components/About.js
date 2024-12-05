import React from 'react';
import OurView from '../Assets/images/Our view.jpeg';
import kitchenStaffImage from '../Assets/images/kitchen staff.jpg';
import waitStaffImage from '../Assets/images/waitress_and_waiter.jpg';
// eslint-disable-next-line no-unused-vars
import backgroundImage from '../Assets/images/about_background.jpg'

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        At Farmhouse Fare, we are passionate about serving fresh, locally sourced meals that celebrate the richness of seasonal ingredients. Our mission is to bring the farm-to-table dining experience directly to you, offering dishes that are as nourishing as they are delicious. We believe that the key to great food lies in its simplicity, and that’s why we carefully select the best produce and ingredients from local farms, ensuring that every dish is bursting with flavor.
      </p>
      <p style={styles.paragraph}>
        Whether you're enjoying a hearty breakfast to start your day or winding down with a comforting dinner, every meal at Farmhouse Fare is prepared with love and attention to detail. Sustainability is at the heart of our approach, as we strive to minimize our environmental footprint by supporting sustainable farming practices and reducing food waste.
      </p>
      <p style={styles.paragraph}>
        Join us for a dining experience that celebrates the goodness of nature, where every bite connects you to the farmers who grow our food and the community that enjoys it. At Farmhouse Fare, we’re more than just a meal—we’re a movement towards a healthier, more sustainable way of eating.
      </p>

      <h2 style={styles.subHeader}>Our View</h2>
      <img src={OurView} alt="Our Restaurant View" style={styles.image} />
      
      <h2 style={styles.subHeader}>About Our Staff</h2>
      <p style={styles.paragraph}>
        At Farmhouse Fare, we believe that great food begins with a passionate and dedicated team. Our staff is the heart of everything we do, and we are proud to have a group of individuals who share our commitment to quality, sustainability, and exceptional service.
      </p>

      <h3 style={styles.subHeader}>Our Chefs</h3>
      <img src={kitchenStaffImage} alt="Our Chefs" style={styles.image} />
      <p style={styles.paragraph}>
        Our chefs are seasoned professionals with a deep love for food and a strong connection to local, seasonal ingredients. They work closely with farmers and suppliers to ensure that the dishes they prepare are fresh, flavorful, and reflect the best that nature has to offer.
      </p>

      <h3 style={styles.subHeader}>Our Servers & Front-of-House Team</h3>
      <img src={waitStaffImage} alt="Our Servers" style={styles.image} />
      <p style={styles.paragraph}>
        The front-of-house team at Farmhouse Fare is warm, friendly, and knowledgeable about the food we serve. They are dedicated to making every dining experience memorable by providing attentive service and offering recommendations that will enhance your meal.
      </p>

      <h3 style={styles.subHeader}>Our Sustainability Experts</h3>
      <p style={styles.paragraph}>
        We take sustainability seriously at Farmhouse Fare, and we have a team focused on making sure that every aspect of our business—from sourcing to waste management—is environmentally responsible.
      </p>

      <h3 style={styles.subHeader}>A Culture of Collaboration and Passion</h3>
      <p style={styles.paragraph}>
        At Farmhouse Fare, we foster a collaborative environment where every team member is encouraged to contribute ideas, share their passion for food, and work together to create the best possible dining experience for our guests. We are proud of our team and the shared values that drive our success—quality, sustainability, and a deep respect for the ingredients that make our meals exceptional.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center'
  },
  header: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  subHeader: {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px',
    color: 'white',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'white',
    marginBottom: '20px',
  },
  image: {
    width: '90%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '6px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default AboutUs;
