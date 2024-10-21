import { Helmet } from 'react-helmet'
import { FaNpm } from 'react-icons/fa';
import { FaPaperclip, FaArrowDown, FaCircleQuestion, FaGithub } from 'react-icons/fa6';
import { FaReact } from "react-icons/fa6";
export default function RouterBemutatas() {
    return (
        <>
            <Helmet>
                <title>Router</title>
            </Helmet>
            <div style={{width: "90vw", margin: "auto"}}>
                <h1><FaReact size={42}/> React Router</h1>
                <hr />
                <h2><FaPaperclip/> Leírás</h2>
                <ul>
                    <li>Egyoldalas React-alkalmazáshoz tud oldalak közötti navigációt biztosítani.</li>
                    <li>Az App.tsx fájlban definiáljuk az elérési pontokat.</li>
                    
                </ul>
                <h2><FaArrowDown/> Telepítés</h2>
                <code>npm install react-router-dom</code>
                <h2><FaCircleQuestion /> Használat</h2>
                <ul>
                    <ol>
                        <li>
                            <code>import  &#123;BrowserRouter, Routes, Route&#125; from 'react-router-dom'</code>
                        </li>
                        <li>
                            <code>
                                &lt;BrowserRouter&gt; <br />
                                &lt;Routes&gt; <br />
                                &lt;Route path="path" element=&#123;&lt;RouteElement/&gt;&#125;&gt; <br />
                                &lt;/Routes&gt; <br />
                                &lt;/BrowserRouter&gt; <br />
                                </code> tagbe a head elemek elhelyezése (pl. meta, title)
                        </li>
                    </ol>
                </ul>
                <h2>Elérhetőség</h2>
                <ul>
                    <li>
                        <FaNpm/><a href="https://www.npmjs.com/package/react-router-dom">NPM package</a>
                    </li>
                </ul>
            </div>
        </>
    )
}