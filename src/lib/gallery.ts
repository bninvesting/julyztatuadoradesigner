import leg from "@/assets/tattoo-image.png.asset.json";
import rose from "@/assets/tattoo-image_1.png.asset.json";
import creature from "@/assets/tattoo-image_2.png.asset.json";
import anime from "@/assets/tattoo-image_3.png.asset.json";

/** Portfólio — fotos reais enviadas pelo estúdio. Proporções originais preservadas. */
export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: creature.url, alt: "Criatura ilustrada com chifres, lua e sombreamento", width: 505, height: 398, featured: true },
  { src: leg.url, alt: "Tatuagem figurativa na perna", width: 399, height: 438 },
  { src: rose.url, alt: "Tatuagem de rosa na mão", width: 401, height: 410 },
  { src: anime.url, alt: "Tatuagem de personagem de anime no antebraço", width: 398, height: 405 },
];
