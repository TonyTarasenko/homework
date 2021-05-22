'use strict';
function toggleClass (element, toggledClass) {

    const toggledElement = document.querySelector(element);
    const arrayOfClasses = toggledElement.className.split(' ');

    if(arrayOfClasses.includes(toggledClass)) {
        const splicedClassQuantity = 1;
        arrayOfClasses.splice(arrayOfClasses.indexOf(toggledClass), splicedClassQuantity);
    } else {
        arrayOfClasses.push(toggledClass);
    }

    toggledElement.className = arrayOfClasses.join(' ');
}

toggleClass('div', 'border1');

const query = location.search;

function fillForm(queryItem) {
    const questionMark = 1;
    const cleanQuery = decodeURIComponent(queryItem.substring(questionMark));
    const fieldsArr = cleanQuery.split('&');
    const elements = document.forms['reg-form'].elements;

    for (let i = 0; i < fieldsArr.length; i++) {
        const field = fieldsArr[i].split('=');
        const keyIndex = 0;
        const valueIndex = 1;

        if(field[keyIndex] === elements[i].name) {
            elements[i].value = field[valueIndex];
        }

        if(elements[i].name === 'terms') {
            elements[i].checked = (field[valueIndex] === 'true');
        }
    }
}
fillForm(query);