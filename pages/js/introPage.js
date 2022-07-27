//const swup = new Swup();
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}


function createRecipeList(recipeListCollection, recipes) {
    for(i= 0; i < recipeListCollection.length; i++) {
        let recipeInfo = recipeListCollection[i];
        let recipeName = recipeInfo.children[1].textContent;
        var obj = {image: "", name: recipeName, element: recipeInfo };
        recipes.push(obj); 
    }
    return recipes;
}

function recipeSearch(searchInput, recipes) {
    searchInput.addEventListener("input", e => {
        const value = e.target.value;
        recipes.forEach(recipe => {
            const isVisible = recipe.name.toLowerCase().includes(value.toLowerCase());
            recipe.element.classList.toggle("hide", !isVisible)
        })
    });
}

const recipeHTMLList = document.getElementById('recipe-list');
const recipeListChildren = recipeHTMLList.children;
var recipes = []; 
var recipeList = createRecipeList(recipeListChildren, recipes);
const searchInput = document.querySelector('#search');


recipeSearch(searchInput, recipes);