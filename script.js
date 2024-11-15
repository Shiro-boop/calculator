
const btns = document.querySelectorAll('.wrapper__btns__num button'),
      result = document.querySelector('.wrapper__result p'),
      deleteNum = document.querySelector('#delete')

btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        result.innerHTML += `${i}`
    })
})

deleteNum.addEventListener('click', ()=> {
    let resultTime = result.innerHTML;
    result.innerHTML = resultTime.slice(0, -1);
})