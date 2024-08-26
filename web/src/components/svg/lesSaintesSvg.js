import React from 'react'
import { svgLesSaintesData } from '../../data'
import Polygon from '../Polygon'
import { useNavigate } from 'react-router-dom';

const LesSaintesSvg = (props) => {
    const {indexList} = props
    const selectedList = indexList?.filter(el => el.city === 'terre_de_haut')
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
        viewBox="0 0 3500 3500" 
        xmlSpace="preserve" 
        className="content pointer" style={{}}>
            {svgLesSaintesData.map((item, index) => {
                const selectedList = indexList?.filter(el => el.city === item.class)
                return <Polygon key={index} item={item.class} point={item.point} index={index} color={selectedList[0]?.color} strokeWidth={40}/>
            })}
            
            <path d="M2301.48,2456l6-11.27,59.66,4,17.89-22.54,23.86-21.21,10.61-34.46-2.65-27.18,22.53-20.55,37.78-11.27,38.45-30.49,2-21.87,4-24.52,18.56-21.88,12.6-31.81,30.49.66,9.28,23.86L2607,2220l8.61,21.88,100.09,70.26,31.82,34.46,35.79,66.29h7.29l4,6.62-.67,11.94,5.31,8.61,35.13,13.26,8,11.27-12.59,4.64-9.28,24.52,11.93,13.92-1.33,9.94,6,5.3-.67,6-14.58-4-20.54,11.93,11.26,31.16,9.28,4.64,2,11.26-13.26,17.9,3.32,16.57-46.4-2-4-29.16-90.8-20.55-58.33-14.58-16.57-15.25s-36.46-33.14-39.11-33.14-31.15-12.59-31.15-12.59l-38.44,8.62-9.28,7.95-47.06,1.33-9.95-6.63-30.49-2-12.59-9.94-17.9-2-17.89-15.25-31.16-6.63-7.29-6.62Z" 
            transform="translate(-329.26 -564.53)" 
            className="terre_de_haut"
            
            style={{fill: selectedList[0]?.color, stroke: "rgb(150, 198, 229)", strokeWidth: 40}}
            title="" 
            data-original-title=""
            onClick={() => navigate(`/description?city=terre_de_haut`)}
            ></path>
        </svg>
    )
}

export default LesSaintesSvg