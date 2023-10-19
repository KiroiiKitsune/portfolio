import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/btnGitHub';
import BtnLiveLink from '../components/btnLiveLink/btnLiveLink';
import { projects } from '../heplers/projectList';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  console.log(project.liveLink);

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className='project-details__cover'
          />

          <div className='project-details__desc'>
            <p>Skills: {project.skills}</p>
          </div>
          <>
            <BtnGitHub link={project.gitHub} />
            <BtnLiveLink liveLink={project.liveLink} />
          </>
        </div>
      </div>
    </main>
  );
};

export default Project;
