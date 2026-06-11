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
  createDialog(x);
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

function createDialog(number) {
  dialogName(number);
  dialogPic(number);
  dialogFooter(number);
}

function dialogName(number) {
  let dialog = document.getElementById("pictureName");
  dialog.innerHTML = `
                      <h2>${bilderNamen[number]}</h2>
                      `;
}

function dialogPic(number) {
  let dialog = document.getElementById("picture");
  dialog.innerHTML = `
                    <img src="${bilderPfad[number]}" alt="Bild in Nahaufnahme">
                    `;
}

function dialogFooter(number) {
  let dialogFoot = document.getElementById("dialog_foot");
  dialogFoot.innerHTML = `
                          <button class="arrow_left" id="left" onclick="switchPic(${number}, ${false}), getFocus('left')">
                          <img class="arrow_l"
                          src="../assets/icons/arrow_red.svg"
                          alt="Roter Pfeil der nach links zeigt"
                          />
                          </button>
                          <p>${[number + 1]}/12</p>
                          <button class="arrow_right" id="right" onclick="switchPic(${number}, ${true}), getFocus('right')">
                          <img class="arrow_r"
                          src="../assets/icons/arrow_red.svg"
                          alt="Roter Pfeil der nach rechts zeigt"
                          />
                          </button>
                          `;
}

function switchPic(x, bool) {
  if (bool) {
    if (x + 1 == bilderNamen.length) {
      createDialog(0);
    } else {
      createDialog(x + 1);
    }
  } else {
    if (x == 0) {
      createDialog(bilderNamen.length - 1);
    } else {
      createDialog(x - 1);
    }
  }
}

function getFocus(id) {
  document.getElementById(id).focus();
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
