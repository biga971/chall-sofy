import React from 'react'
import '../css/Card.css'
import GuadeloupeSvg from './svg/guadeloupeSvg'
import LaDesiradeSvg from './svg/laDésiradeSvg'
import LesSaintesSvg from './svg/lesSaintesSvg'
import MarieGalanteSvg from './svg/marieGalanteSvg'
import SaintMartinSvg from './svg/saintMartinSvg'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const { indexList, colorList } = props
    const [selectedCity, setSelectedCity] = React.useState('deshaies')
    const navigate = useNavigate()
    return (
        <div className="card">
            <h4 className="h4">Indice Atmosphérique</h4>
            <div className="container">
                <div className="boxLeft">
                    <div className="guadeloupe">
                        <GuadeloupeSvg indexList={colorList}/>
                    </div>
                    
                </div>
                <div className="boxRight">
                    <div className="other">
                        <LaDesiradeSvg indexList={colorList}/>
                    </div>
                    <div className="other">
                        <LesSaintesSvg indexList={colorList}/>
                    </div>
                    <div className="other">
                        <MarieGalanteSvg indexList={colorList} />
                    </div>
                    <div className="other">
                        <SaintMartinSvg indexList={colorList}/>
                    </div>
                </div>
            </div>

            <div class="custom-select">
                <select onChange={(e) => setSelectedCity(e.target.value)}>
                    {indexList?.map((item, index) => {
                        return <option key={index} value={item.city}>{item.city}</option>
                    })}
                </select>
            </div>
            <div>
                <a href='' className="button" onClick={() => navigate(`/description?city=${selectedCity}`)}>
                    <span className="more">Voir plus</span>
                </a>
            </div>
        </div>
    )
}

export default Card