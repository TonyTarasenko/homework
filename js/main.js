// var name = 'Anton';
// var surname = 'Tarasenko';
// var age = '28';
// var msg = 'Hi there. It is nice to meet you. My name is';

// var greeting = `${msg} ${name} ${surname} and I am ${age} years old.`;

// console.log(greeting);

// +'40' + +'2'; // 42, поскольку унарные + превращают строки в числа
// '2' + 3 ** 2; // 29, изначально происходит возведение в степень из-за приоритета операций. Далее оператор + сначала пробует произвести конкатенацию, а уже после - сложение. Отсюда - '29'  
// 3 ** 2 / 3; //3. После возведения в степень получаем 9 и делим на 3. Итого = 9.
// 3 ** (9 / 3); //скобки расставляют приоритеты операций, поэтому сначала мы получаем 3 в скобках, а потом 3**3 = 27
// undefined + 1; // undefined пытается привестись к числовому значению, получается NaN и все следующие операции приведут к Nan
// +null + 10; //10, поскольку унарный + приводит null к значению 0 и далее происходит сложение
// null / 5; //0, null приводится к 0, 0 / 5 = 0
// 'hello' + null; //hellonull, поскольку null приводится к строке и происходит конкатенация
// 'hello' - undefined + ' '; //"NaN " именно в такой записи, поскольку 'hello' - undefined приводит к NaN, а далее происходит конкатенация Nan и " "
// '30' + 3 - '3'; //300 изначально происходит конкатенация, а после строка '303' приводится к числу и производится вычитание
// 10 % '5'; //0. Поскольку 10 делится на 5 без остатка

// var number = 5;

// number = 2*number--; //10, сначала производится умножение, а уже потом вычитание из number, поскольку оператор -- в данном случае постфиксный.

// console.log(number);

// var number1 = 5;

// number1 = 2 * ++number1; //12, оператор ++ в данном случае префиксный, поэтому перед умножением вычисляется новое значение number, а после происходит умножение.

// console.log(number1);


// false && true || true; // true, оператор && вернет false, далее произойдет проверка false || true, оператор "И" вернет нам true, если хотя бы один из операндов - true
// false && (true || true); // false, сперва выполнится действие в скобках, далее после оператор && вернет false, если хотя бы один из операндов - false
// '10' + (5 === 6); // 10false, сначала происходит сравнение в скобках, поскольку 5 не равно 6, сравнение вернет нам false, а далее произойдет конкатенация
// '10' - 5 === 6; // false, вначале '10' приводится к числу 10, происходит вычитание, а далее результат вычитания 10 - 5 = 5 сравнивается с числом 6, что дает false
// (+null == false) < 1; // false, из-за унарного "+" null приведется к числовому значению 0, в скобках мы получим true, далее true приводится к 1 и 1 не меньше 1
// (+null == false) < 1 ** 5; // false, из-за унарного "+" null приведется к числовому значению 0, в скобках мы получим true, далее true приводится к 1. В правой части происходит возведение 1 в 5ю степень, что в итоге даст 1 и 1 не меньше 1
// undefined + 5 > null + 1; //false. Поскольку слева нет строк, будет выполняться сложение. При приведении undefined к числу получаем NaN, а NaN не может быть больше, меньше или равно чему-либо


// var userAge = +prompt('Enter your age please', 'Your age');

// if(userAge === 0 || 
//     userAge >= 5 && 
//     userAge<=20) {
//      alert(userAge + ' лет');
//     } else if (userAge % 10 === 1) {
//         alert (userAge + ' год');
//     } else if (userAge % 10 >=2 && 
//                userAge % 10 <= 4) {
//         alert (userAge + ' года');
//     } else if (userAge % 10 >=5 && 
//                userAge % 10 <= 9 || 
//                userAge % 10 === 0) {
//         alert (userAge + ' лет');
//     }

// var heightOfTree = +prompt('Enter height of tree');
// var tree = '';

// for (var i = 1; i <= heightOfTree; i++) {
//     for (var j = 1; j <= heightOfTree + heightOfTree - 1; j++) {
//         if (j <= heightOfTree - i || j >= heightOfTree + i) {
//             tree += ' ';
//         } else {
//             tree += '*';
//         }
//     }
//     tree += '\n';
// }

// console.log(tree);

// function padString(target, char, length, fromStart) {
//     if (target.length < length) {
//         var concat = '';
//         for (var i = 1; i <= length - target.length; i++) {
//             concat = concat + char;
//         }
//         if (fromStart) {
//             target = concat + target;
//         } else {
//             target = target + concat;
//         }
//     } 
//     return target;
// }

function cloneObj (obj) {
    var copyObj = {};
    for (var property in obj) {
        copyObj[property] = obj[property]
    }
    return copyObj;
}
function getValues (obj, separator) {
    var string = '';
    for (var key in obj) {
        string += obj[key] + separator + ' ';
    } 
    return string
}
function getKeys (obj, separator) {
    var string = '';
    for (var key in obj) {
        string += key + separator + ' ';
    }
    return string
}
function getEntries (obj) {
    var string = '';
        for (var key in obj) {
        string += key + ': ' + obj[key] + '\n';
    }
    return string
}

function getResultAll (operation) {
    for (var j = 1; j < arguments.length; j++) {
        if (typeof arguments[j] === 'number') {
            var res = arguments[j];
            break;
        }
    }
    for (var i = j + 1; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            switch (operation) {
                case '+':
                    res += arguments[i];
                    break;
                case '-':
                    res -= arguments[i];
                    break;
                case '*':
                    res *= arguments[i];
                    break;
                case '/':
                    res /= arguments[i];    
                    break;
            }
        }
    }
     return res;
}

function reverseString (string) {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

function isCharPresent (string, char) {
        for (key in string) {
            if (string[key].toLowerCase() === char.toLowerCase()) return true;
        }
        return false
    }
    
function charIndexOf (string, char) {
    for (key in string) {
        if (string[key].toLowerCase() === char.toLowerCase()) return key;
    }
    return -1;
}