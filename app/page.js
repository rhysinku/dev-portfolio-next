"use client";
import GradientButton from "./components/Buttons/GradientButton";
import SocialMediaBox from "./components/SocialMedia/SocialMediaBox";

import HeaderText from "./components/Text/HeaderText";
import ParagraphText from "./components/Text/ParagraphText";
export default function Home() {
  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-hidden">
      <div className="wrapper">
        <div id="main_con" className="h-full flex items-end">
          <div className="mb-40">
            <div>
              <SocialMediaBox />
              <small className="text-4xl">
                <ParagraphText prgh={"Hello there, i am"} />
              </small>
              <h1 className="text-8xl text-priColor-800 drop-shadow-glow">
                <HeaderText word={"Rhysin Villahermosa"} isDrag={true} />
              </h1>
              <p>An aspiring full stack developer | graphic artist</p>
            </div>
            <div className="flex gap-x-5 mt-6">
              <GradientButton href={"/"}> Download Resume </GradientButton>
              <GradientButton href={"/contact"}> Contact Me </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
