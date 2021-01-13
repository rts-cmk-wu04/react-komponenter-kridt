import "./Outdoor.css";

export default function Outdoor({ image, img1, img2, img3, title, text, category }) {

    return(
        <article className="outdoor">
            <div className="bigPhoto_outdoor">
            <img src={image} alt="placeholder" />
            </div>
            <div className="info_outdoor">
                <p className="category_outdoor">{category}</p>
                <h1 className="title_outdoor">{title}</h1>
                <p className="text_outdoor">{text}</p>
                    <div className="smallPhotos_outdoor">
                        <img src={img1} alt="placeholder" />
                        <img src={img2} alt="placeholder" />
                        <img src={img3} alt="placeholder" />
                    </div>
            </div>    
        
        </article>
    )

}