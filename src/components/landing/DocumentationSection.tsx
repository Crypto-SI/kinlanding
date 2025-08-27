import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Circle, CircleCheck, CircleDot } from 'lucide-react';

const documentationItems = [
  {
    title: 'Whitepaper',
    status: 'Completed',
    icon: CircleCheck,
    description:
      'The foundational document outlining the KIN Protocol, its vision, and technical architecture.',
  },
  {
    title: 'Technical Documentation',
    status: 'In Progress',
    icon: CircleDot,
    description:
      'Detailed documentation for developers, covering smart contracts, APIs, and SDKs.',
  },
  {
    title: 'User Guides',
    status: 'In Progress',
    icon: CircleDot,
    description:
      'Comprehensive guides for borrowers, lenders, and vouchers on how to use the protocol.',
  },
  {
    title: 'API Reference',
    status: 'Not Started',
    icon: Circle,
    description:
      'A complete reference for all available API endpoints and their usage.',
  },
  {
    title: 'Security Audit Reports',
    status: 'Not Started',
    icon: Circle,
    description:
      'Third-party security audit reports and findings for the protocol smart contracts.',
  },
  {
    title: 'Brand Guide',
    status: 'Not Started',
    icon: Circle,
    description:
      'Guidelines for using the KIN Protocol brand assets, including logos, colors, and typography.',
  },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'outline' } = {
  Completed: 'default',
  'In Progress': 'secondary',
  'Not Started': 'outline',
};

const statusIconColor = {
  Completed: 'text-green-500',
  'In Progress': 'text-yellow-500',
  'Not Started': 'text-muted-foreground',
};

export function DocumentationSection() {
  return (
    <section id="documentation" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Project Documentation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Track the development and completion status of our key documents.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {documentationItems.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={`h-6 w-6 ${
                        statusIconColor[
                          item.status as keyof typeof statusIconColor
                        ]
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14">
                  <div className="flex flex-col gap-4">
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Status:</span>
                      <Badge variant={statusVariant[item.status]}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
