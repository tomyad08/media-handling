import React from "react";
import Dropzone, { Preview } from "react-dropzone-uploader";

const App = () => {
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      multiple={false}
      canCancel={false}
      accept="image/*"
      inputContent="Drag and Drop Image"
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    >
      <Preview />
    </Dropzone>
  );
};

export default App;
