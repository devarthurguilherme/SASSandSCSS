import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../sass/components/socialnetworks.sass';

const socialNetworks = [
    { name: "Linkedin", icon: <FaLinkedinIn/>, link: ""},
    { name: "GitHub", icon: <FaGithub/>, link: ""},
    { name: "Instagram", icon: <FaInstagram/>, link: ""}
]

const SocialNetworks = () => {
    return <section id="social-networks">
        <h1>Social Networks here</h1>
        {socialNetworks.map((network) => {
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        })} 
    </section>
    
};

export default SocialNetworks;