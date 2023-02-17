import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function VideoUpload() {
  const [img, setImg] = useState(" ");
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setImg(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {isDragActive ? (
        <div>
          <p>Let go of the video to upload</p>
        </div>
      ) : (
        <div>
          <p>
            Drag and drop a video file here, or click to select a video file
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;
