export const makeUrlPath = (
  endpointUrl: string,
  pathParams?: URLSearchParams,
): string => {
  if (!pathParams) {
    return endpointUrl;
  }

  return Array.from(pathParams.keys()).reduce((output, key) => {
    const pattern = new RegExp(`:${key}`, 'g');

    return output.replace(pattern, pathParams.get(key) as string);
  }, endpointUrl);
};
