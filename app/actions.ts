'use server'

import { z } from 'zod';
import Airtable, { Error } from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base('appxUoVfshIweTdcA');

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  msg?: string;
};

const saveToAirtable = async (formValues: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = formValues;

  return new Promise((resolve, reject) => {
    base('Table 1').create([
      {
        "fields": {
          "Name": name,
          "Email": email,
          "Message": message,
        }
      }
    ], function (err: Error) {
      if (err) {
        reject(err)
      }
      resolve('New contact successfully saved');
    });
  })
}

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
    
  try {
    await saveToAirtable(validatedFields.data);
    return { msg: 'Saved to airtable successfully' };
  } catch (error) {
    console.error(error);
    return { msg: 'Something went wrong'}
  }
}