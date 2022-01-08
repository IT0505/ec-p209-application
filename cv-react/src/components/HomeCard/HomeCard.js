import "./HomeCard.scss";
import MyFormat from "../../libs/MyFormat";
import { profileInfoData } from "../../utils/data-config";

function HomeCard(props) {
  const profileInfo = profileInfoData;
  return (
    <div id="home" className="home-card section">
      <div className="container">
        <div className="home-inner">
          <div className="home-content">
            <div className="info-header">
              <h3 className="name">{profileInfo.name}</h3>
              <h6 className="job">{profileInfo.job}</h6>
            </div>
            <div className="info-body">
              <ul className="info-list">
                <li className="info-content">
                  <i className="material-icons icon">email</i>
                  {profileInfo.email}
                </li>
                <li className="info-content">
                  <i className="material-icons icon">language</i>
                  {profileInfo.website}
                </li>
                <li className="info-content">
                  <i className="fa fa-skype icon"></i>
                  {profileInfo.skype}
                </li>
                <li className="info-content">
                  <i className="material-icons icon">phone</i>
                  {MyFormat.getPhoneNumber(profileInfo.phone)}
                </li>
                <li className="info-content">
                  <i className="material-icons icon">place</i>
                  {profileInfo.address}
                </li>
              </ul>
            </div>
            <div className="info-link">
              <a href="/" className="fa fa-facebook icon">
                {" "}
              </a>
              <a href="/" className="fa fa-twitter icon">
                {" "}
              </a>
              <a href="/" className="fa fa-google icon">
                {" "}
              </a>
              <a href="/" className="fa fa-linkedin icon">
                {" "}
              </a>
              <a href="/" className="fa fa-rss icon">
                {" "}
              </a>
            </div>
          </div>
          <figure className="home-avatar img">
            <span className="slant"></span>
            <span className="add-button">
              <i className="material-icons icon">add</i>
            </span>
            <img src={profileInfo.avatarUrl} alt="hacker-avt" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
