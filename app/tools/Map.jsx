import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
    const mapRef = useRef()
    const mapContainerRef = useRef()

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FkZW5lcHBiZWxsZXZ1ZSIsImEiOiJjbW5nYTR2OTkwNzh2MnNwdWl4dms3MGxwIn0.-zJLTJJJuvMReFls0lPoow'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-92.41195, 41.01926],
            zoom: 10
        });

        new mapboxgl.Marker({ color: 'red' })
            .setLngLat([-92.42456, 41.00532])
            .addTo(mapRef.current);

        new mapboxgl.Marker({ color: 'black' })
            .setLngLat([-92.30938, 41.17054])
            .addTo(mapRef.current);

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <>
            <div id='map-container' ref={mapContainerRef} className="h-full w-full rounded-4xl"/>
        </>
    )
}

export default Map