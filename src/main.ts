import './style.css'
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const init = () => {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // camera

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(15, 20, 30);
  scene.add(camera);

  // controls
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.minDistance = 20;
  // controls.maxDistance = 50;
  // controls.maxPolarAngle = Math.PI / 2;

  // ambient light

  scene.add(new THREE.AmbientLight(0x666666));

  // point light

  const light = new THREE.PointLight(0xffffff, 3, 0, 0);
  camera.add(light);

  // helper

  scene.add(new THREE.AxesHelper(20));

  // textures

  // const loader = new THREE.TextureLoader();
  // const texture = loader.load('textures/sprites/disc.png');
  // texture.colorSpace = THREE.SRGBColorSpace;

  // group = new THREE.Group();
  // scene.add(group);

  // points





  //

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

  }

  window.addEventListener('resize', onWindowResize);

  return { renderer, controls, scene, camera };
}

const { renderer, controls, scene, camera } = init();


function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
