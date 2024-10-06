import "./style.css";
const small = "abcdefghijklmnopqrstuvwxyz";
const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "@!#$%&";
const password = document.getElementById("password");
const checkList = document.querySelectorAll('input[type="checkbox"]');
const createBtn = document.getElementById("create");
const copy = document.getElementById("copy");
let str = "";

createBtn.addEventListener("click", (e) => {
  const length = document.getElementById("length").value;
  if (+length >= 5 || +length.value <= 70) {
    e.preventDefault();
    str = "";
    let pattern = "";
    checkList.forEach((checkbox) => {
      if (checkbox.checked) {
        if (checkbox.id === "numbers") pattern += number;
        else if (checkbox.id === "smallAlpabet") pattern += small;
        else if (checkbox.id === "largeAlpabet") pattern += large;
        else if (checkbox.id === "symbols") pattern += symbol;
      }
    });
    for (let i = 0; i < +length; i++) {
      str += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    password.innerText = str;
  }
});

const copyPassword = () => {
  if (str === "") {
    alert("생성한 비밀번호가 없습니다.");
    return;
  }

  navigator.clipboard
    .writeText(str)
    .then(() => {
      alert("텍스트가 복사되었습니다: " + str);
    })
    .catch((err) => {
      console.error("복사에 실패했습니다.", err);
    });
};

copy.addEventListener("click", copyPassword);
