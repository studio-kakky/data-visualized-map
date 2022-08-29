import { DeckGL } from '@deck.gl/react';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import { observatoryUseCase } from '../../shared/usecases/observatory/observatory';
import { meshWeatherUsecase } from '../../shared/usecases/meshWeather/meshWeather';
import { AppDateTime } from '../../shared/models/date/AppDateTime';

const MAP_BOX_TOKEN = import.meta.env.PUBLIC_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

export const AppMap = (): JSX.Element => {
  useEffect(() => {
    meshWeatherUsecase()
      .getMeshWeathers(AppDateTime.now().addMinutes(-30).floor10Minutes())
      .then((v) => console.log(v));
  }, []);

  return (
    <div>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
        <Map
          mapStyle="mapbox://styles/studio-kakky/ckuhpi5vm4jf717qm72rknulj"
          mapboxAccessToken={MAP_BOX_TOKEN}
        />
      </DeckGL>
    </div>
  );
};
