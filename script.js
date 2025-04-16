function showTab(tab) {
    const ingredients = document.getElementById("ingredients");
    const instructions = document.getElementById("instructions");
    const buttons = document.querySelectorAll(".toggle-btns button");
    
    buttons.forEach(btn => btn.classList.remove("active"));
  
    if (tab === "ingredients") {
      ingredients.style.display = "block";
      instructions.style.display = "none";
      buttons[0].classList.add("active");
    } else {
      ingredients.style.display = "none";
      instructions.style.display = "block";
      buttons[1].classList.add("active");
    }
  }
  