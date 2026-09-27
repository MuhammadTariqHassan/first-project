const menuBtn = document.getElementById('menu'); // Navbar wala open button
const closeBtn = document.getElementById('close-btn'); // Sidebar ke andar wala X button
const sideBar = document.getElementById('side-bar');

// Menu icon par click karne se sidebar open hoga
menuBtn.addEventListener('click', () => {
    sideBar.classList.add('active');
});

// X icon par click karne se sidebar close hoga
closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('active');
});

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Form submit hone par page ko reload hone se rokta hai

    // Aapke exact original HTML IDs se data fetch karna
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const projectType = document.getElementById('project-type').value;
    const message = document.getElementById('message').value;

    // Yahan apna number daalein testing ke liye (Country code ke sath, bina + ya spaces ke)
    const phoneNumber = "923087094581"; // e.g., 923001234567

    // Message ka format jo WhatsApp par show hoga
    const whatsappMessage = `Hello! I have a new project brief for you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Project Type:* ${projectType}\n*Details:* ${message}`;

    // URL Encoding (spaces aur special characters ko handle karne ke liye)
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp link create karna
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Naye tab mein WhatsApp (app ya web) open karna
    window.open(whatsappURL, '_blank');
});