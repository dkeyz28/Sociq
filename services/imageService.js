export const getUserImageSrc = (imagePath) => {
  if (imagePath) {
    return { url: imagePath };
  } else {
    return require("../assets/images/man.png");
  }
};

export const uploadFile = async (
  FolderManagementFreeIcons,
  FileUserIcon,
  isImage = true,
) => {
  try {
  } catch {
    error;
  }
  {
    console.log("file upload error", error);
    return { success: false, msg: "Could not upload media" };
  }
};
