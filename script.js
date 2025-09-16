// Part 2: Function with parameters and return value
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  const total = calculateTotal(150, 3); // Example values
  document.getElementById("totalOutput").textContent = `Total: KES ${total}`;
}

// Part 2: Scope demonstration
let globalMessage = "Accessible globally";

function scopeExample() {
  let localMessage = "Accessible only inside this function";
  console.log(globalMessage); // ✅
  console.log(localMessage);  // ✅
}
// console.log(localMessage); // ❌ Uncommenting this throws an error

// Part 3: Trigger CSS animation
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.add("slide-in");
  setTimeout(() => box.classList.remove("slide-in"), 1000);
});

// Part 3: Toggle modal visibility
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
