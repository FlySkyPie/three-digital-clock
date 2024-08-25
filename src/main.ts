import * as THREE from 'three';
import loadFont, { type IResult } from 'load-bmfont';
import createText from '@flyskypie/three-bmfont-text';
import dayjs from 'dayjs';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import fontUrl from './assets/Simple.fnt?url';
import textureUrl from './assets/Simple.png';

import './style.css';

export const loadFontPromise = (fontPath: string) => new Promise<IResult>((resove, reject) => {
  loadFont(fontPath, (err, font) => {
    if (err) {
      reject(err);
      return;
    }
    resove(font);
  })
});

export const loadTexturePromise = (texturePath: string) => new Promise<THREE.Texture>((resove) => {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(texturePath);

  resove(texture);
});


const init = async () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // camera

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(15, 15, 30);
  scene.add(camera);

  // controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(10, 0, 0);

  // ambient light
  scene.add(new THREE.AmbientLight(0x666666));

  // point light
  const light = new THREE.PointLight(0xffffff, 3, 0, 0);
  camera.add(light);

  // helper
  scene.add(new THREE.AxesHelper(20));

  const [font, texture] = await Promise.all([
    loadFontPromise(fontUrl),
    loadTexturePromise(textureUrl),
  ]);

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    color: 'rgb(230, 230, 230)'
  });
  const geom: THREE.BufferGeometry = createText({
    text: dayjs().format('HH:mm:ss SSS'), // the string to render
    font: font, // the bitmap font definition
    width: 1000, // optional width for word-wrap
  });
  const text = new THREE.Mesh(geom, material);

  // scale it down so it fits in our 3D units
  var textAnchor = new THREE.Object3D();
  textAnchor.scale.set(0.05, -0.05, -0.05);
  textAnchor.add(text);
  scene.add(textAnchor);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize);

  return { renderer, controls, scene, camera, text, font };
}

const { renderer, controls, scene, camera, text, font } = await init();


function animate() {
  requestAnimationFrame(animate);

  const geom: THREE.BufferGeometry = createText({
    text: dayjs().format('HH:mm:ss SSS'), // the string to render
    font: font, // the bitmap font definition
    width: 1000, // optional width for word-wrap
  });

  const old = text.geometry;
  text.geometry = geom;
  old.dispose();

  controls.update();
  renderer.render(scene, camera);
}

animate();
