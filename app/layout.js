import BackgroundLayout from "./components/Background/BackgroundLayout";
import Cursor from "./components/Cursor";
import NavigationBar from "./components/NavigationBar";
import "./globals.scss";

export const metadata = {
  title: "Rhysin Portfolio",
  description:
    "Hello! I'm Rhysin Villahermosa , a budding web developer driven by my love for creating captivating online experiences. I'm on a quest to become a proficient full stack developer, adept at both frontend and backend technologies. Being self-taught, I thrive on the journey of discovery and hands-on learning. I'm dedicated to ongoing improvement, aspiring to make valuable contributions to the dynamic realm of web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="isolate">
        <div className="w-screen relative">
          <div className="absolute w-full h-full  top-0 bottom-0 z-[-1] overflow-hidden">
            <BackgroundLayout />
          </div>
          <NavigationBar></NavigationBar>

          <div id="container" className="w-screen">
            {children}
          </div>
        </div>
        <Cursor />
      </body>
    </html>
  );
}
