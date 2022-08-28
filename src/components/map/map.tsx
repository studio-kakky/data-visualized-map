import DeckGL from '@deck.gl/react/typed';
import {LineLayer} from '@deck.gl/layers/typed';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const lineData = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export const AppMap = (): JSX.Element => {
  const layers = [
    new LineLayer({id: 'line-layer', data: lineData})
  ];

  return <div><DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers} /></div>;

}