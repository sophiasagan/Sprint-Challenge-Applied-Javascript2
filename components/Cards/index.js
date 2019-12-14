// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('response data', response.data.articles)
    const articleName = Object.keys(response.data.articles);
    console.log(articleName);
    const articleContainer = document.querySelector('.cards-container');
    articleName.map(article => {
        response.data.articles[article].map(element => {
            articleContainer.appendChild(Article(element));
        })
    })

})

.catch(err => {
    console.log ('Sorry, there has been an error', err);
});

function Article(data) {
    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    img = document.createElement('img'),
    name = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = `${data.headline}`;
    img.src = `${data.authorPhoto}`;
    name.textContent = `${data.authorName}`;

    return card;
}