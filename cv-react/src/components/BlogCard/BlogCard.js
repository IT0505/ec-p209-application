import './BlogCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import { blogData } from '../../utils/DataConfig'

function BlogCard() {

    const blogView = () => {
        return (
            <div className="blog-content">
                {blogData.map((data, index) =>
                    <div className={index%2 === 0 ? "content-wrap" : "content-wrap odd"} key={index}>

                        <figure className="content-image img">
                            <img src={data.img.src} alt='blog' className="blog-img"></img>
                            <figcaption className="content-caption">
                                <p className="caption-txt">
                                    <i className="fas fa-user icon"></i>{data.img.caption.author}
                                    <i className="far fa-clock icon"></i>{data.img.caption.time}
                                    <i className="fas fa-comments icon"></i>{data.img.caption.cmt}
                                </p>
                            </figcaption>
                        </figure>
                        <div className="content-text">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a className="link" href="/">Frontend</a></li>
                                <li className="breadcrumb-item"><a className="link" href="/">Dev</a></li>
                                <li className="breadcrumb-item">Shortcut</li>
                            </ul>
                            <h3 className="title">{data.title}</h3>
                            <p className="content">{data.content}</p>
                            <a className="forward" href={data.forward}>Read More</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="blog-card section" id="blog">
            <div className="container">
                <div className="blog-inner">
                    <SectionTitle title="blog" />
                    {blogView()}
                </div>
            </div>
        </div>
    )
}

export default BlogCard;