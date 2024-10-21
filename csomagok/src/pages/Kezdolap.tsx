import {Helmet} from 'react-helmet'
export default function Kezdolap() {
    return (
        <>
        <Helmet>
             <title>Kezdőlap</title>
        </Helmet>
        <h1 style={{textAlign: "center"}}>Ez az oldal kezdőlapja. A navigációs sáv használható a csomagok leírásának eléréséhez.</h1>
        </>
    )
}