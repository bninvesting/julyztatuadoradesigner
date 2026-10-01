/** Portfólio — fotos reais enviadas pelo estúdio. Proporções originais preservadas. */
export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: "/tattoo-lobo.png", alt: "Tatuagem de lobo com lua e sombreamento", width: 505, height: 398, featured: true },
  { src: "/tattoo-deusa.png", alt: "Tatuagem de deusa na perna", width: 399, height: 438 },
  { src: "/tattoo-rosa.png", alt: "Tatuagem de rosa na mão", width: 401, height: 410 },
  { src: "/tattoo-josuke.png", alt: "Tatuagem de Josuke no antebraço", width: 398, height: 405 },
];
