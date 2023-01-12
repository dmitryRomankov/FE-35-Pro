export const objectToFormData = <T extends { [key: string]: string }>(
  obj: T
): FormData => {
  const formData = new FormData();

  for (let prop in obj) {
    formData.append(`${prop}`, obj[prop]);
  }

  return formData;
};
