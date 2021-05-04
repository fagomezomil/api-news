import './card.css';

export default function Card(props) {
    return (
        <div className="col-3 py-5">
            <div className="card fondo">
                <img 
                src={props.img} 
                className="card-img-top" 
                alt="..." 
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>

                    <p className="card-text">{props.descrip}</p>
                    <p className="card-text">Publicado el: {props.date}</p>
                    <button className="btn btn-primary">
                        Ver nota
                    </button>
                </div>
            </div>
        </div>
    );
}
