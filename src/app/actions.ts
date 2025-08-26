
'use server';

import {
  getLendingGuidance,
  type LendingGuidanceInput,
} from '@/ai/flows/lending-guidance';
import { z } from 'zod';

const formSchema = z.object({
  riskProfile: z.string().min(1, { message: 'Risk profile is required.' }),
  availableCapital: z.coerce
    .number({ invalid_type_error: 'Please enter a valid amount.' })
    .min(1, { message: 'Available capital must be greater than 0.' }),
  lendingOpportunities: z
    .string()
    .min(10, { message: 'Please describe lending opportunities.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string[] | undefined>;
  guidance?: string;
};

export async function generateLendingGuidance(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    riskProfile: formData.get('riskProfile'),
    availableCapital: formData.get('availableCapital'),
    lendingOpportunities: formData.get('lendingOpportunities'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please check your inputs and try again.',
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: LendingGuidanceInput = {
      riskProfile: validatedFields.data.riskProfile,
      availableCapital: validatedFields.data.availableCapital,
      lendingOpportunities: validatedFields.data.lendingOpportunities,
    };

    const result = await getLendingGuidance(input);

    if (!result.guidance) {
      return {
        message: 'AI failed to generate guidance. Please try again later.',
      };
    }

    return { message: 'Success', guidance: result.guidance };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
