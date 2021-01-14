import "./Latest_news.css";

export default function Latest_news({ image_news_nature, title_news_nature, text_news_nature }) {

    return(
        <article className="latest_news">
            <div className="lates_news_header">
            <h1>latest news</h1>
            </div>
            <section className="newsCard">
                <div className="photo_news">
                    <img src={image_news_nature} alt="news"/>
                </div>

                <div className="info_news">
                    <h1>{title_news_nature}</h1>
                    <p>{text_news_nature}</p>
                </div>
            </section>
        </article>
    )

}