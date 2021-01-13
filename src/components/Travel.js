import "./Travel.css";

export default function Travel({ image, title, text, category }) {

    return(
        <article className="surfing_in_maldives">
            <img src={image} alt="placeholder" />
            <div className="info_travel">
                <p className="category_travel">{category}</p>
                <h1 className="title_travel">{title}</h1>
                <p className="text_travel">{text}</p>
            </div>    
        
        </article>
    )

}