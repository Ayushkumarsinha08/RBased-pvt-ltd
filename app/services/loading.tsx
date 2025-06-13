'use client';

import dynamic from 'next/dynamic';

// Create a dynamic import for the Map component to avoid SSR issues with Leaflet
const MapWithNoSSR = dynamic(() => import('./../../components/ui/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-3 text-gray-700">Loading...</p>
      </div>
    </div>
  ),
});

export default function LiveMap() {
  return <MapWithNoSSR />;
}

export function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-3 text-gray-700">Loading...</p>
      </div>
    </div>
  );
}