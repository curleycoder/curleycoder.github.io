import { notFound } from 'next/navigation';
import { caseStudies } from '../../../data/case-studies';
import { projects } from '../../../data/projects';
import CaseStudyDetail from './CaseStudyDetail';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();
  const project = projects.find((p) => p.slug === slug);
  return <CaseStudyDetail study={study} project={project} />;
}
