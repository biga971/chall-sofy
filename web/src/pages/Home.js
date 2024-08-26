import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { indextoColor } from '../hook/indexColor'
import Navbar from '../components/Navbar'

const Home = () => {

    const [indexList, setIndexList] = useState([])
    const [colorList, setColorList] = useState([])
    const [setUp, setSetUp] = useState(false)

    useEffect(() => {
        const getIndiceList = async () => {
            const response = await fetch('http://localhost:3333/api/air-qualities')
            const data = await response.json()
            setIndexList(data)
            setColorList(list(data))
            setSetUp(true)
        }
        getIndiceList() 
    }, [])

    if(setUp) {
        return (
            <>
                <Navbar />
                <div className="page">
                    <Card indexList={indexList} colorList={colorList} />
                </div>
            </>
        )
    }
        

    return (
        <div>
            loarding ...
        </div>
    )
}

const list = (list) => {
    const data = []
   const result = list?.map(el => {
       data.push({
            ...el,
            color: indextoColor(el.index)
       })
   })
   return data
}

export default Home