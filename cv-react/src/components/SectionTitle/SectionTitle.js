import "./SectionTitle.scss";
import bookImg from "../../assets/images/book.png";
import mixerImg from "../../assets/images/mixer.png";
import layersImg from "../../assets/images/layers.png";
import safeImg from "../../assets/images/safe.png";
import heartImg from "../../assets/images/heart.png";
import handshakeImg from "../../assets/images/handshake.png";
import postImg from "../../assets/images/post-it.png";
import envelopeImg from "../../assets/images/envelope.png";

function SectionTitle(props) {
    const TitleImgContent = () => {
        let titleImg = null;
        switch (props.title) {
            case "education":
                titleImg = bookImg;
                break;
            case "skills":
                titleImg = mixerImg;
                break;
            case "experience":
                titleImg = layersImg;
                break;
            case "portfolios":
                titleImg = safeImg;
                break;
            case "interest":
                titleImg = heartImg;
                break;
            case "testimonials":
                titleImg = handshakeImg;
                break;
            case "blog":
                titleImg = postImg;
                break;
            case "contact":
                titleImg = envelopeImg;
                break;
            default:
                titleImg = null;
        }
        return <img src={titleImg} alt={props.title}></img>;
    };
    return (
        <div className="section-title">
            <figure className="title-img img">{TitleImgContent()}</figure>
            <h2 className="title-text">{props.title}</h2>
        </div>
    );
}

export default SectionTitle;
