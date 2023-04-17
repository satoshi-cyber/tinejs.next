import { TineAction, TineCtx } from './types';
import { cookies, headers } from 'next/headers';

export function useUseCase<T>(
  useCase: TineAction<T>,
  options?: {
    ctx?: TineCtx;
  },
) {
  const ctx = options?.ctx || new Map();

  ctx.set('headers', headers());
  ctx.set('cookies', cookies());

  return useCase.run({ ctx });
}
