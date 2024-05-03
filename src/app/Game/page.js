"use client";
import React, { Fragment } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return (
    <Fragment>
      {!isLoaded && (
        <div className='flex text-white h-screen w-full items-center justify-center bg-black'>
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <div className='min-h-screen'>
      <Unity
      className='min-h-screen'  
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
      </div>
    </Fragment>
  );
}
