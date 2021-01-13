import "./Travel.css";

export default function Travel({ image, title, text, category }) {

    return(
        <article className="surfing_in_maldives">
            <img src={image} alt="placeholder" />
            <div className="info">
                <p className="category">{category}</p>
                <h1 className="title">{title}</h1>
                <p className="text">{text}</p>
            </div>    
        
        </article>
    )

}