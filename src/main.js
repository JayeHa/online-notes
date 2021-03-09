
// Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');

    // 내가 한거...
    // const items_container = document.querySelector(".items");
    // items.map((item)=>{
    //     let itemRow = document.createElement('li');
    //     itemRow.setAttribute('class', 'item');
    //     itemRow.innerHTML = `
    //         <img src="${item.image}" class="item__thumbnail">
    //         <span class="item__discription">${item.gender}, ${item.size}</span>
    //     `
    //     items_container.appendChild(itemRow);
    // })
}

// Create HTML list item from the given data item
function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__discription">${item.gender}, ${item.size}</span>
    </li>
    `;
}


// main
loadItems()
    .then(items => {
        console.log(items);
        displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log())