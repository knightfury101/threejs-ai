import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#1E88E5',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;
