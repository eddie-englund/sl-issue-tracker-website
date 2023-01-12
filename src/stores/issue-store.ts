import { defineStore } from 'pinia';
import type { Schema, ReturnTuple } from '@/api';
import type { TaskEither } from 'fp-ts/TaskEither';
import type { Either } from 'fp-ts/lib/Either';

export const useIssueStore = defineStore({
  id: 'issues',
  state: () => ({
    issues: {} as Either<ReturnTuple, Schema>,
  }),
});
