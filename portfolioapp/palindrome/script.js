"use strict";
const palindromChecker = function (txt) {
  //txt.toLowerCase(); //Check for upper and lower case and symbols
  const txtLower = txt.toLowerCase();
  let reversed = txtLower.split("").reverse().join("");
  reversed;
  if (reversed === txtLower) {
    console.log(
      `"${txtLower}" spelled backwards is "${reversed}", so it is a palindrome`
    );
    // document
    //   .querySelector(".result")
    //   .setAttribute(
    //     `"${txt}" spelled backwards is "${reversed}", so it is a palindrome`
    //   );
    return true;
  } else {
    console.log(
      `"${txtLower}" is not a palindrome because, spelled backwards it is "${reversed}".`
    );
    // document
    //   .querySelector(".result")
    //   .setAttribute(
    //     `"${txt}" is not a palindrome because, spelled backwards it is"${reversed}".`
    //   );
  }
  return false;
};

palindromChecker("Bob e bob");

// if ((palindromChecker = true)) {
//   document.querySelector("modalwindow").class("hidden");
// }
const palindrom = [];
let newArray = [];
function paliCheckr(palindrom) {
  for (let i = palindrom.length - 1; i >= 0; i--) {
    console.log(palindrom[i]);
    newArray = new Array.push[palindrom[i]]();

    // let [] = [...palindrom];
  }
  console.log(newArray);
}
paliCheckr("bob");

// String toBeChecked; //cuvantul nostru

// toBeChecked > array
// int sizeOfPalindrom = toBeChecked.length;

// // for(i = 0; i < sizeOfPalindrom; i++)
// iteram prin toate pozitiile array-ul
// pozitia 0 o adaugam in alt array pe pozitia sizeofPalindrom;
