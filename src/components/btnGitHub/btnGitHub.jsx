import './styles.css';
import gitHubIcon from './gitHub-black.svg';

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blunk" rel='noreferrer' className='btn-outline'>
      <img src={gitHubIcon} alt='GitHub repo' />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
