import validator from "validator";

export default (data: Record<string, string | number | boolean>) => {
  const result: Record<string, string | number | boolean> = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "string") {
      result[key] = validator.escape(value);
    } else {
      result[key] = value;
    }
  });

  return result;
};
