function validateForm() {
  let x = document.getElementById("fname").value;
  if (x.trim() === "") {
      alert("First Name must be filled out");
      return false;
  }
  return true;
}