import './bootstrap.js';
import { registerVueControllerComponents } from '@symfony/ux-vue';
import './styles/app.css';
import { initialize } from './maps.js';

google.maps.event.addDomListener(window, 'load', initialize);

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));