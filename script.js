const box = document.querySelector(".box");
const button = document.querySelector("#startButton");

let clicked = false;

button.addEventListener("click", () => {
  const styles = window.getComputedStyle(box);

  const handleTimeOnlyNumber = (time) => {
    if (time.includes("ms")) {
      return Number(time.replace("ms", ""));
    } else {
      return Number(time.replace("s", "") + "000");
    }
  };

  const time =
    handleTimeOnlyNumber(styles.animationDuration) +
    handleTimeOnlyNumber(styles.animationDelay);

  box.classList.add("animation");

  setTimeout(() => {
    // box.classList.remove("animation");
  }, time + 100);
});
