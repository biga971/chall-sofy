import React, {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"
import '../css/Card.css'
import Navbar from '../components/Navbar'
import GuadeloupeSvg from '../components/svg/guadeloupeSvg'
import LaDesiradeSvg from '../components/svg/laDésiradeSvg'
import LesSaintesSvg from '../components/svg/lesSaintesSvg'
import MarieGalanteSvg from '../components/svg/marieGalanteSvg'
import SaintMartinSvg from '../components/svg/saintMartinSvg'
import { indextoColor } from '../hook/indexColor'

const Description = () => {
    const [queryParameters] = useSearchParams()

    const [indexList, setIndexList] = useState([])
    const [colorList, setColorList] = useState([])
    const [selectedCity, setSelectedCity] = useState({})
    const [setUp, setSetUp] = useState(false)

    useEffect(() => {
        const getIndiceList = async () => {
            const response = await fetch('http://localhost:3333/api/air-qualities')
            const data = await response.json()
            setIndexList(data)
            setColorList(List(data,  queryParameters.get("city") ))
            setSelectedCity(data.filter(d => d.city === queryParameters.get("city"))[0])
            setSetUp(true)
        }
        getIndiceList() 
    }, [])

    if(setUp) { 
        return (
            <>
                <Navbar />
                <div className="page">
                <div className="card">
            <h4 className="h4">Indice Atmosphérique {selectedCity?.city}</h4>
            <h4 className="h4">{selectedCity?.index}</h4>
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

           </div>
        </div>
        </>
        )
    }
    return (
        <div>
            Chargement...
        </div>
    )
}

const List = (list, city) => {
    
   const data = []
   const result = list?.map(el => {
       if(el.city === city) {
            data.push({
                ...el,
                color: indextoColor(el.index)
        })
       }
       data.push({
            ...el,
            color: 'rgb(231, 238, 231)'
       })
   })
   return data
}
export default Description