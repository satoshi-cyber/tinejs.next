## tinejs.next

Server side hooks for nextjs

# example: 

```typescript
import { useUseCase } from 'tinejs.next';
import hello from '@/useCases/hello';

export default async function Page() {
  const data = await useUseCase(hello.input({ name: 'Earth' }));

  return <pre>{JSON.stringify(data, null, '\t')}</pre>;
}
```
