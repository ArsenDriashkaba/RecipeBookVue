import { addIcons } from 'oh-vue-icons';
import { RiHeart3Fill, RiHeart3Line, RiHome3Fill } from 'oh-vue-icons/icons';

addIcons(RiHome3Fill, RiHeart3Fill, RiHeart3Line);

export const icons = {
  home: RiHome3Fill.name,
  likeFill: RiHeart3Fill.name,
  likeOutline: RiHeart3Line.name,
};

export type IconName = keyof typeof icons;
