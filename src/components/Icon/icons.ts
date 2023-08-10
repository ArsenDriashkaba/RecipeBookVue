import { addIcons } from 'oh-vue-icons';
import {
  RiArrowGoBackFill,
  RiDeleteBin6Fill,
  RiHeart3Fill,
  RiHeart3Line,
  RiHome3Fill,
  RiLayoutGridFill,
  RiListCheck,
  RiSearchLine,
} from 'oh-vue-icons/icons';

addIcons(
  RiHome3Fill,
  RiHeart3Fill,
  RiHeart3Line,
  RiDeleteBin6Fill,
  RiArrowGoBackFill,
  RiSearchLine,
  RiLayoutGridFill,
  RiListCheck,
);

export const icons = {
  home: RiHome3Fill.name,
  likeFill: RiHeart3Fill.name,
  likeOutline: RiHeart3Line.name,
  deleteBin: RiDeleteBin6Fill.name,
  backArrow: RiArrowGoBackFill.name,
  search: RiSearchLine.name,
  grid: RiLayoutGridFill.name,
  list: RiListCheck.name,
};

export type IconName = keyof typeof icons;
