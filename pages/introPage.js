const recipeList = document.getElementById('recipe-list');
const children = recipeList.children;
var recipes = []; 

for(i= 0; i < children.length; i++) {
    let recipeInfo = children[i];
    let recipeName = recipeInfo.children[1].textContent;
    var obj = {image: "", name: recipeName, element: recipeInfo };
    recipes.push(obj); 
}



const searchInput = document.querySelector('#search');

searchInput.addEventListener("input", e => {
    const value = e.target.value;
    recipes.forEach(recipe => {
        const isVisible = recipe.name.toLowerCase().includes(value.toLowerCase());
        recipe.element.classList.toggle("hide", !isVisible)
    })
})
