import { CustomMap } from "./CustomMap";
import 'leaflet/dist/leaflet.css';
import { User } from "./User";
import { Company } from "./Company";



const user = new User();


const company = new Company();


const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);