const currentyear = document.querySelector("#currentyear")
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `last modified: <span class ="highlight">${document.lastModified}</span>`;