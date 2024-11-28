// Select the sections
const head=document.getElementById('header');
const foot=document.getElementById('footer');
const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');
const cartSection = document.getElementById('cart-container');
const loginSection = document.getElementById('login-form');
const registerSection = document.getElementById('register-form');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const productLink = document.getElementById('product-link');
const latestProductsSection = document.getElementById('latest-products');
const cartLink = document.getElementById('cart-link');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const cardsContainer = document.getElementById('cards-container'); 
const container=document.getElementsByClassName('.container');
// Select for cart
const cartItemsContainer = document.getElementById('item-list');
const cartCount = document.getElementById('cart-count');
const product = document.getElementById('cart-count1');
//details page
const detailsModal = document.getElementById('details-modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.getElementById('close-modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const rating=document.getElementById('modal-rating')
const addToCartBtn = document.getElementById('add-to-cart-btn');
const category= document.getElementById('category')
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const carouselInner = document.getElementById('carousel-inner');
// Show Home Section
homeLink.addEventListener('click', () => {
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    latestProductsSection.style.display = 'block';
    cartSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
  
});
// Show About Section
aboutLink.addEventListener('click', () => {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'block';
    contactSection.style.display = 'none';
    latestProductsSection.style.display = 'none';
    cartSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
   
});
// Show Contact Section
contactLink.addEventListener('click', () => {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'block';
    latestProductsSection.style.display = 'none';
    cartSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
   
});
// Navigate to latest-products
productLink.addEventListener('click', () => {
  homeSection.style.display = 'block'; 
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  latestProductsSection.style.display='block'; 
  cartSection.style.display = 'none';
  loginSection.style.display = 'none';
  registerSection.style.display = 'none';
 
});
// Navigate to login-page
loginLink.addEventListener('click', () => {
    homeSection.style.display = 'none'; 
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    latestProductsSection.style.display='none'; 
    cartSection.style.display = 'none';
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
  });
  // Navigate to register-page
  registerLink.addEventListener('click', () => {
    homeSection.style.display = 'none'; 
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    latestProductsSection.style.display='none'; 
    cartSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
  });
  cartLink.addEventListener('click', () => {
    homeSection.style.display = 'none'; 
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    latestProductsSection.style.display = 'none'; 
    loginSection.style.display = 'none';
    registerSection.style.display = 'none'; 
    showCartModal();
  });
  document.querySelectorAll(".switch-tab").forEach(link => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href").slice(1);
      document.querySelectorAll(".form-container").forEach(form => {
        form.style.display = "none";
      });
      document.getElementById(targetId).style.display = "block";
    });
  });
  // Fetch products and create product cards
function fetchproducts(category){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      if (category) {
        products = products.filter(product => product.category.toUpperCase() === category.toUpperCase());
      }
      console.log("Product details",products);
      cardsContainer.innerHTML = '';
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <div class="card-body">
            <h3 class="card-title">${product.title}</h3>
            <p class="card-description">${product.description.substring(0, 100)}...</p>
            <p class="card-price">$${product.price}</p>
            <div class="card-actions">
              <button class="details-btn">Details</button>
              <button class="cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        `;
        const detailsBtn = card.querySelector('.details-btn');
        detailsBtn.addEventListener('click', () =>{ 
          openDetailsModal(product);
  });
        const cartBtn = card.querySelector('.cart-btn');
        cartBtn.addEventListener('click', () => addToCart(product));
        cardsContainer.appendChild(card);
      });
      
    }).catch(error => console.error('Error fetching data:', error));
  }
  const mensClothingFilterBtn = document.getElementById('mens-clothing-btn'); 
const womensClothingFilterBtn = document.getElementById('womens-clothing-btn'); 
const jewelryFilterBtn = document.getElementById('jewelry-btn'); 
const electronicsFilterBtn = document.getElementById('electronics-btn'); 
const allProductsFilterBtn = document.getElementById('all-products-btn'); 
// it will sort men's clothing
mensClothingFilterBtn.addEventListener('click', () => {
  fetchproducts("men's clothing");
});
// it will sort women's clothing
womensClothingFilterBtn.addEventListener('click', () => {
  fetchproducts("women's clothing");
});
// it will sort jewelery
jewelryFilterBtn.addEventListener('click', () => {
  fetchproducts("jewelery");
});
// it will sort electronics
electronicsFilterBtn.addEventListener('click', () => {
  fetchproducts("electronics");
});
// it will sort All
allProductsFilterBtn.addEventListener('click', () => {
  fetchproducts(); 
});
fetchproducts();