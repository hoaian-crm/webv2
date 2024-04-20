import Core from "@/services/core"

export const useUpload = () => {

  const uploadAvatar = async (file: File) => {
    const response = await Core.Upload.uploadFile({
      file,
      type: 'avatar'
    })
    return response.data.data.result;
  }

  return {
    uploadAvatar
  }
}
