import { useState } from 'react'
import './PortfoliosCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import { portfoliosData } from '../../utils/DataConfig'

function PortfoliosCard() {
    const [tab, setTab] = useState("all");
    const [viewAll, setViewAll] = useState(false);

    const imgContents = () => {
        let items = [];
        portfoliosData.forEach((data, index1) => {
            if(tab === data.type || tab === 'all') {
                items.push(
                    <div className="tab-content" key={index1} style={tab === 'all' && index1 !== 0 && !viewAll ? {display: 'none'} : {display: 'grid'} } >
                        {data.imgs.map((img, index2) => 
                        <figure className={data.imgs.length === 3 && index2 === 0 ? "modal img big" : "modal img"} key={index2}>
                            <img src={img.src} alt={img.alt} className='portfolios-img'/>
                            <figcaption className="caption">
                                <h6 className="title">{img.title}<b>Image</b></h6>
                                <p className="text">{img.text}</p>
                            </figcaption>
                        </figure>)}
                    </div>
                )
            }
        });
        return items;
    }
    const navContents = () => {
        const items =
        <>
            <button className={tab === "all" ? "tabLink active" : "tabLink"} onClick={() => setTab("all")}>all</button>
            {portfoliosData.map((data, index) => 
                <button key={index} className={tab === data.type ? "tabLink active" : "tabLink"} onClick={() => setTab(data.type)}>
                    {data.type}
                </button>
            )}
        </>
        return items
    }
    return (
        <div id="portfolios" className="portfolios-card section">
            <div className="container">
                <div className="portfolios-inner">
                    <SectionTitle title="portfolios"/> 
                    <div className="portfolios-nav">
                        {navContents()}
                    </div>
                    <div className="portfolios-content">
                        {imgContents()}
                        {tab === 'all' &&
                            <button className="view-btn" onClick={() => {viewAll ? setViewAll(false) : setViewAll(true)}}>
                                <i className={viewAll ? "fas fa-arrow-up" : "fas fa-plus"}></i>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfoliosCard;