'use client';
import GoogleMapReact from 'google-map-react';
import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

export default function ProjectMap({ children }: Readonly<PropsWithChildren>) {
  const defaultProps = {
    center: {
      lat: 40.4883880721564,
      lng: 44.21660357249472,
    },
    zoom: 8,
  };

  const renderMarkers = (map: any, maps: any) => {
    const secondMarker = new maps.Marker({
      position: { lat: 40.16479, lng: 44.402503 },
      map,
      title: 'Gitc Yerevan',
    });

    return {
      secondMarker,
    };
  };

  return (
    <div className={styles.mapWrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API ?? '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
      {children}
    </div>
  );
}
