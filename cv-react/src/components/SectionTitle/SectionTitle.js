import './SectionTitle.scss'
import bookImg from '../../assets/images/book.png'
import mixerImg from '../../assets/images/mixer.png'
import layersImg from '../../assets/images/layers.png'
import safeImg from '../../assets/images/safe.png'
import heartImg from '../../assets/images/heart.png'
import handshakeImg from '../../assets/images/handshake.png'
import postImg from '../../assets/images/post-it.png'
import envelopeImg from '../../assets/images/envelope.png'

function SectionTitle(props) {
    const TitleImgContent = () => {
        let titleImg = null;
        if(props.title==='education') {
            titleImg = bookImg;
        } else
        if(props.title==='skills') {
            titleImg = mixerImg;
        } else
        if(props.title==='experience') {
            titleImg = layersImg;
        } else
        if(props.title==='portfolios') {
            titleImg = safeImg;
        } else
        if(props.title==='interest') {
            titleImg = heartImg;
        } else
        if(props.title==='testimonials') {
            titleImg = handshakeImg;
        } else
        if(props.title==='blog') {
            titleImg = postImg;
        } else
        if(props.title==='contact') {
            titleImg = envelopeImg;
        }
        return <img src={titleImg} alt={props.title}></img>
    }
    return (
        <div className="section-title">
            <figure className="title-img img">
                {TitleImgContent()}
            </figure>
            <h2 className="title-text">{props.title}</h2>
        </div>
    )
}

export default SectionTitle;