import { TineAction, TineActionWithInput, TineCtx } from 'tinejs';
import { unstable_serialize } from 'swr';

export async function useSWRProps<T, I>(
  useCase: TineActionWithInput<T, I> | TineAction<T>,
  input: I,
  options?: {
    ctx?: TineCtx;
  },
) {
  const { ctx = new Map() } = options ?? {}

  if('input' in useCase){
    const data = await useCase.input(input).run(ctx);

    return {
      [unstable_serialize([useCase.input(input).name, input])]: data
    }
  }

  const data = await useCase.run(ctx);

  return {
    [unstable_serialize(useCase.name)]: data
  }
}
