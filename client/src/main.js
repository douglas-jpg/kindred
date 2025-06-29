import {
    navbar,
    backToTop,
    scrollProgress,
    initLightbox,
    accordion,
} from './utils/effects';

import { initComments } from './utils/commentsApi';


initComments();

navbar();
backToTop();
scrollProgress();
initLightbox();
accordion();

lucide.createIcons();
