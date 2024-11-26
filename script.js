const checkbox = document.getElementsByName("divStyle");

const textFields = document.querySelectorAll(".textfield");

const button = document.getElementById("addButton");

const secretDiv = document.querySelector(".secretDiv");




function inputListener (e) {
    const name = e.target.name;
    const value = e.target.values;
    const html = `<p>Fältet ${name} har värdet ${value}</p>`;
    secretDiv.insertAdjacentHTML(`afterbegin`, html);

    return html
}

textFields.forEach(field => {
  field.addEventListener('keydown', inputListener => {
    if (inputListener.key == 'Enter') {
      secretDiv.insertAdjacentHTML(`afterbegin`, inputListener);
    }})
});
// textFields.forEach(field => {
//         field.addEventListener('input', inputListener);
//     });


// textFields.forEach((field) => field.addEventListener('input', inputListener))

// function inputListener(e) {
//     inputValue = textFields.values;
//     secretDiv.textContent = inputValue
//     console.log(inputValue);
// }

// inputListener()
// textFields.forEach(field => {
//   field.addEventListener('input', inputListener);
// });