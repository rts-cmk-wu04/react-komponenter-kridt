import "./Collections.css";

export default function Collections({ img1, title, by, collection1, profilePic, img1_2, title_2, by_2, collection2, profilePic_2, img1_3, title_3, by_3, collection3, profilePic_3 }) {

    return(
        <>
        <article className="Collections1">
            <img src={img1} alt="placeholder" />
            
                <p className="name_collection">{collection1}</p>
                <div className="profilePic">
                    <img className="profilePicImg" src={profilePic} />
                </div>
                <div className="info_collection"> 
                <h1 className="title_collection">{title}</h1>
                <p className="by_collection">By: {by}</p>
                </div>
          
        
        </article>
        <article className="Collections2">
            <img src={img1_2} alt="placeholder" />
            
                <p className="name_collection">{collection2}</p>
                <div className="profilePic">
                    <img className="profilePicImg" src={profilePic_2} />
                </div>
                <div className="info_collection"> 
                <h1 className="title_collection">{title_2}</h1>
                <p className="by_collection">By: {by_2}</p>
                </div>
          
        
        </article>
        <article className="Collections3">
            <img src={img1_3} alt="placeholder" />
            
                <p className="name_collection">{collection3}</p>
                <div className="profilePic">
                    <img className="profilePicImg" src={profilePic_3} />
                </div>
                <div className="info_collection"> 
                <h1 className="title_collection">{title_3}</h1>
                <p className="by_collection">By: {by_3}</p>
                </div>
          
        
        </article>
        </>
    )

}