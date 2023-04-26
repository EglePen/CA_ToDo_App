const dataApi = 'https://golden-whispering-show.glitch.me';

export const fetchData = async () => {
  try {
    const response = await fetch(dataApi);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export const postData = async (data) => {
  try {
    const response = await fetch(dataApi, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    if (response.ok) {
      return await response.json();

    }
  } catch (error) {
    console.error(error);
  }
}

export const deleteData = async (data) => {
  try {
    const response = await fetch(dataApi, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

function createCard(products){
  const allProducts = document.getElementById('allproducts');
  allProducts.innerHTML = '';

  products.forEach( product => {
    const card = document.createElement('div');

    const img = document.createElement('img');
    img.src = product.image;

    const name = document.createElement('h1');
    name.innerText = product.title;

    const price = document.createElement('h2');
    price.innerText = product.price;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';

    card.append(img, name, price, delBtn);
    allProducts.append(card);
  })


}

createCard();

