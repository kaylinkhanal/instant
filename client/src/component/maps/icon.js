import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


export const iconPerson= L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
})