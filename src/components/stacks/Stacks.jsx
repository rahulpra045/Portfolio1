// import React from 'react';
import PropTypes from 'prop-types';
import './Stacks.css';
import c from '../../assets/stacks/c.png';
import python from '../../assets/stacks/python.png';
import html from '../../assets/stacks/html.png';
import css from '../../assets/stacks/css.png';
import js from '../../assets/stacks/js.png';
import figma from '../../assets/stacks/figma.png';

const StackImage = ({ src, alt, name }) => {
  return (
    <div className="stack-image-container">
      <img src={src} alt={alt} title={name} />
    </div>
  );
};

const Stacks = () => {
  return (
    <section className="skills-section">
      <StackImage src={c} alt="c++" name="C++" />
      <StackImage src={python} alt="python-icon" name="Python" />
      <StackImage src={html} alt="html-icon" name="HTML" />
      <StackImage src={css} alt="css-icon" name="CSS" />
      <StackImage src={js} alt="js-icon" name="JavaScript" />
      <StackImage src={figma} alt="figma-icon" name="Figma" />
    </section>
  );
};
StackImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Stacks;
