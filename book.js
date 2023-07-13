function selectImage(image) {
  var selectedImage = document.getElementsByClassName("selected");
  if (selectedImage.length > 0) {
    selectedImage[0].classList.remove("selected");
  }
  image.classList.add("selected");
}
