import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-10">
      <div>
        <p>
          <h1 className="text-black font-bold">
            Copyright &copy;{" "}
            <span className="underline decoration-teal-500">
              shorten<span className="text-teal-500">.</span>it{" "}
            </span>
          </h1>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
