function generateList (array, parent = document.body) {
    const $ul = document.createElement('UL');
    parent.append($ul);

    array.forEach(arrayItem => {
        const $li = document.createElement('LI');

        if(Array.isArray(arrayItem)) {
            generateList(arrayItem, $li);
        } else {
            $li.textContent = arrayItem;
        }

        $ul.append($li);
    });
}

generateList();

const $table = document.createElement('table');

const rows = 10;
const columns = 10;

for (let i = 0; i < rows; i++) {
    const $row = $table.insertRow(i);

    for (let j = 1; j <= columns; j++) {
        const indexOfCell = -1;
        const $cell = $row.insertCell(indexOfCell);
        const endOfRow = 10;

        if(j === endOfRow) {
            const decrementOfCell = 1;
            $cell.textContent = i + j - (j - decrementOfCell) + '0';
        } else {
            $cell.textContent = String(i)+ String(j);
        }
    }

}

document.body.append($table);