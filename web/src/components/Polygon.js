import React from 'react'
import { useNavigate } from 'react-router-dom';

const Polygon = (props) => {
    const {item, point, index, color, strokeWidth} = props
    const navigate = useNavigate()
    return (
        <polygon 
            key={index} 
            id={item} 
            points={point} 
            style={{fill: color, stroke: "rgb(150, 198, 229)", strokeWidth: strokeWidth}}
            title="" data-original-title=""
            onClick={() => navigate(`/description?city=${item}`)}
        />
    )
}

export default Polygon