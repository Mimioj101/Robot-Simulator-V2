document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const movesUl = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

    document.addEventListener("keydown", function(e){
      const newLi = document.createElement("li")
      if (e.key === "ArrowLeft") { 
        movesUl.append(newLi)
        newLi.innerText = "left"}
      else if (e.key === "ArrowRight") { 
        movesUl.append(newLi)
        newLi.innerText = "right"}
      else if (e.key === "ArrowUp") { 
        movesUl.append(newLi)
        newLi.innerText = "up"}
      else if (e.key === "ArrowDown") { 
        movesUl.append(newLi)
        newLi.innerText = "down"}
    })


    moveButton.addEventListener("click", function(e){
      const newestLi =  movesUl.lastChild 
      if (newestLi.innerText === "left") { 
        move("left")}
      else if (newestLi.innerText === "right") { 
        move("right")}
      else if (newestLi.innerText === "up") { 
        move("up")}
      else if (newestLi.innerText === "down") { 
        move("down")}
    })


})
