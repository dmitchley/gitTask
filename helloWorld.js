 const Submit = document.getElementById('subMit');


Submit.addEventListener('click', ShowUserInput);

function ShowUserInput() {
    const inputPlace = document.getElementById('inputPlace').value;
    console.log(inputPlace);
}
