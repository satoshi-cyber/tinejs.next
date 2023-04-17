import { z } from 'zod';

export const tineCtx = (value: object) => new Map(Object.entries(value));

export const tineInput = <T>(schema: z.ZodType<T>, args: { name: string }) =>
  Object.assign(schema, args);
