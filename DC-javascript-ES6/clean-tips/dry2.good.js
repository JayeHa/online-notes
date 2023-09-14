// ❓✨
function validateBody(body) {
  const attributes = ["id", "name", "count"];
  attributes.forEach((attribute) => {
    if (!body[attribute]) {
      throw new Error(
        `Validation failed. the attribute "${attribute}" is missing.`
      );
    }
  });
}
