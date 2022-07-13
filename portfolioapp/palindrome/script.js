function palindromChecker(txt) {
  let reversed = txt.split("").reverse().join("");
  if (reversed === txt) {
    console.log(
      `"${txt}" spelled backwards is "${reversed}", so it is a palindrome`
    );
    document
      .querySelector(".result")
      .setAttribute(
        `"${txt}" spelled backwards is "${reversed}", so it is a palindrome`
      );
    return true;
  } else {
    document
      .querySelector(".result")
      .setAttribute(
        `"${txt}" is not a palindrome because, spelled backwards it is"${reversed}".`
      );
    console.log(
      `"${txt}" is not a palindrome because, spelled backwards it is"${reversed}".`
    );
  }
  return false;
}

console.log(palindromChecker("eye"));

// if ((palindromChecker = true)) {
//   document.querySelector("modalwindow").class("hidden");
// }
