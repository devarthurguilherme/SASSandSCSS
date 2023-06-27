import image from '../img/Arthur_Guilherme_front_end_developer.jpg';

import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../sass/components/sidebar.sass'

const SideBar = () => {
    return(
        <aside id="side-bar">
            <div className="side-bar__container">
                <div className="container_img-box">
                </div>
                <p className="container__title">Front-End</p>
                <SocialNetworks />
                <InformationContainer />
                <a className="btn"href="#">Curriculum Download</a>
            </div>
        </aside>
    );
};

export default SideBar;