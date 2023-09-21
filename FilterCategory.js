function FilterByCategory(products) {
    this.product =products;
     return function FilterCategory(category) {
        this.category =category;
        return products.filter((product) => product.category == category);

        
     }

    
}
const products = [
   { name: "Shirt", category: "Clothing" },
   { name: "Pant", category: "Clothing" },
   { name: "Hat", category: "Accessories" },
   { name: "Sunglasses", category: "Accessories" },
];

const clothingProducts = FilterByCategory(products)("Clothing");

console.log(clothingProducts);

