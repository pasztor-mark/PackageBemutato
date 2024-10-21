import { Helmet } from 'react-helmet'
import { FaNpm } from 'react-icons/fa';
import { FaPaperclip, FaArrowDown, FaCircleQuestion, FaGithub } from 'react-icons/fa6';
import { FaReact } from "react-icons/fa6";
export default function HelmetBemutatas() {
    return (
        <>
            <Helmet>
                <title>Helmet</title>
            </Helmet>
            <div style={{width: "90vw", margin: "auto"}}>
                <h1><FaReact /> React Helmet</h1>
                <hr />
                <h2><FaPaperclip/> Leírás</h2>
                <ul>
                    <li>Egyoldalas React-alkalmazáshoz tud oldalanként head adatokat hozzárendelni.</li>
                    <li>A Helmet komponens tárolja a metaadatokat.</li>
                    <li>Hasonlít a HTML-ben használt head taghez</li>
                </ul>
                <h2><FaArrowDown/> Telepítés</h2>
                <code>npm install --save react-helmet</code>
                <h2><FaCircleQuestion /> Használat</h2>
                <ul>
                    <ol>
                        <li>
                            <code>import {Helmet} from 'react-helmet'</code>
                        </li>
                        <li>
                            <code>&lt;Helmet&gt;</code> tagbe a head elemek elhelyezése (pl. meta, title)
                        </li>
                    </ol>
                </ul>
                <h2>Elérhetőség</h2>
                <ul>
                    <li>
                        <FaNpm/><a href="https://www.npmjs.com/package/react-helmet">NPM package</a>
                    </li>
                    <li>
                        <FaGithub/><a href="https://github.com/nfl/react-helmet">Github</a>
                    </li>
                </ul>
            </div>
        </>
    )
}