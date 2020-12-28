import React from 'react'

interface Props {}
const Title: React.FC<Props> = () => {
  return (
    <section className="hero">
        <div className="hero-body">
        <div className="container">
            <h1 className="title">Reduxsauce Example Typescript</h1>
            <h2 className="subtitle">Todo App Using React, Redux, and Reduxsauce</h2>
        </div>
        </div>
    </section>
  );
};

export default Title;