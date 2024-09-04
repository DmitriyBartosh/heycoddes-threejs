import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";

import { steps } from "./stepsVariants";

import * as THREE from "three";

export function Model({ presentation }) {
  const { nodes } = useGLTF("models/house.gltf");
  const [
    textureEarth,
    textureFloor,
    textureWalls,
    textureDoors,
    textureSofa,
    textureCornerSofa,
    textureDoubleBed,
    textureWordDesk,
    textureWardrobes,
    textureIkeaBilly,
    textureWardrobeClassic,
    textureAnimated,
    textureTVset,
    textureBathroom,
    textureWindows,
  ] = useTexture([
    "textures/EarthBaked.jpg",
    "textures/FloorBaked.jpg",
    "textures/WallsBaked.jpg",
    "textures/DoorsBaked.jpg",
    "textures/SofaBaked.jpg",
    "textures/CornerSofaBaked.jpg",
    "textures/DoubleBedBaked.jpg",
    "textures/WorkDeskBaked.jpg",
    "textures/WardrobesBaked.jpg",
    "textures/IkeaBillyBaked.jpg",
    "textures/WardrobeClassicBaked.jpg",
    "textures/AnimatedBaked.jpg",
    "textures/TVsetBaked.jpg",
    "textures/BathroomBaked.jpg",
    "textures/WindowsBaked.jpg",
  ]);

  textureEarth.flipY = false;
  textureFloor.flipY = false;
  textureWalls.flipY = false;
  textureDoors.flipY = false;
  textureSofa.flipY = false;
  textureCornerSofa.flipY = false;
  textureDoubleBed.flipY = false;
  textureWordDesk.flipY = false;
  textureWardrobes.flipY = false;
  textureIkeaBilly.flipY = false;
  textureWardrobeClassic.flipY = false;
  textureAnimated.flipY = false;
  textureTVset.flipY = false;
  textureBathroom.flipY = false;
  textureWindows.flipY = false;

  textureEarth.colorSpace = "srgb";
  textureFloor.colorSpace = "srgb";
  textureWalls.colorSpace = "srgb";
  textureDoors.colorSpace = "srgb";
  textureSofa.colorSpace = "srgb";
  textureCornerSofa.colorSpace = "srgb";
  textureDoubleBed.colorSpace = "srgb";
  textureWordDesk.colorSpace = "srgb";
  textureWardrobes.colorSpace = "srgb";
  textureIkeaBilly.colorSpace = "srgb";
  textureWardrobeClassic.colorSpace = "srgb";
  textureAnimated.colorSpace = "srgb";
  textureTVset.colorSpace = "srgb";
  textureBathroom.colorSpace = "srgb";
  textureWindows.colorSpace = "srgb";

  const earthMaterial = new THREE.MeshBasicMaterial({
    map: textureEarth,
  });

  const floorMaterial = new THREE.MeshBasicMaterial({
    map: textureFloor,
  });

  const wallsMaterial = new THREE.MeshBasicMaterial({
    map: textureWalls,
  });

  const DoorsMaterial = new THREE.MeshBasicMaterial({
    map: textureDoors,
  });

  const sofaMaterial = new THREE.MeshBasicMaterial({
    map: textureSofa,
  });

  const CornerSofaMaterial = new THREE.MeshBasicMaterial({
    map: textureCornerSofa,
  });

  const DoubleBedMaterial = new THREE.MeshBasicMaterial({
    map: textureDoubleBed,
  });

  const WorkDeskMaterial = new THREE.MeshBasicMaterial({
    map: textureWordDesk,
  });

  const WardrobesMaterial = new THREE.MeshBasicMaterial({
    map: textureWardrobes,
  });

  const WardrobeClassicMaterial = new THREE.MeshBasicMaterial({
    map: textureWardrobeClassic,
  });

  const IkeaBillyMaterial = new THREE.MeshBasicMaterial({
    map: textureIkeaBilly,
  });

  const AnimatedMaterial = new THREE.MeshBasicMaterial({
    map: textureAnimated,
  });

  const TVsetMaterial = new THREE.MeshBasicMaterial({
    map: textureTVset,
  });

  const BathroomMaterial = new THREE.MeshBasicMaterial({
    map: textureBathroom,
  });

  const WindowsMaterial = new THREE.MeshBasicMaterial({
    map: textureWindows,
  });

  return (
    <motion.group
      variants={steps[presentation.step]}
      initial={false}
      animate="animate"
      transition={{ duration: 1, ease: [0.28, 0.41, 0.12, 1] }}
    >
      <group
        name="Window_Group003"
        position={[5.673, 1.189, 1.041]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="WindowFrame003"
          geometry={nodes.WindowFrame003.geometry}
          material={WindowsMaterial}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            name="WindowL003"
            geometry={nodes.WindowL003.geometry}
            material={WindowsMaterial}
            position={[-0.795, 0.025, 0.023]}
          >
            <mesh
              name="Handle002"
              geometry={nodes.Handle002.geometry}
              material={WindowsMaterial}
              position={[0.035, 0.475, 0.036]}
            />
          </mesh>
          <mesh
            name="WindowR003"
            geometry={nodes.WindowR003.geometry}
            material={WindowsMaterial}
            position={[0.794, 0.025, 0.062]}
          >
            <mesh
              name="Handle003"
              geometry={nodes.Handle003.geometry}
              material={WindowsMaterial}
              position={[-0.035, 0.475, 0.036]}
            />
          </mesh>
          <mesh
            name="Windows_Sill003"
            geometry={nodes.Windows_Sill003.geometry}
            material={WindowsMaterial}
            position={[0, 0, 0.1]}
          />
        </mesh>
      </group>
      <group
        name="Window_Group004"
        position={[5.673, 1.189, -2.156]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="WindowFrame004"
          geometry={nodes.WindowFrame004.geometry}
          material={WindowsMaterial}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            name="WindowL004"
            geometry={nodes.WindowL004.geometry}
            material={WindowsMaterial}
            position={[-0.794, 0.025, 0.023]}
          />
          <mesh
            name="WindowR004"
            geometry={nodes.WindowR004.geometry}
            material={WindowsMaterial}
            position={[0.795, 0.025, 0.063]}
          />
          <mesh
            name="Windows_Sill004"
            geometry={nodes.Windows_Sill004.geometry}
            material={WindowsMaterial}
            position={[0, 0, 0.1]}
          />
        </mesh>
      </group>
      <group
        name="Window_Group"
        position={[-6.178, 1.189, 1.343]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={-1}
      >
        <mesh
          name="WindowFrame"
          geometry={nodes.WindowFrame.geometry}
          material={WindowsMaterial}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            name="WindowL"
            geometry={nodes.WindowL.geometry}
            material={WindowsMaterial}
            position={[-0.4, 0.052, 0.1]}
          >
            <mesh
              name="Handle"
              geometry={nodes.Handle.geometry}
              material={WindowsMaterial}
              position={[0.775, 0.448, 0]}
              rotation={[0, 0, Math.PI]}
            />
          </mesh>
          <mesh
            name="Windows_Sill"
            geometry={nodes.Windows_Sill.geometry}
            material={WindowsMaterial}
          />
        </mesh>
      </group>
      <group
        name="Window_Group001"
        position={[-6.178, 1.189, -2.461]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={-1}
      >
        <mesh
          name="WindowFrame001"
          geometry={nodes.WindowFrame001.geometry}
          material={WindowsMaterial}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            name="WindowL001"
            geometry={nodes.WindowL001.geometry}
            material={WindowsMaterial}
            position={[-0.4, 0.052, 0.1]}
          >
            <mesh
              name="Handle004"
              geometry={nodes.Handle004.geometry}
              material={WindowsMaterial}
              position={[0.775, 0.448, 0]}
              rotation={[0, 0, Math.PI]}
            />
          </mesh>
          <mesh
            name="Windows_Sill001"
            geometry={nodes.Windows_Sill001.geometry}
            material={WindowsMaterial}
          />
        </mesh>
      </group>
      <group
        name="Window_Group002"
        position={[-6.178, 1.189, -0.899]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="WindowFrame002"
          geometry={nodes.WindowFrame002.geometry}
          material={WindowsMaterial}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <group name="WindowL002" position={[-0.441, 0.025, 0.023]}>
            <mesh
              name="WindowL002_1"
              geometry={nodes.WindowL002_1.geometry}
              material={WindowsMaterial}
            />
            <mesh
              name="WindowL002_2"
              geometry={nodes.WindowL002_2.geometry}
              material={WindowsMaterial}
            />
            <mesh
              name="Handle001"
              geometry={nodes.Handle001.geometry}
              material={WindowsMaterial}
              position={[0.035, 0.475, 0.036]}
            />
          </group>
          <group name="WindowR" position={[0.441, 0.025, 0.063]}>
            <mesh
              name="WindowR_1"
              geometry={nodes.WindowR_1.geometry}
              material={WindowsMaterial}
            />
            <mesh
              name="WindowR_2"
              geometry={nodes.WindowR_2.geometry}
              material={WindowsMaterial}
            />
            <mesh
              name="Handle005"
              geometry={nodes.Handle005.geometry}
              material={WindowsMaterial}
              position={[-0.035, 0.475, 0.036]}
            />
          </group>
          <mesh
            name="Windows_Sill002"
            geometry={nodes.Windows_Sill002.geometry}
            material={WindowsMaterial}
          />
        </mesh>
      </group>

      <group
        name="Modern_double_Bed"
        position={[-4.019, 0.1, 2.158]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="body_closet001"
          geometry={nodes.body_closet001.geometry}
          material={DoubleBedMaterial}
          position={[-1.033, 0.256, -0.77]}
        />
        <mesh
          name="body_closet002"
          geometry={nodes.body_closet002.geometry}
          material={DoubleBedMaterial}
          position={[0.993, 0.256, -0.77]}
        />
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={DoubleBedMaterial}
          position={[-0.001, 0.321, -0.008]}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={DoubleBedMaterial}
          position={[-0.001, 0.146, -0.008]}
        />
        <mesh
          name="door_closet001"
          geometry={nodes.door_closet001.geometry}
          material={DoubleBedMaterial}
          position={[-1.033, 0.241, -0.587]}
        />
        <mesh
          name="door_closet002"
          geometry={nodes.door_closet002.geometry}
          material={DoubleBedMaterial}
          position={[0.993, 0.241, -0.587]}
        />
        <mesh
          name="Plane029"
          geometry={nodes.Plane029.geometry}
          material={DoubleBedMaterial}
          position={[-0.004, 0.273, 0.007]}
        />
        <mesh
          name="Plane030"
          geometry={nodes.Plane030.geometry}
          material={DoubleBedMaterial}
          position={[-0.004, 0.27, 0.236]}
        />
        <mesh
          name="Plane031"
          geometry={nodes.Plane031.geometry}
          material={DoubleBedMaterial}
          position={[-0.371, 0.596, -0.85]}
        />
        <mesh
          name="Plane032"
          geometry={nodes.Plane032.geometry}
          material={DoubleBedMaterial}
          position={[0.366, 0.606, -0.878]}
        />
        <mesh
          name="Wall_Fabric_1003"
          geometry={nodes.Wall_Fabric_1003.geometry}
          material={DoubleBedMaterial}
          position={[-0.019, 0.293, -1.064]}
        />
        <mesh
          name="Wall_Fabric_2003"
          geometry={nodes.Wall_Fabric_2003.geometry}
          material={DoubleBedMaterial}
          position={[-0.015, 0.465, -1.02]}
        />
      </group>
      <group name="TV_set001" position={[4.184, 0.1, -0.468]}>
        <group
          name="tv_55_samsung"
          position={[0, 0.371, 0.127]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        >
          <mesh
            name="frame"
            geometry={nodes.frame.geometry}
            material={TVsetMaterial}
            position={[0, -0.957, -23.438]}
          />
          <mesh
            name="legs"
            geometry={nodes.legs.geometry}
            material={TVsetMaterial}
            position={[-45.094, 0.015, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={-1}
          />
          <mesh
            name="logo"
            geometry={nodes.logo.geometry}
            material={TVsetMaterial}
            position={[0.053, 1.613, -6.909]}
          />
          <mesh
            name="screen001"
            geometry={nodes.screen001.geometry}
            material={TVsetMaterial}
            position={[0, -0.957, -6.317]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={-1}
          />
          <mesh
            name="TV_BODY001"
            geometry={nodes.TV_BODY001.geometry}
            material={TVsetMaterial}
            position={[0, -0.957, -23.438]}
          />
        </group>
        <group
          name="TV_stand"
          position={[0, 0, 0.169]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="legs_3"
            geometry={nodes.legs_3.geometry}
            material={TVsetMaterial}
            position={[0, 16.526, 0]}
          />
          <mesh
            name="panel"
            geometry={nodes.panel.geometry}
            material={TVsetMaterial}
            position={[0, -58.411, -21.164]}
          />
          <mesh
            name="structure"
            geometry={nodes.structure.geometry}
            material={TVsetMaterial}
            position={[0, -58.411, -21.164]}
          />
        </group>
      </group>
      <group
        name="Working_Desk"
        position={[-5.662, 0.11, -3.577]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <group
          name="Drawers"
          position={[0.626, 0.3, -0.125]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            name="Plane017"
            geometry={nodes.Plane017.geometry}
            material={WorkDeskMaterial}
          />
          <mesh
            name="Plane017_1"
            geometry={nodes.Plane017_1.geometry}
            material={WorkDeskMaterial}
          />
          <mesh
            name="Plane017_2"
            geometry={nodes.Plane017_2.geometry}
            material={WorkDeskMaterial}
          />
        </group>
        <mesh
          name="Table_Cuboid_Support"
          geometry={nodes.Table_Cuboid_Support.geometry}
          material={WorkDeskMaterial}
          position={[0.601, 0.595, 0.001]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          name="Table_Leg"
          geometry={nodes.Table_Leg.geometry}
          material={WorkDeskMaterial}
          position={[-0.772, 0.314, -0.003]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
        <group
          name="Table_Top"
          position={[-0.047, 0.72, -0.031]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            name="Plane015"
            geometry={nodes.Plane015.geometry}
            material={WorkDeskMaterial}
          />
          <mesh
            name="Plane015_1"
            geometry={nodes.Plane015_1.geometry}
            material={WorkDeskMaterial}
          />
        </group>
      </group>
      <group
        name="Animated_indoor_ficus_in_a_concrete_pot"
        position={[0.988, 0.1, 2.862]}
      >
        <mesh
          name="ground001"
          geometry={nodes.ground001.geometry}
          material={AnimatedMaterial}
        />
        <mesh
          name="plant001"
          geometry={nodes.plant001.geometry}
          material={AnimatedMaterial}
        />
        <mesh
          name="pot001"
          geometry={nodes.pot001.geometry}
          material={AnimatedMaterial}
        />
      </group>
      <group
        name="Animated_indoor_ficus_in_a_concrete_pot001"
        position={[-5.631, 0.1, -2.374]}
      >
        <mesh
          name="ground002"
          geometry={nodes.ground002.geometry}
          material={AnimatedMaterial}
        />
        <mesh
          name="plant002"
          geometry={nodes.plant002.geometry}
          material={AnimatedMaterial}
        />
        <mesh
          name="pot002"
          geometry={nodes.pot002.geometry}
          material={AnimatedMaterial}
        />
      </group>

      <group
        name="Wall_TV_60"
        position={[3.273, 1.657, -0.565]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      >
        <mesh
          name="Plane073"
          geometry={nodes.Plane073.geometry}
          material={TVsetMaterial}
        />
        <mesh
          name="Plane073_1"
          geometry={nodes.Plane073_1.geometry}
          material={TVsetMaterial}
        />
        <mesh
          name="Plane073_2"
          geometry={nodes.Plane073_2.geometry}
          material={TVsetMaterial}
        />
        <mesh
          name="Plane073_3"
          geometry={nodes.Plane073_3.geometry}
          material={TVsetMaterial}
        />
        <mesh
          name="Plane073_4"
          geometry={nodes.Plane073_4.geometry}
          material={TVsetMaterial}
        />
      </group>
      <group
        name="Wall_hung_toilet"
        position={[-0.13, 0.737, -4.419]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          name="body"
          geometry={nodes.body.geometry}
          material={BathroomMaterial}
          position={[0, 0.217, 0.263]}
        />
        <mesh
          name="flush"
          geometry={nodes.flush.geometry}
          material={BathroomMaterial}
          position={[0, 0, -0.395]}
        />
        <group name="seat" position={[0, 0.249, 0.206]}>
          <mesh
            name="Plane006_1"
            geometry={nodes.Plane006_1.geometry}
            material={BathroomMaterial}
          />
          <mesh
            name="Plane006_2"
            geometry={nodes.Plane006_2.geometry}
            material={BathroomMaterial}
          />
        </group>
      </group>
      <group name="Bathroom_Trash_Can" position={[0.348, 0.11, -4.223]}>
        <group name="Bin" rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={BathroomMaterial}
          />
          <mesh
            name="Cube007_1"
            geometry={nodes.Cube007_1.geometry}
            material={BathroomMaterial}
          />
          <mesh
            name="Cube007_2"
            geometry={nodes.Cube007_2.geometry}
            material={BathroomMaterial}
          />
        </group>
      </group>
      <group name="Squary_Sofa" position={[4.108, 0.1, -3.914]}>
        <mesh
          name="under_part"
          geometry={nodes.under_part.geometry}
          material={CornerSofaMaterial}
        />
        <mesh
          name="Wooden_leg"
          geometry={nodes.Wooden_leg.geometry}
          material={CornerSofaMaterial}
        />
      </group>
      <group
        name="Sofa004"
        position={[4.213, 0.1, 2.728]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={sofaMaterial}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={sofaMaterial}
        />
      </group>
      <group
        name="Modern_Wardrobe_02"
        position={[-2.878, 0.1, -4.175]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      >
        <mesh
          name="BASE"
          geometry={nodes.BASE.geometry}
          material={WardrobesMaterial}
          position={[0.003, 0.048, 0]}
        />
        <mesh
          name="DWK1"
          geometry={nodes.DWK1.geometry}
          material={WardrobesMaterial}
          position={[0.866, 0.827, 0.193]}
        >
          <mesh
            name="DW1"
            geometry={nodes.DW1.geometry}
            material={WardrobesMaterial}
            position={[-0.01, -0.071, -0.1]}
          />
        </mesh>
        <mesh
          name="DWK2"
          geometry={nodes.DWK2.geometry}
          material={WardrobesMaterial}
          position={[0.866, 0.564, 0.193]}
        >
          <mesh
            name="DW2"
            geometry={nodes.DW2.geometry}
            material={WardrobesMaterial}
            position={[-0.01, -0.071, -0.1]}
          />
        </mesh>
        <mesh
          name="DWK3"
          geometry={nodes.DWK3.geometry}
          material={WardrobesMaterial}
          position={[0.866, 0.3, 0.193]}
        >
          <mesh
            name="DW3"
            geometry={nodes.DW3.geometry}
            material={WardrobesMaterial}
            position={[-0.01, -0.071, -0.1]}
          />
        </mesh>
        <mesh
          name="INNER-SHELVE"
          geometry={nodes["INNER-SHELVE"].geometry}
          material={WardrobesMaterial}
          position={[-0.253, 0.093, 0]}
        />
        <mesh
          name="MAIN"
          geometry={nodes.MAIN.geometry}
          material={WardrobesMaterial}
          position={[-0.253, 0.093, 0]}
        />
        <mesh
          name="REAR-MAIN"
          geometry={nodes["REAR-MAIN"].geometry}
          material={WardrobesMaterial}
          position={[-0.253, 0.093, 0]}
        />
        <mesh
          name="SDK1"
          geometry={nodes.SDK1.geometry}
          material={WardrobesMaterial}
          position={[-0.678, 2.077, 0.192]}
        >
          <mesh
            name="SD1"
            geometry={nodes.SD1.geometry}
            material={WardrobesMaterial}
            position={[-0.001, 0.01, -0.014]}
          />
        </mesh>
        <mesh
          name="SDK2"
          geometry={nodes.SDK2.geometry}
          material={WardrobesMaterial}
          position={[0.174, 2.077, 0.192]}
        >
          <mesh
            name="SD2"
            geometry={nodes.SD2.geometry}
            material={WardrobesMaterial}
            position={[0, 0.014, -0.014]}
          />
        </mesh>
        <mesh
          name="SHELVES"
          geometry={nodes.SHELVES.geometry}
          material={WardrobesMaterial}
        />
        <group name="SLIDE_1" position={[-0.44, 0.947, 0.17]}>
          <mesh
            name="Plane023"
            geometry={nodes.Plane023.geometry}
            material={WardrobesMaterial}
          />
          <mesh
            name="Plane023_1"
            geometry={nodes.Plane023_1.geometry}
            material={WardrobesMaterial}
          />
        </group>
        <group name="SLIDE_2" position={[0.358, 0.947, 0.147]}>
          <mesh
            name="Plane026"
            geometry={nodes.Plane026.geometry}
            material={WardrobesMaterial}
          />
          <mesh
            name="Plane026_1"
            geometry={nodes.Plane026_1.geometry}
            material={WardrobesMaterial}
          />
        </group>
        <mesh
          name="SP1"
          geometry={nodes.SP1.geometry}
          material={WardrobesMaterial}
          position={[-0.253, 0.124, 0.159]}
          scale={0.853}
        />
        <mesh
          name="SP2"
          geometry={nodes.SP2.geometry}
          material={WardrobesMaterial}
          position={[-0.253, 1.771, 0.159]}
          scale={0.853}
        />
      </group>
      <group
        name="Foshay_Bookcase"
        position={[0.91, 0.1, 1.58]}
        rotation={[0, -1.571, 0]}
      >
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={IkeaBillyMaterial}
          position={[-0.225, 0.316, -0.016]}
        />
        <mesh
          name="Cube102"
          geometry={nodes.Cube102.geometry}
          material={IkeaBillyMaterial}
        />
        <mesh
          name="Cube107"
          geometry={nodes.Cube107.geometry}
          material={IkeaBillyMaterial}
          position={[-0.225, 0.989, -0.016]}
        />
        <mesh
          name="Cube110"
          geometry={nodes.Cube110.geometry}
          material={IkeaBillyMaterial}
          position={[-0.225, 1.654, -0.016]}
        />
        <mesh
          name="Cylinder079"
          geometry={nodes.Cylinder079.geometry}
          material={IkeaBillyMaterial}
          position={[-0.024, 0.415, -0.016]}
        />
        <mesh
          name="Cylinder080"
          geometry={nodes.Cylinder080.geometry}
          material={IkeaBillyMaterial}
          position={[-0.024, 1.088, -0.016]}
        />
        <mesh
          name="Cylinder081"
          geometry={nodes.Cylinder081.geometry}
          material={IkeaBillyMaterial}
          position={[-0.114, 1.658, 0.202]}
        />
      </group>
      <group name="Плоскость" position={[10.858, 0.1, 3.013]}>
        <mesh
          name="Walls"
          geometry={nodes.Walls.geometry}
          material={wallsMaterial}
        />
        <mesh
          name="Walls_1"
          geometry={nodes.Walls_1.geometry}
          material={wallsMaterial}
        />
      </group>

      <group name="Floor" rotation={[0, -1.571, 0]}>
        <mesh
          name="Floor001"
          geometry={nodes.Floor001.geometry}
          material={floorMaterial}
        />
        <mesh
          name="Floor001_1"
          geometry={nodes.Floor001_1.geometry}
          material={floorMaterial}
        />
      </group>

      <mesh
        name="Chair"
        geometry={nodes.Chair.geometry}
        material={WorkDeskMaterial}
        position={[-5.002, 0.1, -3.727]}
        rotation={[0, -1.396, 0]}
      />
      <group name="Coffee_table" position={[3.431, 0.1, -2.65]}>
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={CornerSofaMaterial}
        />
        <mesh
          name="Cube009_1"
          geometry={nodes.Cube009_1.geometry}
          material={CornerSofaMaterial}
        />
      </group>

      <mesh
        name="Wardrobe"
        geometry={nodes.Wardrobe.geometry}
        material={WardrobeClassicMaterial}
        position={[-0.56, 0.101, 3.042]}
        rotation={[0, 0, -Math.PI]}
        scale={-1}
      />

      <mesh
        name="Frestanding_bath"
        geometry={nodes.Frestanding_bath.geometry}
        material={BathroomMaterial}
        position={[-1.062, 0.1, -3.144]}
        rotation={[0, 1.571, 0]}
      />

      <mesh
        name="DoorFrame001"
        geometry={nodes.DoorFrame001.geometry}
        material={DoorsMaterial}
        position={[-2.355, 0.1, -1.849]}
      >
        <mesh
          name="Door001"
          geometry={nodes.Door001.geometry}
          material={DoorsMaterial}
          position={[0.322, 1.05, 0.022]}
          rotation={[0, -1.182, 0]}
        >
          <mesh
            name="Handle_Back001"
            geometry={nodes.Handle_Back001.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.005]}
          />
          <mesh
            name="Handle_Front001"
            geometry={nodes.Handle_Front001.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>

      <mesh
        name="DoorFrame002"
        geometry={nodes.DoorFrame002.geometry}
        material={DoorsMaterial}
        position={[0.61, 0.1, 0.099]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Door002"
          geometry={nodes.Door002.geometry}
          material={DoorsMaterial}
          position={[0.322, 1.05, 0.022]}
          rotation={[0, 1.231, 0]}
        >
          <mesh
            name="Handle_Back002"
            geometry={nodes.Handle_Back002.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.005]}
          />
          <mesh
            name="Handle_Front002"
            geometry={nodes.Handle_Front002.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>
      <mesh
        name="DoorFrame004"
        geometry={nodes.DoorFrame004.geometry}
        material={DoorsMaterial}
        position={[-2.355, 0.1, 0.006]}
      >
        <mesh
          name="Door004"
          geometry={nodes.Door004.geometry}
          material={DoorsMaterial}
          position={[0.322, 1.05, 0.022]}
          rotation={[0, 0.772, 0]}
        >
          <mesh
            name="Handle_Back004"
            geometry={nodes.Handle_Back004.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.005]}
          />
          <mesh
            name="Handle_Front004"
            geometry={nodes.Handle_Front004.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>
      <mesh
        name="DoorFrame005"
        geometry={nodes.DoorFrame005.geometry}
        material={DoorsMaterial}
        position={[-0.559, 0.1, -1.847]}
      >
        <mesh
          name="Door005"
          geometry={nodes.Door005.geometry}
          material={DoorsMaterial}
          position={[0.322, 1.05, 0.022]}
          rotation={[0, -0.528, 0]}
        >
          <mesh
            name="Handle_Back005"
            geometry={nodes.Handle_Back005.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.005]}
          />
          <mesh
            name="Handle_Front005"
            geometry={nodes.Handle_Front005.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>
      <mesh
        name="DoorFrame003"
        geometry={nodes.DoorFrame003.geometry}
        material={DoorsMaterial}
        position={[0.61, 0.1, -1.177]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Door003"
          geometry={nodes.Door003.geometry}
          material={DoorsMaterial}
          position={[-0.322, 1.05, 0.022]}
          rotation={[0, -1.236, 0]}
        >
          <mesh
            name="Handle_Back003"
            geometry={nodes.Handle_Back003.geometry}
            material={DoorsMaterial}
            position={[0.571, 0, -0.005]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            name="Handle_Front003"
            geometry={nodes.Handle_Front003.geometry}
            material={DoorsMaterial}
            position={[0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
      </mesh>
      <mesh
        name="DoorFrame006"
        geometry={nodes.DoorFrame006.geometry}
        material={DoorsMaterial}
        position={[-0.559, 0.1, 0.808]}
      >
        <mesh
          name="Door006"
          geometry={nodes.Door006.geometry}
          material={DoorsMaterial}
          position={[0.322, 1.05, 0.022]}
          rotation={[0, 0.853, 0]}
        >
          <mesh
            name="Handle_Back006"
            geometry={nodes.Handle_Back006.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.005]}
          />
          <mesh
            name="Handle_Front006"
            geometry={nodes.Handle_Front006.geometry}
            material={DoorsMaterial}
            position={[-0.571, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>

      <mesh
        name="Faucet"
        geometry={nodes.Faucet.geometry}
        material={BathroomMaterial}
        position={[-1.566, 0.1, -3.143]}
        rotation={[0, 1.571, 0]}
      />

      <mesh
        name="earth"
        geometry={nodes.earth.geometry}
        material={earthMaterial}
      />
    </motion.group>
  );
}

useGLTF.preload("models/house.gltf");
