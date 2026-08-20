import {
  BookOpen,
  Cpu,
  HandHeart,
  Lightbulb,
  Network,
  Scale,
  Users,
} from "lucide-react";

export const brand = {
  name: "Vistamind Social Foundation",
  tagline: "Empowering Futures Through Education",
  email: "info@vistamind.org",
  phone: "+91 00000 00000",
  address: "Foundation address to be updated",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const impactStats = [
  { value: "18+", label: "Years of Education Experience", numeric: 18 },
  { value: "60+", label: "Awards & Recognitions", numeric: 60 },
  { value: "Multiple", label: "Education Initiatives" },
  { value: "Community", label: "Driven Impact" },
];

export const trustItems = [
  {
    label: "Government Recognition",
    image: "/images/partners/partner-1.jpg",
  },
  {
    label: "Community Partnerships",
    image: "/images/partners/partner-2.jpg",
  },
  {
    label: "Education Initiatives",
    image: "/images/partners/partner-3.jpg",
  },
  {
    label: "Awards & Recognition",
    image: "/images/partners/partner-4.jpg",
  },
];

export const workCards = [
  {
    icon: BookOpen,
    title: "Education Focused",
    description:
      "Programs shaped around access, learning confidence and future-ready growth.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Work designed with families, educators and local communities at the center.",
  },
  {
    icon: Network,
    title: "Multi-Stakeholder Support",
    description:
      "Partnership-ready initiatives that can align institutions, volunteers and supporters.",
  },
  {
    icon: Scale,
    title: "Equal Opportunity",
    description:
      "A commitment to meaningful learning pathways for children and communities.",
  },
];

export const ecosystemNodes = [
  { label: "Education Programs", icon: BookOpen },
  { label: "Active Learning", icon: Lightbulb },
  { label: "Technology Integration", icon: Cpu },
  { label: "Community Awareness", icon: Users },
  { label: "Child Development", icon: HandHeart },
  { label: "Skill Development", icon: Network },
  { label: "Future Recognition", icon: Scale },
];
