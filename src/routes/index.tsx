import { Hero } from '@/components/home-page/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
 

  return (
    <section className='mt-10 px-4'>
    <Hero/>
    </section>
  )
}
