import React from 'react'
import { useNavigate } from 'react-router-dom'

const LaDesiradeSvg = (props) => {
    const {indexList} = props
    const selectedList = indexList?.filter(el => el.city === 'la_desirade')
    const navigate = useNavigate()
    return (
        <svg 
        version="1.1" 
        id="svg3027" 
        /* xmlnsCc="http://creativecommons.org/ns#" 
        xmlnsDc="http://purl.org/dc/elements/1.1/" 
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape" 
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" 
        xmlnsSvg="http://www.w3.org/2000/svg" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" */ 
        x="0px" 
        y="0px" 
        viewBox="0 0 1000 1000" 
        xmlSpace="preserve" 
        className="content pointer" style={{}}>
            <g id="g3029">
                <path 
                    id="la_desirade" 
                    d="M466.2,430.1l18.5,1.6l35.1-42.3l18,4.2L683,317.4l90.3-63.4l37,1l31.6-44.9
                    l71.1-17.2l30,46.2l37.3,125.5l-62,43.9l-176,69.3L528.7,638.7l-258.5,66.5l-223,102l-27.5-11.2l6-94.3L97.3,615l111.2-22.6
                    l41.4-62.7l74-7.6l70.3-29.8L466.2,430.1z" 
                    style={{fill: selectedList[0]?.color, stroke: "rgb(150, 198, 229)"}}
                    title="" 
                    data-original-title=""
                    onClick={() => navigate(`/description?city=la_desirade`)}
                    >
                </path>
            </g>
        </svg>
    )
}

export default LaDesiradeSvg