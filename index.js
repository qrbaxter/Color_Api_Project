

const colorSection = document.getElementById("color-section")
function getColors() {
  
  fetch(`https://www.thecolorapi.com/scheme?hex=${document.getElementById("color-input").value.substr(-6)}&mode=${document.getElementById("mode").value}&count=5`)
      .then(res => res.json())
      .then(data => {
        colorSection.innerHTML = ''
        for(let color of data.colors) {
          color.innerHTML +=  `
            <div class="color-value">
              <img class="color-img" src="${color.image.bare}">
              <h3>${color.hex.value}</h3>
            </div>`
        }
      })
  }

  document.getElementById("get-color").addEventListener("click", getColors)
