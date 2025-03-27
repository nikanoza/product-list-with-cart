const productsElement = document.querySelector(".products");
const orderListElement = document.querySelector(".order-list");
const totalPriceElement = document.querySelector(".total-amount");
const cartTotalItemAmountElement = document.querySelector(".cart-title");
const products = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const order = [];

let result = "";
products.forEach((product, index) => {
  const { image, category, name, price } = product;
  result += `
        <div class="product">
          <img
            src="${image.mobile}"
            alt=""
            class="product-img"
          />
          <button class="add-btn" value="${name}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g fill="#C73B0F" clip-path="url(#a)">
                <path
                  d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"
                />
                <path
                  d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            Add to Cart
          </button>
          <button class="amount-btn hidden">
           <div class="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
            </div>
            <span>1</span>
            <div class="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
            </div>
          </button>
          <h3 class="category">${category}</h3>
          <h2 class="product-name">${name}</h2>
          <h3 class="price">$${price}</h3>
        </div>`;
});
productsElement.innerHTML = result;
const addBtns = document.querySelectorAll(".add-btn");
const amountBtns = document.querySelectorAll(".amount-btn");

const addItemHandler = (productName) => {
  const clickedProduct = products.find((item) => productName === item.name);
  if (clickedProduct) {
    const inOrders = order.find((item) => item.name === productName);
    if (inOrders) {
      inOrders.amount = 1;
    } else {
      order.push({ ...clickedProduct, amount: 1 });
    }
    displayOrderList();
  }
};

const amountChangeHandler = (productName, textElement, isIncrement) => {
  const clickedProduct = order.find((item) => productName === item.name);

  if (!clickedProduct) {
    return false;
  }
  if (isIncrement) {
    clickedProduct.amount += 1;
  } else {
    clickedProduct.amount -= 1;
  }
  displayOrderList();
  if (clickedProduct.amount === 0) {
    return true;
  }
  textElement.textContent = clickedProduct.amount;
  return false;
};

addBtns.forEach((buttonElement) => {
  const amountBtn = buttonElement.nextElementSibling;
  buttonElement.addEventListener("click", () => {
    addItemHandler(buttonElement.value);
    buttonElement.classList.add("hidden");
    amountBtn.classList.remove("hidden");
    console.log(order);
  });
  const amountElements = amountBtn.children;
  const increment = amountElements[2];
  const decrement = amountElements[0];
  const textNumber = amountElements[1];

  increment.addEventListener("click", () => {
    amountChangeHandler(buttonElement.value, textNumber, true);
    console.log(order);
  });

  decrement.addEventListener("click", () => {
    const isEqualToZero = amountChangeHandler(
      buttonElement.value,
      textNumber,
      false
    );
    if (isEqualToZero) {
      buttonElement.classList.remove("hidden");
      amountBtn.classList.add("hidden");
      console.log(order);
    }
  });
});

function displayOrderList() {
  orderListElement.innerHTML = "";
  let sum = 0;
  let totalAmount = 0;
  order.forEach((product) => {
    sum += product.amount * product.price;
    totalAmount += product.amount;
    html = `<div class="cart-item">
  <div class="item-info">
    <h3>${product.name}</h3>
    <div class="item-amount-info">
      <span class="amount-text">${product.amount}x</span>
      <span class="one-price">@ $${product.price.toFixed(2)}</span>
      <span class="item-total-price">$${(
        product.amount * product.price
      ).toFixed(2)}</span>
    </div>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill="#CAAFA7"
      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
    />
  </svg>
</div>`;
    orderListElement.innerHTML += html;
  });

  totalPriceElement.innerHTML = "$" + sum.toFixed(2);
  cartTotalItemAmountElement.innerHTML = `Your Cart (${totalAmount})`;
}
