import "./SectionTitle.scss";
import bookImg from "../../assets/images/book.png";
import mixerImg from "../../assets/images/mixer.png";
import layersImg from "../../assets/images/layers.png";

function SectionTitle(props) {
  const handleTitleImg = () => {
    let titleImg = null;
    if (props.title === "education") {
      titleImg = bookImg;
    } else if (props.title === "skills") {
      titleImg = mixerImg;
    } else if (props.title === "experience") {
      titleImg = layersImg;
    }
    return <img src={titleImg} alt={props.title}></img>;
  };
  return (
    <div className="section-title">
      <figure className="title-img img">{handleTitleImg()}</figure>
      <h2 className="title-text">{props.title}</h2>
    </div>
  );
}

export default SectionTitle;
