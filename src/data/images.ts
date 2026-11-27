import type { ImageMetadata } from 'astro';
import type { Project } from './site';
import eventHorizon from '../assets/event-horizon.jpg';
import novachat from '../assets/novachat.jpg';
import campusflow from '../assets/campusflow.jpg';
import galiNau from '../assets/gali-nau.jpg';

export const projectImages: Record<Project['slug'], ImageMetadata> = {
  'event-horizon': eventHorizon,
  novachat,
  campusflow,
  'gali-nau': galiNau,
};

/** Responsive widths that never ask for more pixels than the source has. */
export const widthsFor = (image: ImageMetadata) => [480, 800, 1200, 1440].filter((w) => w < image.width).concat(image.width);
