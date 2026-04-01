import { notFound } from 'next/navigation';
import { projects } from '../../../../data/projects';
import ProjectDetail from './ProjectDetail';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
