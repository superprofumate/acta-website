import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import PortfolioClaritySection from '@/components/sections/PortfolioClaritySection';
import DashboardPreview from '@/components/sections/DashboardPreview';
import DifferentiationSection from '@/components/sections/DifferentiationSection';
import PricingSection from '@/components/sections/PricingSection';
import VisionSection from '@/components/sections/VisionSection';
import DemoCTA from '@/components/sections/DemoCTA';

export const metadata = {
  title: 'ACTA — Legislative Impact Intelligence for Tax Consultants',
  description:
    'ACTA monitors Romanian and European legislative changes, interprets their impact, and tells tax consultants exactly what each client must do next.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WorkflowSection />
      <PortfolioClaritySection />
      <DashboardPreview />
      <DifferentiationSection />
      <PricingSection compact />
      <VisionSection />
      <DemoCTA dark />
    </>
  );
}
