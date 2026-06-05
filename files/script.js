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

function openDialog() {
  let dialogRef = document.getElementById("dialog_window");
  dialogRef.showModal();
}

function closeDialog() {
  let dialogRef = document.getElementById("dialog_window");
  dialogRef.close();
}

function copyGallery() {
  let picRef = document.getElementById("list");

  for (let i = 1; i < bilderNamen.length; i++) {
    picRef.innerHTML += `
                        <li>
                        <button>
                        <img src=${bilderPfad[i]} alt="Bild">
                        </button
                        </li>
                        `;
  }
}
