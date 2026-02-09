function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  const img = document.querySelector("#profile img")
  const parag = document.querySelector("#profile p") 

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito, Educador da Rocketseat')
    parag.textContent = "@maykbrito"
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Avallong, Programador Frontend')
    parag.textContent = "@avallong"
  }
}