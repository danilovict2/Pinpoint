import { registerVueControllerComponents } from '@symfony/ux-vue';
import './bootstrap.js';
import './styles/app.css';
import { initialize } from './maps.js';

google.maps.event.addDomListener(window, 'load', initialize);

registerVueControllerComponents();