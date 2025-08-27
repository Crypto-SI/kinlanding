import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                1. Introduction
              </h2>
              <p>
                Welcome to KIN Protocol (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our protocol and services.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal information that you voluntarily provide
                to us, such as your name, email address, and wallet address when
                you interact with our services. We may also automatically
                collect certain information when you visit, use, or navigate the
                services, such as your IP address, browser type, and operating
                system.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                3. Use of Your Information
              </h2>
              <p>
                We use the information we collect to provide, operate, and
                maintain our services, improve your experience, understand how
                you use our services, and communicate with you.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                4. Disclosure of Your Information
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our services,
                so long as those parties agree to keep this information
                confidential.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                5. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that no security measures are perfect or
                impenetrable.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <h2 className="font-headline text-xl text-foreground pt-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at contact@kinprotocol.example.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}