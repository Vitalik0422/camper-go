import Hero from '@/components/Hero/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Campers',
  description: 'Home page of Campers with a catalog overview and road trip inspiration.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Home | Campers',
    description:
      'Home page of Campers with a catalog overview and road trip inspiration.',
    type: 'website',
    siteName: 'Campers',
    url: process.env.NEXT_PUBLIC_BACKEND_URL,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/career/campers/cruise-america-c-21/cruise-america-c-21-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Home | Campers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Campers',
    description:
      'Home page of Campers with a catalog overview and road trip inspiration.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/career/campers/cruise-america-c-21/cruise-america-c-21-3.jpg',
        alt: 'Home | Campers',
      },
    ],
  },
};

export default function Home() {
  return <Hero />;
}
