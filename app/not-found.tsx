import { Metadata } from 'next';
import NotFoundClient from '@/components/not-found-client'; // this is where the actually page is found, i got an error with use client

export const metadata: Metadata = {
  title: 'Page Not Found | Antonio Archer Portfolio',
  description: 'The page you\'re looking for doesn\'t exist or has been moved.',
};

export default function NotFound() {
  return <NotFoundClient />;
}
