
export default async function uploadImage(imageUri) {
  const data = new FormData();

  data.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "upload.jpg",
  });

  data.append("upload_preset", "vkphklym");
  data.append("cloud_name", "dfxjnkfoa");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfxjnkfoa/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const result = await res.json();
    return ( result.secure_url );

  } catch (error) {
    console.log("Upload error:", error);
  }
};

