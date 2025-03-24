import { Link } from "react-router-dom"
import "../assets/styles/startside.scss"

export default function Bookfront(){
    return(
        <>
        <Link /*Legg inn link til aktuell bok her*/ className="bookback">
            <article>
            <h3>Tittel</h3>
            <p>Ola Nordman</p>
        </article>
        </Link>
        
        <Link /*Legg inn link til aktuell bok her*/ className="bookback">
            <article>
            <h3>Tittel</h3>
            <p>Ola Nordman</p>
        </article>
        </Link>

        <Link /*Legg inn link til aktuell bok her*/ className="bookback">
            <article>
            <h3>Tittel</h3>
            <p>Ola Nordman</p>
        </article>
        </Link>
        <Link /*Legg inn link til aktuell bok her*/ className="bookback">
            <article>
            <h3>Tittel</h3>
            <p>Ola Nordman</p>
        </article>
        </Link>
        
        <Link /*Legg inn link til aktuell bok her*/ className="bookback">
            <article>
            <h3>Tittel</h3>
            <p>Ola Nordman</p>
        </article>
        </Link>
        </>
    )
}