import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/alumni.png';
import freshBurger from '../../assets/logo.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/kvmslokesh/vvitcon"
          h3="Vvit Connect"
          p="Alumni Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/kvmslokesh/l-sbuzzz"
          h3="L's Buzz"
          p="Chat App(React+Firebase)"
        />
        
        <ProjectCard
          src={fitLift}
          link="https://github.com/kvmslokesh/RuralCleanlinessManagementSystem"
          h3="Rural CMS"
          p="A PHP portal"
        />
      </div>
    </section>
  );
}

export default Projects;