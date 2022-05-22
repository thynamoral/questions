const check_answer = document.querySelectorAll('.check-answer');
const answer = document.querySelectorAll('.answer');
const rotateSpan = document.querySelectorAll('.rotate');

for(let i=0; i<check_answer.length; i++) {
    check_answer[i].addEventListener('click', () => {
        answer[i].classList.toggle('hidden');
        rotateSpan[i].classList.toggle('hide-span');
    })
}