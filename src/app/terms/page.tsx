import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                1. Agreement to Terms
              </h2>
              <p>
                By using the KIN Protocol (&quot;Protocol&quot;), you agree to be bound by
                these Terms of Service (&quot;Terms&quot;). If you do not agree to these
                Terms, do not use the Protocol.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                2. The Protocol
              </h2>
              <p>
                The Protocol is a decentralized, undercollateralized lending
                platform. We are not a bank or financial institution and do not
                provide lending services ourselves. The Protocol facilitates
                peer-to-peer lending among its users.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                3. Assumption of Risk
              </h2>
              <p>
                You acknowledge that using the Protocol involves significant
                risks, including but not limited to the risk of losing your
                digital assets. You are solely responsible for your own
                investment decisions and for conducting your own due diligence.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                4. Prohibited Activities
              </h2>
              <p>
                You agree not to engage in any of the following prohibited
                activities: (a) any activity that is illegal under applicable
                law; (b) any fraudulent activity; or (c) any activity that
                interferes with or disrupts the Protocol.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                5. Disclaimers
              </h2>
              <p>
                The Protocol is provided &quot;as is&quot; and &quot;as available&quot; without any
                warranties of any kind. We do not warrant that the Protocol will
                be uninterrupted, secure, or error-free.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall we be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                in connection with your use of the Protocol.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                7. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which the project is based,
                without regard to its conflict of law principles.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}