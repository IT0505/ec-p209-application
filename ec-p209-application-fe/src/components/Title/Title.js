import './Title.scss';

function CardDetail(props) {
    const title = props.title;
    const link = props.link;
    return (
        <div className="title-wrap">
            <div className="container">
                <a href={link} className="title-link"><i className="fas fa-angle-left arrow"></i>{title}</a>
                <hr className="title-line"/>
            </div>
        </div>
    );
}

export default CardDetail;