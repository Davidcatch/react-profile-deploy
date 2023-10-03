import ParticlesBg from 'particles-bg';
import { BsInstagram, BsGithub, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import Profile from './img/New_Profile.JPG';
import './App.css';

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img
              src={Profile}
              alt="Profile"
              className="avatar"
            />
            <div className="bg_content rd_12 p_8">
              <h1>Raihan Sastra Wibyanto</h1>
              <p>Student</p>
              <p>Institut Teknologi Telkom Purwokerto</p>
            </div>
          </div>
          <div className="mt-16">
            <a
              href="https://www.instagram.com/raihansastra20/"
              className="btn_action bg_content"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.tiktok.com/@raihansastra35"
              className="btn_action bg_content"
            >
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.youtube.com/channel/UC1x2pY3Dj2X5YHHOW_gt3-g"
              className="btn_action bg_content"
            >
              <BsYoutube />
              <span>Youtube</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://github.com/Davidcatch?tab=repositories"
              className="btn_action bg_content"
            >
              <BsGithub />
              <span>GitHub</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.linkedin.com/in/raihan-sastra-wibyanto-209b72287/"
              className="btn_action bg_content"
            >
              <BsLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg
        type="thick"
        bg={true}
      />
    </div>
  );
}

export default App;
