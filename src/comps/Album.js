import { useState } from "react";

const Albums = ({ artist, image, album, year, genre, sales, desc, info, id }) => {
    const [readMore, setReadMore ] = useState(false);

    return (
        <div className="card album">
            <h1 className="number">{id}</h1>
            <img src={image} alt="Thiller" />
            <h1><strong>Artist: </strong>{artist}</h1>
            <h2><strong>Album: </strong>{album}</h2>
            <h2><strong>Year: </strong>{year}</h2>
            <h2><strong>Genre: </strong>{genre}</h2>
            <h2><strong>Sales: </strong>{sales}</h2>
            <p>
                <strong>Description: </strong>
                    {readMore ? desc : `${desc.substring(0, 85)}...`}&nbsp;&nbsp;
                    <button className="btn-desc" onClick={() => setReadMore(!readMore)}>{readMore ? "SHOW LESS" : "READ MORE"}</button>
            </p>
            <button className="btn btn-danger"><a href={info}>MORE INFO</a></button>
        </div>
    )
}

export default Albums;