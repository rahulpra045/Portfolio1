// import React from 'react'
import './Skills.css'
import PropTypes from 'prop-types';

import react from "../../assets/skills/react.svg";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import node from "../../assets/skills/node.svg";
import solidity from "../../assets/skills/solidity.png";
import hardhat from "../../assets/skills/hardhat.png";

const SkillImage = ({ src, alt, name }) => {
  return (
    <div className="skill-image-container">
      <img src={src} alt={alt} title={name} />
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <SkillImage src={react} alt="react-icon" name="React" />
      <SkillImage src={solidity} alt="solidity-icon" name="Solidity" />
      <SkillImage src={eth} alt="eth-icon" name="Ethereum" />
      <SkillImage src={truffle} alt="truffle-icon" name="Truffle" />
      <SkillImage src={gns} alt="gns-icon" name="GNS" />
      <SkillImage src={hardhat} alt="hardhat-icon" name="Hardhat" />
      <SkillImage src={node} alt="node-icon" name="Node.js" />
    </section>
  );
};
SkillImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Skills
