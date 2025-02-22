import TestImage from "@/components/test-image";
import { getFolderMarkups, getMarkup } from "@/libs/utils";
// import Script from "next/script";

export default function Home() {
  const hero = getMarkup("content/homepage", "hero.md");
  if (!hero) {
    return (
      <main>
        <p>Sorry! There is problem with loading data.</p>
      </main>
    );
  }

  const { data } = hero;
  const markups = getFolderMarkups("content/homepage");
  console.log(markups);
  return (
    <>
      {/* Enables registering from this page */}
      {/* <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" /> */}
      <main>
        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-lg">{data.subtitle}</p>
          <button>{data.buttonText}</button>
          <input type="text" inputMode='numeric' className="border border-black rounded-md" />
        </div>
        <TestImage />
      </main>
    </>
  );
}
