const booksContainer = document.getElementById('books')
const allBooks = 10;


const fetchBooks = async ()=>{
  for(let i = 1; i <= allBooks; i++){
    await fetchData(i)
  }
}
async function fetchData() {

  try {
    const url = fetch('https://fakerapi.it/api/v1/books?_quantity=1')
    const response = await url
    const data = await response.json()

    console.log(data.data) 
    createBooks(data)
  } catch (error) {
    console.error('Deu ruim', error)
  }
}


function createBooks(data) {
  const bookElement = document.createElement('div')
  bookElement.classList.add('newBook')
  const title = data.data.map(book => book.title).join("-")
  const author = data.data.map(book =>  book.author)
  const description = data.data.map(book => book.description)
  const image = data.data.map(book => book.image)
  
  const booksHTML = `
  <div class="card">
  <img class="card-img" src="${image} alt="${title}" />
    <div class="card-content">
      <h3 class="card-header" >${title}</h3>
      <p class="card-text" >${description}</p>
      <p class="card-text" >Author: ${author}</p>
      <button class="card-btn">Comprar</button>
      </div>
  </div>
  
  `;
  bookElement.innerHTML = booksHTML
  booksContainer.appendChild(bookElement)


}


fetchBooks()