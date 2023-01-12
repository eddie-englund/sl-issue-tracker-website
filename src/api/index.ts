import { pipe } from 'fp-ts/function';
import { chain, tryCatch } from 'fp-ts/TaskEither';
import type { TaskEither } from 'fp-ts/TaskEither';
import axios from 'axios';
import { z } from 'zod';

export const Vehicles = z.enum([
  'bus',
  'tram',
  'buss-station',
  'train-station',
  'tram-station',
]);

export const Schema = z.object({
  success: z.boolean(),
  data: z.array(
    z.object({
      id: z.string().uuid().trim(),
      created: z.string().transform(d => new Date(d)),
      description: z.string().min(1).max(256),
      vehicle: Vehicles,
    }),
  ),
});

export type Schema = z.infer<typeof Schema>;

export type ReturnTuple = [string, unknown];

export const getIssues: TaskEither<ReturnTuple, Schema> = pipe(
  tryCatch(
    async () =>
      await axios.get(`${import.meta.env.VITE_API_HOST}/issue/get-all`),
    reason => ['Failed to retrieve issues', reason] satisfies ReturnTuple,
  ),
  chain(call =>
    tryCatch(
      async () => await Schema.parseAsync(call.data),
      reason =>
        [
          'Response was not in the exepcted format',
          reason,
        ] satisfies ReturnTuple,
    ),
  ),
);
