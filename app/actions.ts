'use server'

import { z } from 'zod';

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  msg?: string;
};

export const saveForm = async (prevState: FormState, formData: FormData) => {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const schema = z.object({
    name: z.string().min(1, { message: 'Cannot be empty' }),
    email: z.string().email().min(1, { message: 'Cannot be empty' }),
    message: z.string().min(1, { message: 'Cannot be empty' }),
  })

  const validatedFields = schema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      msg: 'Failed to validate inputs'
    }
  }

  // if successful, then return ??
  // save to airtable first
  // make a post request with data in body
  // if request fails, return error message (network error)
  // if request succeeds, return success message

  return { msg: 'inputs successfully validated'};
}