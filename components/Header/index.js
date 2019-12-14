// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
// headerContainer.appendChild(header());

function Header() {
    const date = document.createElement('span'),
    header = document.createElement('div'),
    headerText = document.createElement('h1'),
    temp = document.createElement('span');

    date.classList.add('date');
    header.classList.add('header');
    temp.classList.add('temp');

    headerText.textContent = `Lambda Times`;
    date.textContent = `December Friday the 13th, 2019`;
    temp.textContent = `34°`;

    header.appendChild(date);
    header.appendChild(temp);
    header.appendChild(headerText);

    

    headerContainer.appendChild(header);
}

Header();
