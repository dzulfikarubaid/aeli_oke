
import { MapContainer, Marker, Polygon, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import { statesData } from './data'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useResponsive from '../useResponsive'

function Mapss(props: any) {
  const {isDesktop, isMobile} = useResponsive()
  const { targetState } = props
  const router = useRouter()
  const color1 = 'rgba(256, 256, 256, 0.7)'
  const color2 = 'rgb(59 7 100)'
  const color3 = 'rgba(256, 256, 256, 0.4)'
  const color4 = 'rgba(0, 0, 0, 0.0)'
  const color5 = 'white'
  const position = [-2.8182097651959817, 118.00233509522967]
  let specialStates = ['Kalimantan Selatan', 'Lampung', 'Jawa Timur', 'DKI Jakarta', 'Bali', 'Jawa Tengah', 'Jawa Barat', 'Sumatera Barat', 'Daerah Istimewa Yogyakarta', 'Nusa Tenggara Barat', 'Kalimantan Timur', 'Bangka Belitung', 'Sumatera Selatan', 'Sumatera Utara', 'Sulawesi Selatan']
  let targetStateFix: any;
  if (specialStates.includes(targetState)) {
    targetStateFix = targetState
  }


  return (
    <div>
      <MapContainer id='map-container' center={[-2.8182097651959817, 118.00233509522967]} zoom={3} scrollWheelZoom={false} dragging={false} className='w-full h-[200px] sm:h-[500px] bg-transparent overflow-hidden object-contain' zoomControl={false} attributionControl={false} boxZoom={false} doubleClickZoom={false} >
        <GeoJSON data={statesData} style={
          (feature: any) => ({

            fillColor: targetStateFix?.includes(feature.properties.state) ? color1 : specialStates.includes(feature.properties.state) ? color3 : color4,
            fillOpacity: 1,
            weight: 2,
            opacity: 1,
            color: color5,
            dashArray: '',
          })} onEachFeature={
            (feature, layer) => {
              layer.on('click', (e) => {
                console.log(feature.properties.state)
                router.push(`/dpd/${feature.properties.slug}`);
                e.target.setStyle({

                })

              })
              layer.on('mouseover', (e) => {
                layer.bindTooltip(feature.properties.state)
                e.target.setStyle({
                  dashArray: "",
                  fillColor: color2,
                  fillOpacity: 1,
                  weight: 2,
                  opacity: 1,
                  color: color5,
                })
              })
              layer.on('mouseout', (e) => {
                layer.bindTooltip(feature.properties.state)
                e.target.setStyle({
                  fillOpacity: 1,
                  weight: 2,
                  dashArray: "",
                  color: color5,
                  fillColor: targetStateFix?.includes(feature.properties.state) ? color1 : specialStates.includes(feature.properties.state) ? color3 : color4,
                })
              })



            }
          }></GeoJSON>
      </MapContainer>
    </div>
  )
}

export default Mapss