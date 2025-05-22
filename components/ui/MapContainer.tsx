'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapComponentsType {
  L: typeof import('leaflet');
  defaultIcon: import('leaflet').Icon;
  MapContainer: typeof import('react-leaflet')['MapContainer'];
  TileLayer: typeof import('react-leaflet')['TileLayer'];
  Marker: typeof import('react-leaflet')['Marker'];
  Popup: typeof import('react-leaflet')['Popup'];
  useMap: typeof import('react-leaflet')['useMap'];
  [key: string]: unknown; // For any other components that might be spread
}

export default function MapComponentImpl() {
  const [MapComponents, setMapComponents] = useState<MapComponentsType | null>(null);
  useEffect(() => {
    // Only import these modules on the client side
    const importModules = async () => {
      try {
        // Import Leaflet first
        const L = await import('leaflet');
        
        // Don't try to dynamically import CSS - it should be imported at the top level
        // or handled by Next.js config
        
        // Import React-Leaflet components
        // Import React-Leaflet components
        const reactLeaflet = await import('react-leaflet');
        
        // Create our own icon instance before removing the default
        const defaultIcon = L.icon({
          iconUrl: '/marker-icon.png',         // You need to copy these files to your public folder
          iconRetinaUrl: '/marker-icon-2x.png',
          shadowUrl: '/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        });
        
        // Override the default icon
        L.Marker.prototype.options.icon = defaultIcon;
        
        // Store all imported components
        setMapComponents({
          L,
          defaultIcon,
          ...reactLeaflet
        });
      } catch (error) {
        console.error("Failed to load map components:", error);
      }
    };

    importModules();
  }, []);

  // Show loading state while imports are being loaded
  if (!MapComponents) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-700">Initializing map...</p>
        </div>
      </div>
    );
  }

  // Once components are loaded, render the map
  const { MapContainer, TileLayer, Marker, Popup, useMap } = MapComponents;
  const { defaultIcon } = MapComponents;

  // Define LocationMarker inside render to have access to imported components
  const LocationMarker = () => {
    const [position, setPosition] = useState<{lat: number; lng: number} | null>(null);
    const [error, setError] = useState<string | null>(null);
    const map = useMap();

    useEffect(() => {
      // Set up event handlers
      // Define interface for the location event
      interface LocationEvent {
        latlng: {
          lat: number;
          lng: number;
        };
        accuracy: number;
        bounds: L.LatLngBounds;
        timestamp: number;
      }
      
      const handleLocationFound = (e: LocationEvent): void => {
        setPosition(e.latlng);
        setError(null);
      };

      const handleLocationError = (e: { message: string }) => {
        setError(`Location access error: ${e.message}`);
        console.error('Location error:', e);
        map.setView([51.505, -0.09], 13);
      };

      map.on('locationfound', handleLocationFound);
      map.on('locationerror', handleLocationError);
      map.locate({ setView: true, maxZoom: 16 });

      return () => {
        map.off('locationfound', handleLocationFound);
        map.off('locationerror', handleLocationError);
        map.stopLocate();
      };
    }, [map]);

    if (error) {
      return (
        <div className="absolute z-[1000] top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      );
    }

    return position === null ? null : (
      <Marker position={position} icon={defaultIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}