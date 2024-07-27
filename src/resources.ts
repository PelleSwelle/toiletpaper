import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import toiletpaper from './images/toiletpaper.png';

export const Resources = {
  Sword: new ImageSource(sword),
  Roll: new ImageSource(toiletpaper)
} as const;

export const loader = new Loader();

for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
