import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to TailwindXpress <br className="hidden sm:inline" />
          Empower Your Creativity, Ignite Your Code
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Unleash the full potential of Tailwind CSS with TailwindXpress – Your
          Ultimate Resource Hub! Elevate your development experience with
          curated blogs, powerful code snippets, a rich components library, and
          a handy cheatsheet. TailwindXpress is your catalyst for creativity,
          efficiency, and innovation in modern CSS.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
