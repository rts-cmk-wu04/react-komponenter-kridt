import "./Collections.css";

export default function Collections({ img1, title, by, collection1, profilePic }) {

    return(
        <article className="Collections1">
            <img src={img1} alt="placeholder" />
            <div className="info_collection">
                <p className="name_collection">{collection1}</p>
                <img className="profilePic" src={profilePic} />
                <h1 className="title_collection">{title}</h1>
                <p className="by_collection">{by}</p>
            </div>    
        
        </article>
    )

}