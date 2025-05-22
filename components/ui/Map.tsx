'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// The key is that we don't import MapContainer directly
// but rather import a function that returns it
const MapContainerWithNoSSR = dynamic(
  () => import('./MapContainer'),
  { 
    ssr: false, // This is crucial - prevents server-side rendering
    loading: () => (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-700">Loading map...</p>
        </div>
      </div>
    )
  }
);

export default function LiveMap() {
  return <MapContainerWithNoSSR />;
}
