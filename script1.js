let mealItems = {};

function addToMeal(ingredient) {
  if (mealItems[ingredient]) {
    mealItems[ingredient].quantity++;
  } else {
    mealItems[ingredient] = {
      quantity: 1,
    };
  }
  updateMealList();
}

function removeFromMeal(ingredient) {
  if (mealItems[ingredient]) {
    mealItems[ingredient].quantity--;
    if (mealItems[ingredient].quantity === 0) {
      delete mealItems[ingredient];
    }
  }
  updateMealList();
}

function updateMealList() {
  const mealList = document.getElementById('meal-list');
  mealList.innerHTML = '';
  for (const ingredient in mealItems) {
    const listItem = document.createElement('li');
    listItem.textContent = `${ingredient} x${mealItems[ingredient].quantity}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.onclick = function () {
      removeFromMeal(ingredient);
    };

    listItem.appendChild(removeButton);
    mealList.appendChild(listItem);
  }
}

function addToMealSection(name, quantity) {
  const mealList = document.getElementById('meal-list');
  const listItem = document.createElement('li');
  listItem.textContent = `${name} x${quantity || 1}`;

  const removeButton = document.createElement('button');
  removeButton.textContent = '-';
  removeButton.onclick = function () {
    removeFromMeal(name);
  };

  listItem.appendChild(removeButton);
  mealList.appendChild(listItem);
}

function saveMeal() {
  alert('Meal saved!');
}
