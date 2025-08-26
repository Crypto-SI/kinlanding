import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const useCases = [
  {
    title: 'Small Business Funding',
    description:
      'An entrepreneur in Southeast Asia secured a loan to expand her e-commerce business, vouched for by her local merchant association.',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'small business',
  },
  {
    title: 'Education Loans',
    description:
      'A student from South America is funding their university education through a loan co-signed by alumni from their future program.',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'student education',
  },
  {
    title: 'Community Projects',
    description:
      'A cooperative in Africa received funding for a solar-powered irrigation system, enabling them to increase crop yields and local food security.',
    image: 'https://picsum.photos/600/400?random=3',
    hint: 'community project',
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Real-World Impact
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            See how KIN Protocol empowers individuals and communities across the
            globe.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(useCase => (
            <Card key={useCase.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={useCase.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline">{useCase.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
