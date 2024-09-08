import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <a href='https://drive.google.com/file/d/15W4V7X4AeuUS2xEEuVDzfsEXIym3kfX9/view?usp=sharing' target='_blank'><SkillList src={checkMarkIcon} skill="Java" /></a>
        <a href='https://www.coursera.org/account/accomplishments/verify/V48QR90GYVLU' target='_blank'><SkillList src={checkMarkIcon} skill="Python" /></a>
        <a href='https://www.coursera.org/account/accomplishments/verify/ZIOQ3OOL0ZQ3' target='_blank'><SkillList src={checkMarkIcon} skill="HTML" /></a>
        <a href='https://www.coursera.org/account/accomplishments/verify/ZIOQ3OOL0ZQ3' target='_blank'><SkillList src={checkMarkIcon} skill="CSS" /></a>
        <a href='https://www.coursera.org/account/accomplishments/verify/LD9OC4XR1EAB' target='_blank'><SkillList src={checkMarkIcon} skill="JavaScript" /></a>
      </div>
      <hr />
      <div className={styles.skillList}>
      <a href='https://www.coursera.org/account/accomplishments/professional-cert/U0OG75LY8R1K' target='_blank'><SkillList src={checkMarkIcon} skill="React.js" /></a>
      <a href='https://courses.edx.org/certificates/dd0c6674e8b4493fa5af5ff872c1d6fa' target='_blank'><SkillList src={checkMarkIcon} skill="Node.js" /></a>
      <a href='https://courses.edx.org/certificates/dd0c6674e8b4493fa5af5ff872c1d6fa' target='_blank'><SkillList src={checkMarkIcon} skill="Express.js" /></a>
        <a href='https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/414724b5-4f7d-407d-aa0a-0ae5253a6922-lokesh-kvms-8263fb74-e2e5-4ca5-9999-b944b886db9a-certificate.pdf' target='_blank'><SkillList src={checkMarkIcon} skill="MongoDB" /></a>
        <a href='https://www.coursera.org/account/accomplishments/verify/4PTGMM3NUUV2' target='_blank'><SkillList src={checkMarkIcon} skill="Git" /></a>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <a href='https://www.hackerrank.com/certificates/04a4278dda9c' target='_blank'><SkillList src={checkMarkIcon} skill="SQL" /></a>
        <a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_6iKCmGa5CRHuuHKoR_1723711520413_completion_certificate.pdf' target='_blank'><SkillList src={checkMarkIcon} skill="PowerBI"/></a>
        <a href='https://skillwallet.smartinternz.com/internships/salesforce_certificates/966b6dfb6b0819cc10644bea3115cf20' target='_blank'><SkillList src={checkMarkIcon} skill="Salesforce" /></a>
        
      </div>
    </section>
  );
}

export default Skills;
