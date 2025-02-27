import bgImage from '@/work-dir/bg-image.jpg'
// import Script from "next/script";

import Image from "next/image"

export default function Home() {
  return (
    <section className="relative z-0 h-screen flex justify-center items-center bg-slate-500">
      <Image className='-z-10 absolute inset-0 w-full h-full object-cover' src={bgImage} alt="bg image" width={600} height={600} />
      <h1>Witaj!</h1>
    </section>
  )
}
