const pizzas = [
    {
        name: "PEPPER BARBECUE CHICKEN",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 20,
                medium: 35,
                large: 60
            }
        ],
        category: "noveg",
        image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
        description: "Pepper Barbecue Chicken Cheese"
    }, 
    {
        name: "Non Veg Supreme Digital",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 20,
                medium: 35,
                large: 60
            }
        ],
        category: "noveg",
        image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
        description: "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
    },
    {
        name:"Golden Corn Pizza",
        variants:["small","medium","large"],
        prices:[
            {
                small:18,
                medium:25,
                large: 40
            }
        ],
        category:"veg",
        description:"Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
        image:"https://images.dominos.co.in/new_peppy_paneer.jpg"
    },
    {
        name:"Jalapeno & Red Paprika Pizza",
        variants:["small","medium","large"],
        prices:[
            {
                small:20,
                medium:30,
                large:42
            }
        ],
        category:"veg",
        image:"https://images.dominos.co.in/new_mexican_green_wave.jpg",
        description:"This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste."
    },
    {
        name:"New Margerita Gold",
        variants:["small","medium","large"],
        prices:[
            {
                small:15,
                medium:22,
                large:30
            }
        ],
        category:"veg",
        image:"https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
        description:"The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers."
    },
    {
        name:"Double Cheese Margherita Pizza",
        variants:["small","medium","large"],
        prices:[
            {
                small:25,
                medium:38
            }
        ],
        category:"veg",
        image:"https://images.dominos.co.in/CreamyTomatoPPVG_N.jpg",
        description:"This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it"
    },
    {
        name:"Mexican Green Wave",
        variants:["small","medium","large"],
        prices:[
            {
                small:18,
                medium:27,
                large:40
            }
        ],
        category:"nonveg",
        image:"https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
        description:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."
    },
    {
        name:"Deluxe Veggie",
        variants:["small","medium","large"],
        prices:[
            {
                small:11,
                medium:15,
                large:20
            }
        ],
        category:"veg",
        image:"https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
        description:"For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."
    }
];

export default pizzas;