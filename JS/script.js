let add = document.querySelector('#Add')
let sub = document.querySelector('#Sub')
let btn = document.querySelector('#btn')


add.addEventListener('click', () => {
    let oldData = Number(btn.innerHTML)
    sub.disabled = false
    if (oldData < 5) {
        btn.innerHTML = oldData + 1
    } else {
        add.disabled = true
    }
})
sub.addEventListener('click', () => {
    let oldData = Number(btn.innerHTML)
    add.disabled = false
    if (oldData > 0) {
        btn.innerHTML = oldData - 1
    } else {
        sub.disabled = true
    }
})