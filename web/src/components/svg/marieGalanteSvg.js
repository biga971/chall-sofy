import React, { useState} from 'react'
import { svgMarieGalanteData } from '../../data'
import { indextoColor } from '../../hook/indexColor'
import Polygon from '../Polygon'

const MarieGalanteSvg = (props) => {
    const {indexList} = props
    return (
        <svg 
        version="1.1" 
        id="svg3027" /* 
        xmlnsCc="http://creativecommons.org/ns#" 
        xmlnsDc="http://purl.org/dc/elements/1.1/"
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape" 
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" 
        xmlnsSvg="http://www.w3.org/2000/svg" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"  */
        x="0px" 
        y="0px" 
        viewBox="0 0 1000 1000" 
        xmlSpace="preserve" 
        className="content pointer" style={{}}>
            <g id="g3029">
                {svgMarieGalanteData.map((item, index) => {
                    const selectedList = indexList?.filter(el => el.city === item.name)
                    return <Polygon key={index} item={item.name} point={item.point} index={index} color={selectedList[0]?.color} strokeWidth={15}/>
                })}
            </g>
        </svg>
    )
}

export default MarieGalanteSvg