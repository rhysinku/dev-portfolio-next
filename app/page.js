import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <div className="wrapper">
        <div id="main_con" className="h-full flex items-end">
          <div className="mb-40">
            <div>
              <small className="text-4xl">Hello there, i am</small>
              <h1 className="text-glow text-priColor-800 text-8xl">
                RHYSIN VILLAHERMOSA
              </h1>
              <p>A aspiring web developer</p>
            </div>
            <div className="flex gap-x-5 mt-6">
              <Link href={"/"} className="btn">
                Download Resume
              </Link>
              <Link href={"/"} className="btn">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
