function SkillListLink({ src, skill, link }) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.skillLink}>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
      </a>
    );
  }
  
  export default SkillListLink;
  