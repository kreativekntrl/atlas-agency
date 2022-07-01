import {SocialMediaIconsReact} from 'social-media-icons-react';
const Footer = () => {
    return(
        <div>
            <p>lets get in contact:</p>
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
        </div>
    );
}
export default Footer;