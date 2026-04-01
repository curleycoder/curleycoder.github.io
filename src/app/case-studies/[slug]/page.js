import { notFound } from 'next/navigation';
import { caseStudies } from '../../../../data/case-studies';
import CaseStudyDetail from './CaseStudyDetail';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
