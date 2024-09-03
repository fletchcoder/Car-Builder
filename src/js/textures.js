import { TextureLoader } from "three";
import images from "./images";

const blackWoolTexture = new TextureLoader().load(images.blackWool);
const blueWoolTexture = new TextureLoader().load(images.blueWool);
const brownWoolTexture = new TextureLoader().load(images.brownWool);
const cyanWoolTexture = new TextureLoader().load(images.cyanWool);
const grayWoolTexture = new TextureLoader().load(images.grayWool);
const greenWoolTexture = new TextureLoader().load(images.greenWool);
const lightBlueWoolTexture = new TextureLoader().load(images.lightBlueWool);
const lightGrayWoolTexture = new TextureLoader().load(images.lightGrayWool);
const limeWoolTexture = new TextureLoader().load(images.limeWool);
const magentaWoolTexture = new TextureLoader().load(images.magentaWool);
const orangeWoolTexture = new TextureLoader().load(images.orangeWool);
const whiteWoolTexture = new TextureLoader().load(images.whiteWool);
const yellowWoolTexture = new TextureLoader().load(images.yellowWool);
const blackGlassTexture = new TextureLoader().load(images.blackGlass);
const cyanGlassTexture = new TextureLoader().load(images.cyanGlass);
const blueGlassTexture = new TextureLoader().load(images.blueGlass);
const grayGlassTexture = new TextureLoader().load(images.grayGlass);
const blockWheelTexture = new TextureLoader().load(images.blockWheel);
const spiralWheelTexture = new TextureLoader().load(images.spiralWheel);
const groundTexture = new TextureLoader().load(images.ironBlock);

const textures = {
    blackWoolTexture,
    blueWoolTexture,
    brownWoolTexture,
    cyanWoolTexture,
    grayWoolTexture,
    greenWoolTexture,
    lightBlueWoolTexture,
    lightGrayWoolTexture,
    limeWoolTexture,
    magentaWoolTexture,
    orangeWoolTexture,
    whiteWoolTexture,
    yellowWoolTexture,
    blackGlassTexture,
    cyanGlassTexture,
    blueGlassTexture,
    grayGlassTexture,
    blockWheelTexture,
    spiralWheelTexture,
    groundTexture,
};

export default textures;
