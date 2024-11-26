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