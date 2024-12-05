const openModalBtn = document.getElementById("openModal");
const closeModalBtns = document.querySelectorAll("#closeModal, #closeModalBtn");
const modal = document.getElementById("unitModal");
const unitList = document.getElementById("unitList");
const selectedUnitsInModal = document.getElementById("selectedUnitsInModal");

// Open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
// Close the modal
closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// Unit selection
unitList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const unitName = e.target.getAttribute("data-unit");
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      document
        .querySelector(`.selected-unit[data-unit="${unitName}"]`)
        .remove();
    } else {
      e.target.classList.add("selected");
      const selectedUnitDiv = document.createElement("div");
      selectedUnitDiv.className = "selected-unit";
      selectedUnitDiv.setAttribute("data-unit", unitName);
      selectedUnitDiv.innerHTML = `
        ${unitName}
        <span class="remove">&times;</span>
      `;
      selectedUnitsInModal.appendChild(selectedUnitDiv);
    }
  }
});

// Remove selected unit
selectedUnitsInModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const unitToRemove = e.target.parentElement.getAttribute("data-unit");
    const unitInList = document.querySelector(
      `li[data-unit="${unitToRemove}"]`
    );
    unitInList.classList.remove("selected");
    e.target.parentElement.remove();
  }
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
