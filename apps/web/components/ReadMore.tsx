import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import Headline from "./Headline";
import articlePreview from "../public/article-preview.png";

function ReadMore() {
  return (
    <section className="overflow-hidden text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container py-24 mx-auto ">
        <h3 className="mb-4 text-2xl font-medium text-center text-gray-900 font-display sm:text-5xl title-font dark:text-white">
          Read more
        </h3>
        <p className="text-center">Get more info on other sites.</p>
        <div className="flex justify-center p-4 mt-4">
          <a
            href="https://dev.to/michael_vp/introducing-locatorjs-click-on-react-component-to-get-to-its-code-2oj0"
            className="transition-shadow bg-gray-100 shadow-xl xl:w-1/4 md:w-1/2 rounded-xl hover:shadow-2xl"
          >
            <Image
              className="object-cover object-center w-full h-40 mb-6 rounded"
              src={articlePreview}
              alt="content"
            />
            <div className="p-6 ">
              <h2 className="text-lg font-medium text-gray-900 underline title-font">
                Introducing LocatorJS: Click on React Component to get to its
                code.
              </h2>
              <h3 className="mb-4 text-xs font-medium text-gray-500">
                by Michael Musil on Dev.to
              </h3>
              <p className="text-base leading-relaxed">
                LocatorJS is a Chrome Extension that lets me click on a
                component that I see on my locally running app and open its code
                in my VSCode. With just one simple click.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReadMore;
