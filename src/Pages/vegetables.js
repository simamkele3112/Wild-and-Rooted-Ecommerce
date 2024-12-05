import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext"; // Assuming you have a CartContext file
import "./vegetables.css";

const Vegetable = () => {
  const { cart, addToCart } = useContext(CartContext); // Use CartContext
  const vegetableCategories = {
    "Root Vegetables": [
      {
        id: 16,
        name: "Carrot",
        description: "Fresh organic carrots, rich in beta-carotene and vitamins.",
        price: "R12.00 p/kg",
        image:
          "https://th.bing.com/th/id/OIP.l2kbPf18xoemyxkOz-GIbAHaEx?rs=1&pid=ImgDetMain",
      },
      {
        id: 17,
        name: "Beetroot",
        description:
          "Earthy, sweet beetroots, full of antioxidants and ideal for salads, roasting, or juicing.",
        price: "R19.90 p/kg",
        image:
          "https://th.bing.com/th/id/R.f9840ca970a9b2391bcd3ef400ce9850?rik=guGydkB7isV6WA&pid=ImgRaw&r=0",
      },
      {
        id: 18,
        name: "Sweet Potatoes",
        description:
          "Nutritious, naturally sweet, and versatile; perfect for baking, mashing, or adding to hearty dishes.",
        price: "R29.99 p/kg",
        image:
          "https://th.bing.com/th/id/R.07fca42b0c65707d223e5c29a7175172?rik=qR%2b%2fii1kC6CMSQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0242%2f9205%2fproducts%2fsweetpotato_crate_grande.png%3fv%3d1458172121&ehk=AfmbFtwDTbwH4kM3OYiM9T%2fHtmm9gaXKtOspGNsdNg0%3d&risl=&pid=ImgRaw&r=0",
      },
    ],
    "Leafy Greens": [
      {
        id: 19,
        name: "Spinach",
        description: "Fresh, leafy spinach, packed with iron and vitamins.",
        price: "R16.99 p/bunch",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e4d646fb8470a53cbeab41d/1621522401013-WYFG4Y29JHC87BI207IW/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/spinach",
      },
      {
        id: 20,
        name: "Lettuce",
        description: "Crisp, green lettuce perfect for salads and sandwiches.",
        price: "R24.50 p/head",
        image: "https://th.bing.com/th/id/OIP.9ql5SvlYdR824Bl5UUI0kgHaE8?rs=1&pid=ImgDetMain",
      },
      {
        id: 21,
        name: "Chard",
        description: "Vibrant and tender chard leaves, packed with vitamins and ideal for sautés, salads, and stews.",
        price: "R39.99 p/600g",
        image: "https://th.bing.com/th/id/OIP.ke4vfhet7G5MRqsZQEJthgHaFj?rs=1&pid=ImgDetMain",
      },
    ],
    "Fruiting Vegetables": [
      {
        id: 22,
        name: "Tomato",
        description: "Juicy, ripe tomatoes perfect for salads and cooking.",
        price: "R15.00 p/kg",
        image: "https://th.bing.com/th/id/OIP.A21x3tUpZUgt1278KnWVYAHaE7?w=282&h=188&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 23,
        name: "Bell Pepper",
        description: "Colorful bell peppers, great for cooking or raw snacks.",
        price: "R27.25 p/kg",
        image: "https://th.bing.com/th/id/OIP.gqlLk2vvyio1jrFE6J94GAHaE7?rs=1&pid=ImgDetMain",
      },
      {
        id: 24,
        name: "Cucumber",
        description: "Refreshing and crisp cucumbers, perfect for salads, sandwiches, or as a hydrating snack..",
        price: "R19.25 p/kg",
        image: "https://wh.farm/wp-content/uploads/2022/09/SlicerCucumber-Featured.jpg",
      },
    ],
    "Cruciferous Vegetables": [
      {
        id: 25,
        name: "Broccoli",
        description: "Green, crisp broccoli full of nutrients and antioxidants.",
        price: "R28.99 p/head",
        image: "https://th.bing.com/th/id/R.2b0d0a1273f360464544215910eec10c?rik=c%2f4Td6072d4SRQ&pid=ImgRaw&r=0",
      },
      {
        id: 26,
        name: "Cauliflower",
        description: "Tender cauliflower florets, perfect for roasting or steaming.",
        price: "R25.35 p/head",
        image: "https://cdn.mos.cms.futurecdn.net/ApkWfRWrKKyHAx3oi3DrQR.jpg",
      },
      {
        id: 27,
        name: "Cabbage",
        description: "Fresh, crunchy cabbage with a subtle, peppery flavor, ideal for slaws, soups, and stir-fries.",
        price: "R18.35 p/head",
        image: "https://www.knowyourproduce.com/wp-content/uploads/2015/12/All-about-Cabbage-and-Cabbage-Recipes.jpg",
      },
    ],
  };

  return (
    <div className="vegetable-container">
      <header className="vegetable-header">
        <h1>Our Fresh Vegetables</h1>
        {/* Cart icon showing the number of items in the cart */}
        <Link to="/Cart" className="cart-icon">
          🛒 {cart.length} items
        </Link>
      </header>

      {Object.entries(vegetableCategories).map(([category, vegetables]) => (
        <section key={category} className="vegetable-category">
          <h2>{category}</h2>
          <div className="vegetable-cards">
            {vegetables.map((veg) => (
              <div key={veg.id} className="vegetable-card">
                <img src={veg.image} alt={veg.name} className="vegetable-image" />
                <h3 className="vegetable-name">{veg.name}</h3>
                <p className="vegetable-description">{veg.description}</p>
                <p className="vegetable-price">{veg.price}</p>
                {/* Add to Cart Button */}
                <button onClick={() => addToCart(veg)} className="order-btn">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Vegetable;
