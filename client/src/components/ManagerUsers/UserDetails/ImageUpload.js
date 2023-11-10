import React, { useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const preset_key = "474712195996988";
  const upload_url = `https://api.cloudinary.com/v1_1/dtcoefjmm/BugTrackerProfileImages/upload`;
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    axios
      .post(upload_url, formData)
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      })
      .catch((error) => {
        console.error("Error uploading the image:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e)} />
    </div>
  );
}
