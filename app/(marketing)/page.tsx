import { Footer } from "./_components/footer";
import { HeroParallax } from "@/components/hero";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/marketing/1.png",
  },
  {
    title: "Networking",
    link: "https://cursor.so",
    thumbnail:
      "/marketing/2.png",
  },
  {
    title: "Resume/Cover Letter Uploading",
    link: "https://userogue.com",
    thumbnail:
      "/marketing/3.png",
  },
 
  {
    title: "Note Taking",
    link: "https://editorially.org",
    thumbnail:
      "/marketing/4.png",
  },
  {
    title: "Flashcards",
    link: "https://editrix.ai",
    thumbnail:
      "/marketing/5.png",
  },
  {
    title: "Stat Tracking",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/marketing/6.png",
  },
 
  {
    title: "Calendar Heatmap",
    link: "https://algochurn.com",
    thumbnail:
      "/marketing/7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/marketing/8.png",
  },
];

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-0 overflow-x-hidden relative">
        <HeroParallax products={products} />
      </div>
      <Footer />
    </div>
  )
}

export default MarketingPage;