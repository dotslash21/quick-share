import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify min-w-full">
        <div className="text-center lg:text-right pl-28">
          <h1 className="text-5xl font-bold">Share files without limits!</h1>
          <p className="py-6">
            Share your files directly from your device without storing anything
            online.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;
                <span>files anywhere or</span>
              </p>
              <input
                id="hidden-input"
                type="file"
                multiple
                className="hidden"
              />
              <div className="form-control mt-6">
                <button className="btn btn-primary">Browse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
