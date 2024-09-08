import { useRef } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/emailDark.svg';
import emailDark from '../../assets/emailLight.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume_Lokesh.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero({ contactRef }) {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const borderColor = theme === 'light' ? 'black' : 'white';

  const handleEmailClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of KVMS Lokesh"
          style={{ borderColor }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Venkata Mani Sai Lokesh
          <br />
          Kollapudi
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a onClick={handleEmailClick}>
            <img src={emailIcon} alt="Email icon" />
          </a>
          <a href="https://github.com/kvmslokesh" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/kvmslokesh/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        <strong>Web Developer & Competitive Coder</strong><br />
        Passionate about building user-focused apps and embracing new challenges with a love for learning and collaboration.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
