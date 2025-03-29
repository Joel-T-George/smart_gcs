import React, { useEffect, useRef } from 'react'

import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { XYZ } from 'ol/source'
import {defaults as defaultControls}from 'ol/control'
import { APIKeys } from '../../utils/APIManager'



const  OpenLayerMap:React.FC = ()=>{

    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(!mapRef.current) return

        const map = new Map({
            target:mapRef.current,
            layers:[new TileLayer({
                // source:new OSM()
                source: new XYZ({
                    url:`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=${APIKeys.MAPTILER}`,
                    crossOrigin:"anonymous",
                    tileSize:256
                    })
            })],
            view: new View({
                center:[0,0],
                zoom:2
            }),
            controls:defaultControls({
                zoom:false,
                attribution:false,
                rotate:false
            })



        })

        map.updateSize();

        return()=>{
            map.setTarget(undefined)
        }
    },[])


    return(
        <div ref={mapRef} style={{width:"100%", height:"100%"}} />

    )
}

export default OpenLayerMap