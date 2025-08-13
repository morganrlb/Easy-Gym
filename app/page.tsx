import { Spotlight } from '../components/ui/spotlight-new';
import Hero from '@/components/Hero';
import CourseSection from '@/components/CourseSection';
import Services from '@/components/Services';
import Form from '@/components/Form';
import OpenTransition from '@/components/animations/OpenTransition';

export default function Home() {
  return (
    <>
      <Spotlight/>
      <OpenTransition>
        <Hero />
        <CourseSection />
        <Services />
        <Form />
      </OpenTransition>
    </>
  );
}