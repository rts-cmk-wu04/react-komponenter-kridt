import "./Service.css";

export default function Service({ logo_delivery, title_delivery, text_delivery, logo_parcels, title_parcels, text_parcels, logo_quality, title_quality, text_quality, logo_customer, title_customer, text_customer }) {

    return(
        <>
        <article className="service_delivery">
            <img src={logo_delivery} alt="placeholder" />
                <div className="info_service">
                    <h1 className="title_service">{title_delivery}</h1>
                    <p className="text">{text_delivery}</p>
                </div>    
        </article>

        <article className="service_parcel">
            <img src={logo_parcels} alt="placeholder" />
                <div className="info_service">
                    <h1 className="title_service">{title_parcels}</h1>
                    <p className="text">{text_parcels}</p>
                </div>    
        </article>
        <article className="service_quality">
            <img src={logo_quality} alt="placeholder" />
                <div className="info_service">
                    <h1 className="title_service">{title_quality}</h1>
                    <p className="text">{text_quality}</p>
                </div>    
        </article>
        <article className="service_customer">
            <img src={logo_customer} alt="placeholder" />
                <div className="info_service">
                    <h1 className="title_service">{title_customer}</h1>
                    <p className="text">{text_customer}</p>
                </div>    
        </article>

        </>
    )

}