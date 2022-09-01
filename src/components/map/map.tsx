import { DeckGL } from '@deck.gl/react';
import { ColumnLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import { observatoryUseCase } from '../../shared/usecases/observatory/observatory';
import { meshWeatherUsecase } from '../../shared/usecases/meshWeather/meshWeather';
import { AppDateTime } from '../../shared/models/date/AppDateTime';
import type { MeshWeather } from '../../shared/models/amdas/MeshWeather';

const MAP_BOX_TOKEN = import.meta.env.PUBLIC_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  longitude: 135,
  latitude: 35,
  zoom: 8,
  pitch: 30,
  bearing: 0,
};

interface Item {
  centroid: [number, number];
  value: number;
}

export const AppMap = (): JSX.Element => {
  const [percipitationLayer, setPercipitationLayer] =
    useState<ColumnLayer<any>>();
  useEffect(() => {
    meshWeatherUsecase()
      .getMeshWeathers(AppDateTime.now().addMinutes(-30).floor10Minutes())
      .then((meshWeathers) => {
        const layer = new ColumnLayer<MeshWeather>({
          id: 'precipitation-perDay',
          data: meshWeathers,
          diskResolution: 12,
          radius: 4000,
          extruded: true,
          pickable: true,
          elevationScale: 5000,
          getPosition: (wether) => [
            wether.coordinate.lat,
            wether.coordinate.lng,
          ],
          getFillColor: (wether) => [
            48,
            128,
            255,
            (255 * wether.precipitation.perDay) / 150,
          ],
          getLineColor: [0, 0, 0],
          getElevation: (wether) => wether.precipitation.perDay / 5,
        });

        console.log(layer);
        setPercipitationLayer(layer);
      });
  }, []);

  return (
    <div>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        layers={[percipitationLayer]}
        controller={true}
      >
        <Map
          mapStyle="mapbox://styles/studio-kakky/ckuhpi5vm4jf717qm72rknulj"
          mapboxAccessToken={MAP_BOX_TOKEN}
        />
      </DeckGL>
    </div>
  );
};
