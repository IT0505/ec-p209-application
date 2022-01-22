import { useState } from "react";
import "./PortfoliosCard.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import { portfoliosData } from "../../utils/DataConfig";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function PortfoliosCard() {
    const [tab, setTab] = useState("all");
    const [viewAll, setViewAll] = useState(false);
    const [lightbox, setLightbox] = useState({
        photoIndex: 0,
        isOpen: false,
        images: portfoliosData[0].imgs,
    });

    const imgContents = () => {
        let items = [];
        portfoliosData.forEach((data, index1) => {
            if (tab === data.type || tab === "all") {
                items.push(
                    <div
                        className="tab-content"
                        key={index1}
                        style={
                            tab === "all" && index1 !== 0 && !viewAll
                                ? { display: "none" }
                                : { display: "grid" }
                        }
                    >
                        {data.imgs.map((img, index2) => (
                            <figure
                                className={
                                    data.imgs.length === 3 && index2 === 0
                                        ? "modal img big animate__animated animate__fadeInLeft"
                                        : data.imgs.length === 3 && index2 !== 0
                                        ? "modal img animate__animated animate__fadeInRight"
                                        : index2 === 0 ||
                                          index2 === 1 ||
                                          index2 === 3
                                        ? "modal img animate__animated animate__fadeInLeft"
                                        : "modal img animate__animated animate__fadeInRight"
                                }
                                onClick={() =>
                                    setLightbox({
                                        ...lightbox,
                                        photoIndex: index2,
                                        isOpen: true,
                                        images: data.imgs,
                                    })
                                }
                                key={index2}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="portfolios-img"
                                />
                                <figcaption className="caption">
                                    <h6 className="title">
                                        {img.title}
                                        <b>Image</b>
                                    </h6>
                                    <p className="text">{img.text}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                );
            }
        });
        return items;
    };
    const navContents = () => {
        const items = (
            <>
                <button
                    className={tab === "all" ? "tabLink active" : "tabLink"}
                    onClick={() => setTab("all")}
                >
                    all
                </button>
                {portfoliosData.map((data, index) => (
                    <button
                        key={index}
                        className={
                            tab === data.type ? "tabLink active" : "tabLink"
                        }
                        onClick={() => setTab(data.type)}
                    >
                        {data.type}
                    </button>
                ))}
            </>
        );
        return items;
    };
    return (
        <div id="portfolios" className="portfolios-card section">
            <div className="container">
                <div className="portfolios-inner">
                    <SectionTitle title="portfolios" />
                    <div className="portfolios-nav">{navContents()}</div>
                    <div className="portfolios-content">
                        {imgContents()}
                        {tab === "all" && (
                            <button
                                className="view-btn"
                                onClick={() => {
                                    viewAll
                                        ? setViewAll(false)
                                        : setViewAll(true);
                                }}
                            >
                                <i
                                    className={
                                        viewAll
                                            ? "fas fa-arrow-up"
                                            : "fas fa-plus"
                                    }
                                ></i>
                            </button>
                        )}
                    </div>

                    {lightbox.isOpen && (
                        <Lightbox
                            mainSrc={lightbox.images[lightbox.photoIndex].src}
                            nextSrc={
                                lightbox.images[
                                    (lightbox.photoIndex + 1) %
                                        lightbox.images.length
                                ].src
                            }
                            prevSrc={
                                lightbox.images[
                                    (lightbox.photoIndex +
                                        lightbox.images.length -
                                        1) %
                                        lightbox.images.length
                                ].src
                            }
                            onCloseRequest={() =>
                                setLightbox({ ...lightbox, isOpen: false })
                            }
                            onMovePrevRequest={() =>
                                setLightbox({
                                    ...lightbox,
                                    photoIndex:
                                        (lightbox.photoIndex +
                                            lightbox.images.length -
                                            1) %
                                        lightbox.images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                setLightbox({
                                    ...lightbox,
                                    photoIndex:
                                        (lightbox.photoIndex + 1) %
                                        lightbox.images.length,
                                })
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfoliosCard;
