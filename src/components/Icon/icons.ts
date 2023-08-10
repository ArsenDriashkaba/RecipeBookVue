import { addIcons } from 'oh-vue-icons';
import {
  RiArrowGoBackFill,
  RiDeleteBin6Fill,
  RiFileListFill,
  RiFileListLine,
  RiHeart3Fill,
  RiHeart3Line,
  RiHome3Fill,
  RiLayoutGridFill,
  RiLayoutGridLine,
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
  RiFileListFill,
  RiLayoutGridLine,
  RiFileListLine,
);

export const icons = {
  home: RiHome3Fill.name,
  likeFill: RiHeart3Fill.name,
  likeOutline: RiHeart3Line.name,
  deleteBin: RiDeleteBin6Fill.name,
  backArrow: RiArrowGoBackFill.name,
  search: RiSearchLine.name,
  grid: RiLayoutGridFill.name,
  gridLine: RiLayoutGridLine.name,
  list: RiFileListFill.name,
  listLine: RiFileListLine.name,
};

export type IconName = keyof typeof icons;
