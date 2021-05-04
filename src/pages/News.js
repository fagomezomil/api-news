import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card";
import '../components/news.css';


export default function News() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('entertainment');

    useEffect(() => {
        getNews();
    }, [category]);

    const getNews = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?apiKey=bb4af6c6f5c34c9ea5feb50daa586299&country=ar&category=${category}`
        );
        setArticles(response.data.articles);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    };

    return (

<div>
    <div className="contenedor-categorias">
    <div className="container  pt-4">
        <div className="row d-flex align-items-center" >
            <div className="col-md-6 t-seccion">Elegí el tipo de data que querés:</div>
            <div className="col-md-6 text-center">
                <select class="form-select" multiple  onChange={handleChange}>
                <option className="opcion" value="business">Negocios</option>
                <option value="health">Salud</option>
                <option value="general">General</option>
                </select>
            </div>
            
        </div>
    </div>
    </div>
        <div className="container">
        <div className="row justify-content-between">
                
            {articles.map((art) => (
                
                    <Card
                        img={art.urlToImage}
                        title={art.title}
                        descrip={art.description}
                        content={art.content}
                        date={art.publishedAt}
                        author={art.author}
                    />
                
            ))}
        </div>
        </div>
        </div>

    )
}
