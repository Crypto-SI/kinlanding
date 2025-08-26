'use server';

/**
 * @fileOverview An AI agent that provides personalized lending guidance.
 *
 * - getLendingGuidance - A function that provides personalized guidance to lenders on capital deployment strategies.
 * - LendingGuidanceInput - The input type for the getLendingGuidance function.
 * - LendingGuidanceOutput - The return type for the getLendingGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LendingGuidanceInputSchema = z.object({
  riskProfile: z
    .string()
    .describe(
      'The lenders risk profile, can be conservative, moderate, or aggressive.'
    ),
  availableCapital: z
    .number()
    .describe('The amount of capital the lender has available to deploy.'),
  lendingOpportunities: z
    .string()
    .describe('The available lending opportunities on the KIN Protocol.'),
});
export type LendingGuidanceInput = z.infer<typeof LendingGuidanceInputSchema>;

const LendingGuidanceOutputSchema = z.object({
  guidance: z.string().describe('The personalized lending guidance.'),
});
export type LendingGuidanceOutput = z.infer<typeof LendingGuidanceOutputSchema>;

export async function getLendingGuidance(
  input: LendingGuidanceInput
): Promise<LendingGuidanceOutput> {
  return lendingGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'lendingGuidancePrompt',
  input: {schema: LendingGuidanceInputSchema},
  output: {schema: LendingGuidanceOutputSchema},
  prompt: `You are an AI-powered lending guidance tool for the KIN Protocol, a decentralized, undercollateralized lending platform.

You will provide personalized guidance to lenders on capital deployment strategies, including diversification, to minimize risk.

Adapt your recommendations to the user's risk profile and available lending opportunities.

Risk Profile: {{{riskProfile}}}
Available Capital: {{{availableCapital}}}
Lending Opportunities: {{{lendingOpportunities}}}

Guidance:`,
});

const lendingGuidanceFlow = ai.defineFlow(
  {
    name: 'lendingGuidanceFlow',
    inputSchema: LendingGuidanceInputSchema,
    outputSchema: LendingGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
