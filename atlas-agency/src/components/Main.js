import {SocialMediaIconsReact} from 'social-media-icons-react';

const Main = () => {
    return(
        <div>
            <div className="company-stats-container" style={{lineHeight: ".8", textAlign: "left", backgroundColor: "white", padding: "20px", marginBottom: "10px", width: "100vw"}}>
                <div className="loco" style={{paddingBottom: "5px"}}>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="map" iconColor="rgba(52,198,234,1)" backgroundColor="rgba(26,166,233,0)" iconSize="1" roundness="50%" url="#" size="30" />
                </div>
                <div className="stats">
                <hr style={{width: "30px", height: "2px", color: "black"}}/>
                <p className="local-employees">Local Employees: </p>
                <p className="total-employees">Total Employees: </p>
                <p className="founded-in">Founded In: </p>
                </div>
            </div>
            <div className="content-container" style={{textAlign: "left", backgroundColor: "white", padding: "15px", borderRadius: "8px", border: "2px black solid", margin: "16px"}}>
                <h2>Welcome to Atlas Agency,</h2>
                <hr style={{width: "30px", height: "2px", color: "black"}}/>
                <p>We are the home of leading ad technology in Los Angeles, Ca.</p>
                <p>Atlas Agency is a company that is on the cutting edge of computer science and media capabilities. We strive to provide our clients with tools to maxamize their advertising and media presence.</p>
            </div>
        </div>
    );
}
export default Main;