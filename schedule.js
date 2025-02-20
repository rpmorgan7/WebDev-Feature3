document.addEventListener("DOMContentLoaded", () => {
  fetch("availability.json")
    .then((response) => response.json())
    .then((data) => {
      const timeSlotsContainer = document.getElementById("time-slots");
      data.times.forEach((time) => {
        const timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.textContent = time;
        timeSlot.addEventListener("click", () =>
          alert(`You selected: ${time}`)
        );
        timeSlotsContainer.appendChild(timeSlot);
      });
    })
    .catch((error) => console.error("Error loading available times:", error));
});
