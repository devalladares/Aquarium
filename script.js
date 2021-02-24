function init() {

  canvas = document.getElementById("c");
  const content = document.getElementById('content');

  const gltfLoader = new GLTFLoader()
  const cubeTextureLoader = new THREE.CubeTextureLoader()

  const environmentMap = cubeTextureLoader.load([
    './textures/environmentMaps/5/px.png',
    './textures/environmentMaps/5/nx.png',
    './textures/environmentMaps/5/py.png',
    './textures/environmentMaps/5/ny.png',
    './textures/environmentMaps/5/pz.png',
    './textures/environmentMaps/5/nz.png'
  ])

  /**
   * 1 Hodor
   */
  {
    const scene = new THREE.Scene();
    const element = document.createElement('div');
    element.className = 'list-item';
    const sceneElement = document.createElement('div');
    element.appendChild(sceneElement);
    scene.userData.element = sceneElement;
    content.appendChild(element);

    //toneMapping
    environmentMap.encoding = THREE.sRGBEncoding
    scene.environment = environmentMap

    //camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    scene.userData.camera = camera;
    camera.position.set(-1, 0.45, 2)

    controls = new OrbitControls(scene.userData.camera, scene.userData.element);
    controls.maxDistance = 6;
    controls.enablePan = true;
    controls.panSpeed = 0.5
    controls.enableZoom = true;
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5
    controls.enableDamping = true
    scene.userData.controls = controls;

    gltfLoader.load(
      './models/hodor11.glb',
      (gltf) => {
        scene.add(gltf.scene)
        console.log(gltf.scene)

        updateAllMaterials()
      }
    )

    const updateAllMaterials = () => {

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMapIntensity = 1
          child.material.needsUpdate = true
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }

    const directionalLight = new THREE.DirectionalLight('white', 8)
    directionalLight.position.set(-2.526, 0.930, -0.032)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.far = 10
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.015
    scene.add(directionalLight)

    scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(2, 2, 1);
    scene.add(light);

    scenes.push(scene);
  }

  /**
   * 2 DINO 1
   */
  {
    const scene = new THREE.Scene();
    const element = document.createElement('div');
    element.className = 'list-item';
    const sceneElement = document.createElement('div');
    element.appendChild(sceneElement);
    scene.userData.element = sceneElement;
    content.appendChild(element);

    //toneMapping
    environmentMap.encoding = THREE.sRGBEncoding
    scene.environment = environmentMap

    //camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    scene.userData.camera = camera;
    camera.position.set(-1, 0.45, 1)

    controls = new OrbitControls(scene.userData.camera, scene.userData.element);
    controls.maxDistance = 6;
    controls.enablePan = true;
    controls.panSpeed = 0.5,
      controls.enableZoom = true;
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5
    controls.enableDamping = true
    scene.userData.controls = controls;


    gltfLoader.load(
      './models/dino16.glb',
      (gltf) => {
        mixer = new THREE.AnimationMixer(gltf.scene)
        // const action = mixer.clipAction(gltf.animations[1])
        const action = mixer.clipAction(gltf.animations[0])
        gltf.scene.scale.set(1.5, 1.5, 1.5)

        action.play()

        scene.add(gltf.scene)
         console.log(gltf.scene)

        updateAllMaterials()
      }
    )

    const updateAllMaterials = () => {

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMapIntensity = 1
          child.material.needsUpdate = true
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }

    const directionalLight = new THREE.DirectionalLight('white', 3)
    directionalLight.position.set(-2.526, 0.930, -0.032)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.far = 10
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.015
    scene.add(directionalLight)
    //
    scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

    // const light = new THREE.DirectionalLight(0xffffff, 0.5);
    // light.position.set(2, 2, 1);
    // scene.add(light);

    scenes.push(scene);
  }

  /**
   * 3 Leopard
   */
  {
    const scene = new THREE.Scene();
    const element = document.createElement('div');
    element.className = 'list-item';
    const sceneElement = document.createElement('div');
    element.appendChild(sceneElement);
    scene.userData.element = sceneElement;
    content.appendChild(element);

    //toneMapping
    environmentMap.encoding = THREE.sRGBEncoding
    scene.environment = environmentMap

    //camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    scene.userData.camera = camera;
    camera.position.set(-1, 0.45, 1)

    controls = new OrbitControls(scene.userData.camera, scene.userData.element);
    controls.maxDistance = 6;
    controls.enablePan = true;
    controls.panSpeed = 0.5,
      controls.enableZoom = true;
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5
    controls.enableDamping = true
    scene.userData.controls = controls;


    gltfLoader.load(
      './models/2_b2.glb',
      (gltf) => {
        // mixer = new THREE.AnimationMixer(gltf.scene)
        // const action = mixer.clipAction(gltf.animations[1])
        // const action = mixer.clipAction(gltf.animations[0])
        gltf.scene.scale.set(0.07, 0.07, 0.07)
        gltf.scene.rotation.y = Math.PI * 0.5
        // action.play()

        scene.add(gltf.scene)
        console.log(gltf.scene)

        updateAllMaterials()
      }
    )

    gltfLoader.load(
      './models/2_l.glb',
      (gltf) => {
        gltf.scene.scale.set(0.07, 0.07, 0.07)
        gltf.scene.rotation.y = Math.PI * 0.5
        // action.play()

        scene.add(gltf.scene)
        console.log(gltf.scene)

        updateAllMaterials()
      }
    )

    const updateAllMaterials = () => {

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMapIntensity = 2
          child.material.needsUpdate = true
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }

    const directionalLight = new THREE.DirectionalLight('white', 3)
    directionalLight.position.set(-2.526, 0.930, -0.032)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.far = 10
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.015
    scene.add(directionalLight)
    //
    scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, -1);
    scene.add(light);

    scenes.push(scene);
  }

  /**
   * 4 Dekho
   */
  {
    const scene = new THREE.Scene();
    const element = document.createElement('div');
    element.className = 'list-item';
    const sceneElement = document.createElement('div');
    element.appendChild(sceneElement);
    scene.userData.element = sceneElement;
    content.appendChild(element);

    //toneMapping
    environmentMap.encoding = THREE.sRGBEncoding
    scene.environment = environmentMap

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    scene.userData.camera = camera;
    camera.position.set(1, 0.45, -2)

    controls = new OrbitControls(scene.userData.camera, scene.userData.element);

    controls.maxDistance = 6;
    controls.enablePan = true;
    controls.panSpeed = 0.5
    controls.enableZoom = true;
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5
    controls.enableDamping = true
    scene.userData.controls = controls;

    gltfLoader.load(
      './models/dekho6.glb',
      (gltf) => {
        // gltf.scene.scale.set(2, 2, 2)
        gltf.scene.rotation.y = Math.PI * 0.5
        scene.add(gltf.scene)
        updateAllMaterials()
      }
    )

    const updateAllMaterials = () => {

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMapIntensity = 1
          child.material.needsUpdate = true
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }

    /**
     * Lights
     */
    const directionalLight = new THREE.DirectionalLight('white', 4)
    directionalLight.position.set(1.65, 3.4, -1.95)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.02
    // directionalLight.shadow.bias = 0.02
    scene.add(directionalLight)


    scenes.push(scene);
  }

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
}

