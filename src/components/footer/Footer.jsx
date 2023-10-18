import './styles.css'
import telegram from "./../../img/icons/telegram.svg";
import github from "./../../img/icons/github.svg";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a href='https://t.me/mikhail_kov_v'>
                <img src={telegram} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='https://github.com/KiroiiKitsune'>
                <img src={github} alt='Link' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>© {currentDate} Kovalenko Mikhail / frontend-dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
