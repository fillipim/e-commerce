function formValidation() {
    let form = document.getElementById("form")
    let inputs = document.getElementsByTagName("input");
    let errors = document.getElementsByTagName("small");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        Array.from(inputs).forEach((item, index, array) => {
            if (!item.value) {
                errors[index].classList.add("error-message-active")
            }
        })
    });

    Array.from(inputs).forEach((input, index) => {

        input.addEventListener("keyup", (ev) => {
            if (ev.target.value) {
                errors.item(index).classList.remove("error-message-active")
            }
        })
    })

}

formValidation()

document.getElementsByTagName("input")[0].addEventListener("keyup", (ev) => {
    console.log(ev.target.value);
})