let recipe = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "author": "Elena Peng",
    "name":"Easy Coke Zero Chicken",
    "prepareTime":"15 mins",
    "cookTime":"30 mins",
    "datePublished":"2020-10-05",
    "description":"This is a easy recipe for beginner, but it is really tasty. Great treat for yourself or friends and family. Low sugar and high protein recipe. If you want healthier meat option, you could choose chicken breast instead of thighs or wings.",
    "image":"chicken.jpg",
    "recipeIngredient": [
                            "5 chicken legs",
                            "Coke Zero 1L",
                            "Salt",
                            "Ginger",
                            "Soy sauce",
                            "Black Pepper",
                            "cumin powder   (optional)",
                            "Oliver Oil (optional)",
                            "Chilli powder (optional)"
                        ],
    "nutrition": {
        "@type": "NutritionInformation",
        "Calories": "181 Cal/leg",
        "Protein": "25.7g/leg",
        "Fat":"8g/leg"
    },
    "recipeInstructions": [
        "Clean the chicken legs with water and cut several opennings on each leg for better seasoning.",
        "Season the legs with adequate salt, soy sauce, black pepper and some cumin(optional). You could add some chilli if you like it spicy.",
        "Put the seasoned chickens in the fridge overnight.",
        "The next day, you will need to prepare some ginger slices and heat up your pan.",
        "Add some oil to prevent sticking. Add the ginger and fry it a bit until you smell ginger or it turns light brown color.",
        "Then, pour the chickens into the heated pan.",
        "Stir fry it until the skin turn into a nice golden brown color.",
        "Pour the coke into the pan. The coke should cover all the meat in the pot.",
        "Turn the heat to simmer after it turns to a boil. Cook for at least 30 mins until you see the meat if breaking off the bones",
        "If the coke are drying out, add some more water to the pot. If the chicken is done but there is still a lot of coke left. Turn up the heat and dry the coke to a sauce thickness.",
        "And you are ready to serve!"
    ],
    "suitableForDiet": "https://schema.org/LowFatDiet"
}

function descriptionText(){
    let secOne = document.getElementById("one");
    let descr = document.createElement("p");
    descr.textContent = recipe.description;
    secOne.appendChild(descr);
}
function ingredientList(){
    let ingre = document.getElementById("Ingredients");
    recipe.recipeIngredient.forEach(item => {
        let food = document.createElement("li");
        food.textContent = item;
        ingre.appendChild(food);
    });
}
function instruction(){
    let instr = document.getElementById("Instructions");
    recipe.recipeInstructions.forEach(item => {
        let instructions = document.createElement("li");
        let labels = document.createElement("label");
        let spans = document.createElement("span");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        labels.setAttribute("class","container");
        spans.setAttribute("class","checkmark");
        instructions.textContent = item;
        labels.appendChild(checkbox);
        labels.appendChild(instructions);
        labels.appendChild(spans);
        instr.appendChild(labels);
        console.log(checkbox);
    });
}





descriptionText();
ingredientList();
instruction();
