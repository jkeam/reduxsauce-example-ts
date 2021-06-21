import React, { FC, ReactElement } from 'react';

const Title: FC = (): ReactElement => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Reduxsauce TypeScript Example</h1>
        <h2 className="subtitle">Todo App using TypeScript, React, Redux, and Reduxsauce</h2>
      </div>
    </div>
  </section>
);

export default Title;