import { featureList } from "@/lib/features"

import { AboutCard } from "../Common/AboutCard"

export const Features = () => {
  return (
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Encrypt. Secure. Simplify. Take control of your passwords with Master
          Pass, the open-source solution for safeguarding your digital life.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
        {featureList.map((feature, index) => {
          return (
            <AboutCard
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}
