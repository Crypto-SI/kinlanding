import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const communityLinks = [
  {
    icon: Users,
    title: 'Part of CryptoSI DAO',
    description:
      'KIN Protocol is a proud member of the CryptoSI DAO, a decentralized autonomous organization dedicated to fostering innovation in the crypto space.',
    link: '#',
    linkLabel: 'Learn about the DAO',
  },
  {
    icon: Github,
    title: 'Open Source & Collaborative',
    description:
      'Our codebase is fully open source. We encourage developers to contribute, review, and build upon our work to strengthen the ecosystem.',
    link: '#',
    linkLabel: 'View on GitHub',
  },
  {
    icon: MessageCircle,
    title: 'Join the Discussion',
    description:
      'Fierce debate and vibrant discussions about the future of KIN Protocol are happening now on the Bitcoin Talk forums.',
    link: '#',
    linkLabel: 'Go to Bitcoin Talk',
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Join a Thriving Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Our project is built on transparency and community collaboration.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {communityLinks.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={item.link}>
                    {item.linkLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
