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
// here  i took local-storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  cartCount.textContent = cart.length;
}
function showCartModal() {
  cartSection.style.display = 'block';
  displayCartItems();
  updateCartCount();
}
// Function to display cart items in the cart
function displayCartItems() {
  cartItemsContainer.innerHTML = '';
 let totalPrice = 0;
 const shippingCost = 30.00;
  const cartContainer = document.createElement('div');
  cartContainer.id = 'cart-container';
  cartContainer.innerHTML = `
    <h2 class="cart-name">Cart</h2>
    <hr>
    <div class="row">
      <!-- Item List Section -->
      <div class="col-md-8">
        <div id="item-list">
          <h4>Item List</h4>
        </div>
      </div>
      <!-- Order Summary Section -->
      <div class="col-md-4">
        <div class="order-summary">
          <h5>Order Summary</h5>
          <p>Products(<span id="cart-count1">0</span>): <span class="spanner" style="float: right;">$0</span></p>
          <p>Shipping: <span class="spanner" style="float: right;">$30</span></p>
          <h4>Total Amount: <span class="spanner" style="float: right;">$0</span></h4>
          <button class="btn btn-dark w-100 checkout-button">Go to checkout</button>
        </div>
      </div>
    </div>
  `;
  // Append the cart container to the parent element
  cartItemsContainer.appendChild(cartContainer);
  const itemListContainer = document.querySelector('#item-list');
  const h4Element = itemListContainer.querySelector('h4');
  // Check if the cart is empty
  if (cart.length === 0) {
    itemListContainer.innerHTML += '<p>Your cart is empty.</p>';
    return;
  } 
    cart.forEach((product, index) => {
      if (!product.quantity) {
        product.quantity = 1;
      }
      const item = document.createElement('div');
      item.classList.add('cart-item');
      item.innerHTML = `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.title}">
          <div class="item-details">
            <div class="item-detail">
              <h6 class="mb-1">${product.title}</h6>
            </div>
            <div class="item-quantity">
              <div class="btn-1">
                <button class="decrease">-</button>
                <span>1</span>
                <button class="increase">+</button>
              </div>
              <p class="mb-0">$${product.price}</p>
            </div>
          </div>
        </div>
      `;
      h4Element.insertAdjacentElement('afterend', item);
      // Calculate total price
      totalPrice += product.price * product.quantity;
       const decreaseButton = item.querySelector('.decrease');
       const increaseButton = item.querySelector('.increase');
       const quantitySpan = item.querySelector('.btn-1 span');
       const priceParagraph = item.querySelector('.item-quantity p');
       decreaseButton.addEventListener('click', () => {
        if (product.quantity > 1) {
          product.quantity--;
        }
        else {
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart)); 
          displayCartItems();
          return; 
        }
        quantitySpan.textContent = product.quantity;
        priceParagraph.textContent = `$${(product.price * product.quantity).toFixed(2)}`;
        updateSummary();
      });
      increaseButton.addEventListener('click', () => {
        product.quantity++;
        quantitySpan.textContent = product.quantity;
        priceParagraph.textContent = `$${(product.price * product.quantity).toFixed(2)}`;
        updateSummary();
      });
    });
    // Function to update the order summary
   function updateSummary() {
    totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-count1').textContent = cart.length;
    document.querySelector('.order-summary .spanner').textContent = `$${totalPrice.toFixed(2)}`;
    const totalAmountElement = document.querySelector('.order-summary h4 .spanner');
    const shippingCostApplied = totalPrice >= 200 ? shippingCost : 0;
    totalAmountElement.textContent = `$${(totalPrice + shippingCostApplied).toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  updateSummary();
}
// Get elements

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Open modal with product details and slider
function openDetailsModal(product) {
  category.textContent = product.category;
  modalTitle.textContent = product.title;
  modalImage.src = product.image;
  modalDescription.textContent = product.description;
  modalPrice.textContent = `$${product.price.toFixed(2)}`;
  rating.textContent = `${product.rating.rate} ★`;

  addToCartBtn.onclick = () => addToCart(product);

  // Fetch and display slider products
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      // Exclude the current product from the slider
      const filteredProducts = products.filter(p => p.id !== product.id);
      renderSlider(filteredProducts);
    })
    .catch(error => console.error('Error fetching products:', error));
const art=document.getElementById('latest-products1')
art.style.display = 'block';
  detailsModal.style.display = 'block';
  homeSection.style.display = 'none'; 
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  latestProductsSection.style.display='none'; 
  cartSection.style.display = 'none';
  loginSection.style.display = 'none';
  registerSection.style.display = 'none';
}
const drt=document.getElementById('cards-container1')
function renderSlider(products) {
  drt.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '200px'; 
    card.style.margin = '10px';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h3 class="card-title">${product.title}</h3>
        <p class="card-description">${product.description.substring(0, 100)}...</p>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <div class="card-actions">
          <button class="details-btn">Details</button>
          <button class="cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
    card.querySelector('.details-btn').addEventListener('click', () => openDetailsModal(product));
    card.querySelector('.cart-btn').addEventListener('click', () => addToCart(product));
    drt.appendChild(card);
  });
  resetSlider(); 
  startAutoRotate(); 
}

const cardWidth = 220;
const autoRotateInterval = 2500; 
let currentIndex = 0; 
let autoRotate;
//slider to rotate
function setupInfiniteSlider() {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  for (let i = 0; i < totalCards; i++) {
    const clone = cards[i].cloneNode(true);
    drt.appendChild(clone); 
  }
  
  for (let i = totalCards - 1; i >= 0; i--) {
    const clone = cards[i].cloneNode(true);
    drt.insertBefore(clone, drt.firstChild); 
  }
  drt.style.transform = `translateX(-${totalCards * cardWidth}px)`;
}
function updateSlider() {
  const totalCards = document.querySelectorAll('.card').length / 3; 
  drt.style.transition = `transform 0.5s ease-in-out`; 
  drt.style.transform = `translateX(-${(currentIndex + totalCards) * cardWidth}px)`;
  setTimeout(() => {
    if (currentIndex === totalCards) {
      drt.style.transition = `none`; 
      currentIndex = 0; 
      drt.style.transform = `translateX(-${totalCards * cardWidth}px)`;
    }
  }, 500); 
}
//slider to rotate start
function startAutoRotate() {
  autoRotate = setInterval(() => {
    currentIndex++; 
    updateSlider(); 
  }, autoRotateInterval); 
}
//slider to rotate stop
function stopAutoRotate() {
  clearInterval(autoRotate);
}
setupInfiniteSlider();
startAutoRotate();
drt.addEventListener('mouseenter', stopAutoRotate);
drt.addEventListener('mouseleave', startAutoRotate);
function resetSlider() {
  currentIndex = 0;
  updateSlider();
}
function updateSlider() {
  const cardWidth = 220; 
  drt.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
const gocart = document.getElementById('go-to-cart-btn');
  gocart.addEventListener('click', () => {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    latestProductsSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
   detailsModal.style.display = 'none';
    cartSection.style.display = 'block';
    displayCartItems();
  });
