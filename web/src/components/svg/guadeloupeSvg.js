import React from 'react'
import { svgGuadeloupeData } from '../../data/index'
import Polygon from '../Polygon'
import { useNavigate } from 'react-router-dom';

const GuadeloupeSvg = (props) => {
    const {indexList} = props
    const SaintRose = indexList?.filter(el => el.city === 'sainte_rose')
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
            className="content pointer" 
            style={{}}>
                <g id="g3029">
                    {svgGuadeloupeData.map((item, index) => {
                        
                        const selectedList = indexList?.filter(el => el.city === item.name)
                        return <Polygon key={index} item={item.name} point={item.point} index={index} color={selectedList[0]?.color} strokeWidth={3}/>
                        
                    })}
                    <path id="sainte_rose" d="M322.1,389.3l-21.7,4.1l-16.2-5.4l-39.4,5.1l-16.3,14.8L216.4,446l2.3,16.7
                        l-20.9,27.1L161.7,506l-22-4.8l-24.4-30.5l-24.8-12.5L86,448l1.1-16.6l-2.3-16.8L74.4,402l8.8-43.6l-1-17.1l-9.4-13.7l0.2-27.5
                        l22.8-1.5l13.5-9.5l26.1,11.9l22.9,25.4l22.5,5.1l44.2,24.5l34,0.7l8.5,14.1l25.7,12.6l17-2.7l14.5-0.9l3.7,3.3L322.1,389.3z
                        M350.6,312.8l-5.6-1.1l-6.2,2.2l7-12.7l8.1-0.7l7.4,4.4l0.1,5.5l-2.2,1.8L350.6,312.8z" 
                        style={{fill: SaintRose[0].color, stroke: "rgb(150, 198, 229)"}}
                        title="" 
                        data-original-title=""
                        onClick={() => navigate(`/description?city=sainte_rose`)}
                        >
                    </path> 
                </g>
            </svg>
    )
}

export default GuadeloupeSvg