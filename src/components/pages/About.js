import React from 'react';

const styles = {
  cardStyle: {
      maxWidth: 20,
  },
};

export default function About() {
  return (
    <div className="vh-75">
    <div className="container w-75">
      <div className="card text-white bg-secondary mb-3" style={styles.maxWidth}>
      <div className="card-header">About Me</div>
      <div className="card-body">
        <p className="card-text">Hello! My name is Martha and I am working on a web development 
                portfolio for the UofT Web Development Bootcamp.
        </p>
        <p className="card-text">I will add projects to this site as I work on them.</p>
      </div>
    </div>
  </div>
  </div>
  );
}
