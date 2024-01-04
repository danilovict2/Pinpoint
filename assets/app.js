import './bootstrap.js';
import { registerVueControllerComponents } from '@symfony/ux-vue';
import './styles/app.css';

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));