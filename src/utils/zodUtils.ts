import { z } from 'zod';

export const getSchemaShape = (schema: z.ZodType<any, any>) => {
  if (schema instanceof z.ZodEffects) {
    return (schema.innerType() as z.ZodObject<any>).shape;
  }
  return (schema as z.ZodObject<any>).shape;
};