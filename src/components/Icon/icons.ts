import { addIcons } from 'oh-vue-icons';
import {
  RiDeleteBin6Fill,
  RiHeart3Fill,
  RiHeart3Line,
  RiHome3Fill,
} from 'oh-vue-icons/icons';

addIcons(RiHome3Fill, RiHeart3Fill, RiHeart3Line, RiDeleteBin6Fill);

export const icons = {
  home: RiHome3Fill.name,
  likeFill: RiHeart3Fill.name,
  likeOutline: RiHeart3Line.name,
  deleteBin: RiDeleteBin6Fill.name,
};

export type IconName = keyof typeof icons;
