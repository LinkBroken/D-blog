import Userdata from '@/app/components/postData'
import { Suspense } from 'react'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
      </Suspense>
    </section>
  )}