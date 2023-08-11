
// navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')
    
    if (window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// diluar hamburger 
window.addEventListener('click',function(e) {
    if(e.target != hamburger&& e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    };
});

// dark theme

const darkToggle =document.querySelector("#dark-toggle");
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});

function submitForm(event) {
    event.preventDefault(); // Mencegah perilaku default formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

  // Validasi
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting the form.");
        return false; // Mencegah pengiriman formulir
    }

  // Mengubah teks tombol menjadi "Mengirim..."
    var submitButton = document.getElementById("submitButton");
    submitButton.innerHTML = "Sending...";
    
    // Dapatkan formulir yang dikirim
    var form = event.target;
  
    // Kirim formulir menggunakan XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Tangani respons sukses di sini, jika perlu
        console.log('Form berhasil dikirim:', xhr.responseText);
        submitButton.innerText = "Completed Sending";
      } else {
        // Tangani kesalahan di sini, jika perlu
        console.error('Terjadi kesalahan saat mengirim formulir');
        submitButton.innerText = "Failed";
      }
    };
    xhr.send(new FormData(form));
  }