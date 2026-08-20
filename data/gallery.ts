export type GalleryCategory =
  | "Events"
  | "Education"
  | "Community"
  | "Awards"
  | "Workshops"
  | "Founder"
  | "Campaigns";

export type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: GalleryCategory;
  alt: string;
};

export const galleryFilters = [
  "All",
  "Events",
  "Education",
  "Community",
  "Awards",
  "Workshops",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/education-1.jpg",
    title: "Education Initiative",
    category: "Education",
    alt: "Vistamind education initiative placeholder",
  },
  {
    id: 2,
    src: "/images/gallery/community-1.jpg",
    title: "Community Activity",
    category: "Community",
    alt: "Vistamind community activity placeholder",
  },
  {
    id: 3,
    src: "/images/gallery/workshop-1.jpg",
    title: "Learning Workshop",
    category: "Workshops",
    alt: "Vistamind workshop placeholder",
  },
  {
    id: 4,
    src: "/images/gallery/award-1.jpg",
    title: "Recognition Moment",
    category: "Awards",
    alt: "Vistamind recognition placeholder",
  },
  {
    id: 5,
    src: "/images/gallery/event-1.jpg",
    title: "Foundation Event",
    category: "Events",
    alt: "Vistamind foundation event placeholder",
  },
  {
    id: 6,
    src: "/images/gallery/campaign-1.jpg",
    title: "Community Campaign",
    category: "Campaigns",
    alt: "Vistamind campaign placeholder",
  },
];
