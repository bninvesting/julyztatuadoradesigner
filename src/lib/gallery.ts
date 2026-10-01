import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
import ref3 from "@/assets/ref-3.jpg";
import ref4 from "@/assets/ref-4.jpg";
import ref5 from "@/assets/ref-5.jpg";

/**
 * Galeria — substitua estas imagens pelas fotos reais da tatuadora.
 * Defina `reference: false` quando a foto for um trabalho real do estúdio.
 */
export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  reference: boolean;
  span?: string;
};

export const gallery: GalleryItem[] = [
  { src: ref1, alt: "Referência visual: tatuagem floral em traço fino no ombro", width: 768, height: 1024, reference: true, span: "md:row-span-2" },
  { src: ref2, alt: "Referência visual: tatuagem ornamental em blackwork no antebraço", width: 1024, height: 768, reference: true, span: "md:col-span-2" },
  { src: ref3, alt: "Referência visual: serpente e lua em traço fino no pulso", width: 768, height: 1024, reference: true, span: "md:row-span-2" },
  { src: ref4, alt: "Referência visual: rosa realista em preto e cinza na panturrilha", width: 1024, height: 1024, reference: true },
  { src: ref5, alt: "Referência visual: lettering e borboleta delicados na clavícula", width: 1024, height: 768, reference: true },
];
