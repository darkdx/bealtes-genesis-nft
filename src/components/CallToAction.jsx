import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden border-t border-slate-400/10 bg-slate-50 py-32 "
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            🪲 Beatles Game 🎮
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-900">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button href="/register" color='blue'>Start Game</Button>
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              variant="outline"
            >
              <span>📃 Instruction</span>
            </Button>
          </div>
          {/* <Button href="/register" color="blue" className="mt-10">
            Beatles Game Instruction
          </Button>
          <Button href="/register" color="blue" className="mt-10">
            Beatles Game Instruction
          </Button> */}
        </div>
      </Container>
    </section>
  )
}
