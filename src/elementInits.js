// Inititalize content for homepage

/* 
div id="welcome-box"
h1 class="header-text"
p class="welcome-text
p class="reservation"
button class="reservation-btn" 
*/

function initHomepageContent(contentSection) {

    // Create Elements
    const welcomeBox = document.createElement("div");
    const headerText = document.createElement("h1");
    const welcomeText = document.createElement("p");
    const reservationText = document.createElement("p");
    const reservationBtn = document.createElement("button");

    // Assign IDs and classes
    welcomeBox.id = "welcome-box";
    headerText.classList.add("header-text");
    welcomeText.classList.add("welcome-text");
    reservationText.classList.add("reservation");
    reservationBtn.classList.add("reservation-btn");

    // Add text to elements
    headerText.textContent = "El Restuarante de Pizza-Pasta";
    welcomeText.textContent = "Welcome to our lovely restuarant, take a look around!";
    reservationText.textContent = "Or make a reservation:";
    reservationBtn.textContent = "Make Reservation";

    // Append welcomeBox as child of content div
    contentSection.appendChild(welcomeBox)

    // Append other elements as children of welcomeBox
    welcomeBox.appendChild(headerText);
    welcomeBox.appendChild(welcomeText);
    welcomeBox.appendChild(reservationText);
    welcomeBox.appendChild(reservationBtn);

}

export { initHomepageContent }