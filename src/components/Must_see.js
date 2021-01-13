import "./Must_see.css";

export default function Must_see({ image_must, title_must, text_must, logo_must }) {

    return(
        <article className="must_see">
            <div className="background">
                <img src={image_must} alt="sea" />
            </div>
            <div className="logo">
                <img src={logo_must} alt="logo" />
                <p>the new york times</p>
            </div>
        <div className="info_must">    
            <h1 className="text_must">{title_must}</h1>
            <p>{text_must}</p>
        </div>
        </article>
    )

}