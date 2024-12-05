import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Farmhouse Fare. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Instagram
          </a>
        </div>
      </div>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.subHeader}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img src="backend1.jpg" alt="Backend Developer" style={styles.image} />
            <h3 style={styles.teamRole}>Backend Developer</h3>
            <p style={styles.description}>Specializes in server-side logic and database integration.</p>
          </div>
          <div style={styles.teamMember}>
            <img src="backend2.jpg" alt="Backend Developer" style={styles.image} />
            <h3 style={styles.teamRole}>Backend Developer</h3>
            <p style={styles.description}>Expert in API development and cloud architecture.</p>
          </div>
          <div style={styles.teamMember}>
            <img src="frontend.jpg" alt="Frontend Developer" style={styles.image} />
            <h3 style={styles.teamRole}>Frontend Developer</h3>
            <p style={styles.description}>Focuses on creating intuitive and responsive user interfaces.</p>
          </div>
          <div style={styles.teamMember}>
            <img src="project_manager.jpg" alt="Project Manager" style={styles.image} />
            <h3 style={styles.teamRole}>Project Manager</h3>
            <p style={styles.description}>Oversees project timelines and ensures successful delivery.</p>
          </div>
          <div style={styles.teamMember}>
            <img src="sales_manager.jpg" alt="Sales Manager" style={styles.image} />
            <h3 style={styles.teamRole}>Sales Manager</h3>
            <p style={styles.description}>Leads the sales team with a focus on client relationships.</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ ...styles.section, ...styles.verticalSection }}>
        <h2 style={styles.subHeader}>Location</h2>
        <p style={styles.paragraph}>97 Durham Ave, Salt River, Cape Town, 7925</p>
        <p style={styles.paragraph}>Phone: +27 78 151 9494</p>
      </section>

      {/* Opening Hours Section */}
      <section style={{ ...styles.section, ...styles.verticalSection }}>
        <h2 style={styles.subHeader}>Opening Hours</h2>
        <p style={styles.paragraph}><strong>LUNCH</strong><br />Saturday and Sunday <br /> 12:00 PM to 1:30 PM</p>
        <p style={styles.paragraph}><strong>DINNER</strong><br />Wednesday to Sunday <br /> 6:00 PM to 10:45 PM</p>
      </section>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  teamSection: {
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
  },
  teamGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  teamMember: {
    maxWidth: '150px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '50%',
    height: 'auto',
  },
  teamRole: {
    fontSize: '16px',
    color: '#fff',
    marginTop: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#ccc',
  },
  section: {
    padding: '20px',
    borderTop: '1px solid #444',
    marginTop: '20px',
  },
  verticalSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '10px',
  },
};

export default Footer;
