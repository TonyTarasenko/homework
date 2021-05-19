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