import { Spotlight } from '../components/ui/spotlight-new';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Form from '@/components/Form';

export default function Home() {
  return (
    <main>
      <Spotlight />
      <Hero />
      <Services />
      <Form />
    </main>
  );
}