function updateSize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
  }
}

function animate() {
  render();
  requestAnimationFrame(animate);
}

function render() {

  updateSize();
  canvas.style.transform = `translateY(${window.scrollY}px)`;
  renderer.setClearColor(0xffffff);
  renderer.setScissorTest(false);
  renderer.clear();
  renderer.setClearColor(0xf4f3e9);
  renderer.setScissorTest(true);

  renderer.physicallyCorrectLights = true
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.toneMapping = THREE.NoToneMapping
  renderer.toneMappingExposure = 1.5
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap


  scenes.forEach(function(scene) {

    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    const element = scene.userData.element;
    const rect = element.getBoundingClientRect();
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const left = rect.left;
    const bottom = renderer.domElement.clientHeight - rect.bottom;
    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    const camera = scene.userData.camera;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    scene.userData.controls.update();
    renderer.render(scene, camera);

    if (mixer !== null) {
      mixer.update(deltaTime)
    }
  });
}

import * as THREE from './build/three.module.js';
import {
  GLTFLoader
} from './examples/jsm/loaders/GLTFLoader.js';
import {
  RGBELoader
} from './examples/jsm/loaders/RGBELoader.js';
import {
  RoughnessMipmapper
} from './examples/jsm/utils/RoughnessMipmapper.js';
import {
  OrbitControls
} from './examples/jsm/controls/OrbitControls.js';
import {
  DRACOLoader
} from './examples/jsm/loaders/DRACOLoader.js'

import * as dat from './examples/jsm/libs/dat.gui.module.js'


let canvas, renderer, controls
const scenes = [];
let rings = []
let mixer = null
const clock = new THREE.Clock()
let previousTime = 0


init();
animate();
