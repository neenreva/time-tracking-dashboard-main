const timeSpan = document.querySelectorAll(".time-toggle");
const cards = document.querySelectorAll(".time");

timeSpan.forEach((el) => {
  el.addEventListener("click", function () {
    timeSpan.forEach(el => el.classList.remove('active'))
    el.classList.add('active'); 
    let timePeriod = `card__${el.innerHTML.toLowerCase()}`;
    cards.forEach((el) => {
        el.classList.add('hidden');
        el.classList.contains(timePeriod) ?
        el.classList.toggle('hidden') :
        el.classList.add('hidden')
    });
  });
});