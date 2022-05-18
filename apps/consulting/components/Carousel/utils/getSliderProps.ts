import { TTiles } from '@quansight/shared/types';

import { MAX_LIBRARY_SLIDES } from './constants';

export const getCarouselProps = (tiles: TTiles): TTiles =>
  tiles.length <= MAX_LIBRARY_SLIDES
    ? tiles
    : tiles.slice(0, MAX_LIBRARY_SLIDES);
