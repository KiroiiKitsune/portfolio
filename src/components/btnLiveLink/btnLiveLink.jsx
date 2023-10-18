import './styles.css';


const BtnLiveLink = ({liveLink}) => {
  return (
    <a href={liveLink} target="_blunk" rel='noreferrer' className='btn-outline'>
     
      Site
    </a>
  );
};

export default BtnLiveLink;