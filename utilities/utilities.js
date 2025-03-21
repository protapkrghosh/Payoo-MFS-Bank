// Reuseable function
const getInputValueByID = (id) => {
   return convertedValue = parseFloat(document.getElementById(id).value);
};

const getInnerTextByID = (id) => {
   return convertedText = parseFloat(document.getElementById(id).textContent);
}

const setInnerTextByIDAndValue = (id, value) => {
   document.getElementById(id).textContent = value;
}