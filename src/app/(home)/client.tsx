'use client'

import { trpc } from '@/trpc/client'

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: 'Max',
  })
  console.log(data)
  return <div>page client says: {data.greeting}</div>
}
