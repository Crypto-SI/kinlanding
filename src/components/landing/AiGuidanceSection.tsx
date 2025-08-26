'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { generateLendingGuidance } from '@/app/actions';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SubmitButton } from './SubmitButton';
import { Lightbulb, Bot } from 'lucide-react';

export function AiGuidanceSection() {
  const { toast } = useToast();
  const initialState = {
    message: '',
    guidance: '',
    fields: {},
  };
  const [state, formAction] = useFormState(generateLendingGuidance, initialState);

  useEffect(() => {
    if (state.message && state.message !== 'Success') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-guidance" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            AI-Powered Lending Guidance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Get personalized capital deployment strategies. Our AI adapts to
            your risk profile and market opportunities to help you minimize
            risk.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Get Your Strategy</CardTitle>
              <CardDescription>
                Fill out the form to receive your personalized lending guidance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label>Risk Profile</Label>
                  <RadioGroup
                    name="riskProfile"
                    defaultValue="moderate"
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="conservative" id="r1" />
                      <Label htmlFor="r1">Conservative</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="r2" />
                      <Label htmlFor="r2">Moderate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aggressive" id="r3" />
                      <Label htmlFor="r3">Aggressive</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availableCapital">Available Capital ($)</Label>
                  <Input
                    id="availableCapital"
                    name="availableCapital"
                    type="number"
                    placeholder="e.g., 50000"
                  />
                  {state.fields?.availableCapital && (
                    <p className="text-sm text-destructive">
                      {state.fields.availableCapital[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lendingOpportunities">
                    Lending Opportunities
                  </Label>
                  <Textarea
                    id="lendingOpportunities"
                    name="lendingOpportunities"
                    placeholder="Describe current lending opportunities on the protocol... e.g., 'Pool A for small business loans at 8% APY, Pool B for student loans at 6% APY.'"
                    rows={4}
                  />
                  {state.fields?.lendingOpportunities && (
                    <p className="text-sm text-destructive">
                      {state.fields.lendingOpportunities[0]}
                    </p>
                  )}
                </div>

                <SubmitButton className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Generate Guidance
                </SubmitButton>
              </form>
            </CardContent>
          </Card>

          <div className="lg:mt-0">
            <Card className="min-h-full bg-secondary/50">
              <CardHeader className="flex flex-row items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <CardTitle>Your AI-Generated Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                {state.guidance ? (
                  <div className="whitespace-pre-wrap text-foreground">
                    <p>{state.guidance}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Your personalized strategy will appear here once generated.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
