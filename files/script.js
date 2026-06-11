let bilderNamen = [
  "alaska-810433_1280",
  "anime-8788959_1280",
  "blue-tit-8521052_1280",
  "engin_akyurt-flower-2942168_640",
  "hurricane-92968_1280",
  "lake-2896379_1280",
  "moorente-8783210_1280",
  "sea-2563389_1280",
  "snow-bunting-6781122_1280",
  "snow-leopard-cubs-8039138_1280",
  "travel-8785493_1280",
  "winter-1675197_1280.jpg",
];

let bilderPfad = [
  "../assets/images/alaska-810433_1280.jpg",
  "../assets/images/anime-8788959_1280.jpg",
  "../assets/images/blue-tit-8521052_1280.jpg",
  "../assets/images/engin_akyurt-flower-2942168_640.jpg",
  "../assets/images/hurricane-92968_1280.jpg",
  "../assets/images/lake-2896379_1280.jpg",
  "../assets/images/moorente-8783210_1280.jpg",
  "../assets/images/sea-2563389_1280.jpg",
  "../assets/images/snow-bunting-6781122_1280.jpg",
  "../assets/images/snow-leopard-cubs-8039138_1280.jpg",
  "../assets/images/travel-8785493_1280.jpg",
  "../assets/images/winter-1675197_1280.jpg",
];

function initialise() {
  copyGallery();
}

function openDialog(x) {
  let dialogRef = document.getElementById("dialog_window");
  changeDialog(x);
  dialogRef.showModal();
  document.body.classList.toggle("dialog_offen");
}

function closeDialog() {
  let dialogRef = document.getElementById("dialog_window");
  dialogRef.close();
  document.body.classList.toggle("dialog_offen");
}

function stopPropagation(event) {
  event.stopPropagation();
}

function changeDialog(x) {
  let dialogName = document.getElementById("pictureName");
  let dialogPic = document.getElementById("picture");
  changeDialogFooter(x);
  dialogName.innerHTML = `
                          <h2>${bilderNamen[x]}</h2>
                          `;
  dialogPic.innerHTML = `
                        <img src="${bilderPfad[x]}" alt="Bild in Nahaufnahme">
                        `;
}

function changeDialogFooter(x) {
  let dialogFoot = document.getElementById("dialog_foot");
  dialogFoot.innerHTML = `
                          <button class="arrow_left" onclick="switchLeft(${x})">
                          <img class="arrow_l"
                          src="../assets/icons/arrow_red.svg"
                          alt="Roter Pfeil der nach links zeigt"
                          />
                          </button>
                          <p>${[x + 1]}/12</p>
                          <button class="arrow_right" onclick="switchRight(${x})">
                          <img class="arrow_r"
                          src="../assets/icons/arrow_red.svg"
                          alt="Roter Pfeil der nach rechts zeigt"
                          />
                          </button>
                          `;
}

function switchLeft(x) {
  if (x == 0) {
    changeDialog(bilderNamen.length - 1);
  } else {
    changeDialog(x - 1);
  }
}

function switchRight(x) {
  if (x + 1 == bilderNamen.length) {
    changeDialog(0);
  } else {
    changeDialog(x + 1);
  }
}

// Füge in ul ein li mit button und bild ein
function copyGallery() {
  let picRef = document.getElementById("list");
  for (let i = 0; i < bilderNamen.length; i++) {
    picRef.innerHTML += `
                        <li>
                        <button onclick="openDialog(${i})">
                        <img src=${bilderPfad[i]} alt="Bild ${[i + 1]}">
                        </button
                        </li>
                        `;
  }
}
