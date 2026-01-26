
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
   
    const footerText = document.querySelector('footer div'); 
    
    if (footerText) {
        footerText.textContent = `Copyright Little Lemon ${currentYear}`;
        console.log("Footer year updated!"); 
    } else {
        console.log("Could not find the footer div.");
    }
});


function validateReservation() {
    const firstName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;

    if (firstName === "" || email === "") {
        alert("Please fill in your name and email first!");
    } else {
        alert(`Thank you, ${firstName}! Your table is booked.`);
        document.querySelector('form').reset();
    }
}


function filterMenu() {
    let input = document.getElementById('menuSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('menu-item-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').textContent.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = ""; 
        } else {
            cards[i].style.display = "none"; 
        }

    }
}
