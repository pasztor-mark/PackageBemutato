
import {Helmet} from 'react-helmet'
export default function NotFound() {
    return (
        <>
        <Helmet>
             <title>404</title>
        </Helmet>
        <h1 style={{textAlign: "center"}}>Nem találjuk ezt az oldalt...</h1>
        <a style={{textAlign: "center"}} href="/">Vissza a kezdőlapra</a>
        </>
    )
}