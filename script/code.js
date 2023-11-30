// functionality
const btncalc = document.querySelector("[data-calc]");


let output = document.querySelector("[data-res]");

function add() {
    let num1 = document.querySelector("[data-num1]").value;
    let num2 = document.querySelector("[data-num2]").value;
  let promise = new Promise((resolve, reject) => {
    let res = +num1 + +num2;
    if (typeof num1 == "number" && typeof num2 == "number") {
      resolve(`${num1} + ${num2} = ${res}`);
    } else if (
        typeof num1 !== "number" || typeof num2 !== "number"
    ) {
      reject(`${num1} or ${num2} is not a number!`);
    }
  });

  promise.then(
    (fulfilled) => {
      output.textContent = fulfilled;
    },
    (rejected) => {
        output.textContent = rejected;
    }
  );
}

btncalc.addEventListener("click", add);
