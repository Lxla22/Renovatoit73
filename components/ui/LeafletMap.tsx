'use client'

import { useEffect, useRef } from 'react'

const CITIES = [
  { name: 'Chambéry',               lat: 45.5646, lng: 5.9178, main: true  },
  { name: 'Aix-les-Bains',          lat: 45.6886, lng: 5.9153, main: false },
  { name: 'Annecy',                 lat: 45.8992, lng: 6.1294, main: false },
  { name: 'Lyon',                   lat: 45.7640, lng: 4.8357, main: false },
  { name: 'Grenoble',               lat: 45.1885, lng: 5.7245, main: false },
  { name: 'Saint-Jean-de-Maurienne',lat: 45.2769, lng: 6.3525, main: false },
  { name: 'Annemasse',              lat: 46.1942, lng: 6.2347, main: false },
  { name: 'Thonon-les-Bains',       lat: 46.3700, lng: 6.4789, main: false },
  { name: 'Voiron',                 lat: 45.3636, lng: 5.5908, main: false },
  { name: 'Belley',                 lat: 45.7614, lng: 5.6881, main: false },
  { name: 'Cluses',                 lat: 46.0614, lng: 6.5794, main: false },
  { name: 'Rumilly',                lat: 45.8653, lng: 5.9431, main: false },
]

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    import('leaflet').then((L) => {
      if (!containerRef.current || mapRef.current) return

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)

      const map = L.map(containerRef.current, {
        center: [45.78, 5.95],
        zoom: 7,
        scrollWheelZoom: false,
        zoomControl: true,
      })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      }).addTo(map)

      // Main icon (bigger, for Chambéry — HQ)
      const mainIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" width="32" height="48">
          <path d="M16 0C7.16 0 0 7.16 0 16C0 28 16 48 16 48C16 48 32 28 32 16C32 7.16 24.84 0 16 0Z" fill="#FF6A00"/>
          <circle cx="16" cy="16" r="7" fill="white"/>
          <circle cx="16" cy="16" r="3" fill="#FF6A00"/>
        </svg>`,
        className: '',
        iconSize: [32, 48],
        iconAnchor: [16, 48],
        popupAnchor: [0, -48],
      })

      // Standard icon for all other cities
      const orangeIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 32" width="22" height="32">
          <path d="M11 0C4.92 0 0 4.92 0 11C0 19.25 11 32 11 32C11 32 22 19.25 22 11C22 4.92 17.08 0 11 0Z" fill="#FF6A00"/>
          <circle cx="11" cy="11" r="4.5" fill="white"/>
        </svg>`,
        className: '',
        iconSize: [22, 32],
        iconAnchor: [11, 32],
        popupAnchor: [0, -32],
      })

      CITIES.forEach(({ name, lat, lng, main }) => {
        L.marker([lat, lng], { icon: main ? mainIcon : orangeIcon })
          .addTo(map)
          .bindPopup(`<b style="color:#FF6A00;font-family:sans-serif">RENOVA'TOIT 73</b><br><span style="font-family:sans-serif;font-size:13px">${name}</span>`)
      })

      // Dark map filter
      const style = document.createElement('style')
      style.textContent = `.leaflet-tile { filter: invert(1) hue-rotate(180deg) brightness(0.85) saturate(0.7); } .leaflet-control-attribution { display: none !important; }`
      document.head.appendChild(style)
    })

    return () => {
      if (mapRef.current) {
        ;(mapRef.current as { remove: () => void }).remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height: '100%', width: '100%', background: '#161616' }}
    />
  )
}
