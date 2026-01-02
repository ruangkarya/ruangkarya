import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}