import { Helmet } from 'react-helmet'
import { FaNpm } from 'react-icons/fa';
import { FaPaperclip, FaArrowDown, FaCircleQuestion, FaBars } from 'react-icons/fa6';
import { FaReact } from "react-icons/fa6";

export default function Ikonok() {
    return (
        <>
            <>
                <Helmet>
                    <title>Ikonok</title>
                </Helmet>
                <div style={{ width: "90vw", margin: "auto" }}>
                    <h1><FaReact /> React Icons</h1>
                    <hr />
                    <h2><FaPaperclip /> Leírás</h2>
                    <ul>
                        <li>A React könyvtárhoz kifejlesztett ikongyűjtemény</li>
                        <li>Az ikonok JSX elem formában importálhatók.</li>
                        <li>Számos beépített stílusozási attribútummal rendelkezik.</li>
                    </ul>
                    <h2><FaArrowDown /> Telepítés</h2>
                    <code>npm install react-icons</code>
                    <h2><FaCircleQuestion /> Használat</h2>
                    <ul>
                        <ol>
                            <li>
                                Az oldalon megtalálható ikonok közül szabadon válogathatunk
                            </li>
                            <li>
                                A kiválasztott ikont az oldalon feltűntetett utasítások szerint importáljuk.
                            </li>
                            <li>
                                Bármely elembe implementálható az ikon.
                            </li>
                        </ol>
                    </ul>
                    <h2>Elérhetőség</h2>
                    <ul>
                        <li>
                            <FaNpm /><a href="https://www.npmjs.com/package/react-icons">NPM package</a>
                        </li>
                        <li>
                            <FaBars /><a href="https://react-icons.github.io/react-icons/">Dokumentáció/ikonlista</a>
                        </li>
                    </ul>
                </div>
            </>
        </>
    )
}