import { EncodingType, readAsStringAsync } from 'expo-file-system';

export const formatFilePathToBase64 = async (
  filePath: string,
): Promise<string> => {
  const fileExtension = filePath.split('.').pop();
  const base64Img = await readAsStringAsync(filePath, {
    encoding: EncodingType?.Base64,
  });

  return `data:image/${fileExtension};base64,${base64Img}`;
};
