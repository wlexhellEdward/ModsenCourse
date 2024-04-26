function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Ввод должен быть числом типа INT");
  }
}

try {
  validateInteger(5);
  console.log("5 это целочисленное");
  validateInteger(3.14);
  console.log("3.1 это не целочисленное");
} catch (error) {
  console.log(error.message);
}
