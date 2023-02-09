const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit-btn');
const resultContainer = document.querySelector('.result-container');

// Check local storage for form data
if (sessionStorage.getItem('formData')) {
    // Remove the display property from .result-container
    document.querySelector('.result-container').style.display = 'block';
  }

// Menampilkan isi form di dalam box container
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("clicked");

    const nama = document.querySelector('#nama').value;
    const email = document.querySelector('#email').value;
    const perasaan = document.querySelector('#perasaan').value;
    const jelasin = document.querySelector('#jelasin').value;
    const kesan = document.querySelector('#kesan').value;
    const pesan = document.querySelector('#pesan').value;
    const harapan = document.querySelector('#harapan').value;
        
    let content = `<h2>Result</h2>
    <br><p><strong>Nama: </strong><br>${nama}</p> 
    <br><p><strong>Email: </strong><br>${email}</p> 
    <br><p><strong> Perasaan ke Ferdy:<br></strong>${perasaan}</p>
    <br><p><strong> Coba jelasin gimana: </strong><br>${jelasin}</p> 
    <br><p><strong> Kesan: </strong><br>${kesan}</p> 
    <br><p><strong> Pesan: </strong><br>${pesan}</p>
    <br><p><strong> Harapan: </strong><br>${harapan}</p>`;
    resultContainer.innerHTML = content;
    // resultContainer.style.display = "block";

    sessionStorage.setItem("formData", content);

    console.log("berhasil");
});

// Pop-up konfirmasi submit form
submitBtn.addEventListener('click', function() {
    const confirmSubmit = confirm('Udah yakin sama jawabannya?');

    if (confirmSubmit) {
        form.submit();
        alert('Form berhasil dikirim');
        
    }
});

// Menyimpan isi form setelah dikirim
const saveForm = function() {
    sessionStorage.setItem('nama', document.querySelector('#nama').value);
    sessionStorage.setItem('email', document.querySelector('#email').value);
    sessionStorage.setItem('perasaan', document.querySelector('#perasaan').value);
    sessionStorage.setItem('jelasin', document.querySelector('#jelasin').value);
    sessionStorage.setItem('kesan', document.querySelector('#kesan').value);
    sessionStorage.setItem('pesan', document.querySelector('#pesan').value);
    sessionStorage.setItem('harapan', document.querySelector('#harapan').value);
};
form.addEventListener('submit', saveForm);

// Memuat isi form setelah dikirim
const loadForm = function() {
    document.querySelector('#nama').value = sessionStorage.getItem('nama');
    document.querySelector('#email').value = sessionStorage.getItem('email');
    document.querySelector('#perasaan').value = sessionStorage.getItem('perasaan');
    document.querySelector('#jelasin').value = sessionStorage.getItem('jelasin');
    document.querySelector('#kesan').value = sessionStorage.getItem('kesan');
    document.querySelector('#pesan').value = sessionStorage.getItem('pesan');
    document.querySelector('#harapan').value = sessionStorage.getItem('harapan');
};
window.addEventListener('load', loadForm);

// menampilkan data dari local storage saat page refresh
window.addEventListener("load", function() {
    let formData = sessionStorage.getItem("formData");
    if (formData) {
        // resultContainer.innerHTML = formData;
        sendEmail(formData);
    }
});

function sendEmail(contents) {
    //email code here
    Email.send({
        SecureToken : "01dbc41a-25bc-47ff-b585-833ab761d5e1",
        To : 'm.ferdyfauzan@gmail.com', 
        From : "m.ferdyfauzan@gmail.com",
        Subject : "Wishes Form Submission",
        Body : contents
        }).then(
            alert("Makasih banyak udah ngisi formnyaa <3")
            //console.log("email has been sent")   
        );
}