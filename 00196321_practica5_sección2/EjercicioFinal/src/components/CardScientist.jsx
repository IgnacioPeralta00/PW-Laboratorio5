import "../Styles/CardScientist.css";

const CardScientist = ({ name, image, profession, awards, discoveries }) => {
    return (
        <div className="card-scientist">
            <h2 className="scientist-name">{name}</h2>
            <div className="card-content">
                <img src={image} alt={`Retrato de ${name}`} className="card-image" />
                <ul className="card-info">
                    <li>
                        <strong>Profesión</strong>
                        <span>{profession}</span>
                    </li>
                    <li>
                        <strong>Premios</strong>
                        <span>{awards}</span>
                    </li>
                    <li>
                        <strong>Contribución</strong>
                        <span>{discoveries}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CardScientist;