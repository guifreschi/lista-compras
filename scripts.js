const checkboxImage = document.querySelector('.checkbox-image')
let isChecked = false

checkboxImage.onclick = () => {
  checkboxImage.style.transition = '0.2s'
  if (isChecked) {
    checkboxImage.style.backgroundImage = 'url(/assets/checkbox.svg)'; 
  } else {
      checkboxImage.style.backgroundImage = 'url(/assets/checkbox-active.svg)'
  }
  isChecked = !isChecked;  
};

