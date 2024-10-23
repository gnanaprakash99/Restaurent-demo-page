document.addEventListener('DOMContentLoaded', () => {
    let now = new Date();
    now.setDate(now.getDate() + 1); 
    let formattedDateTime = now.toISOString().slice(0, 16); 
    document.querySelector('#datetime').min = formattedDateTime;
});

let booking = (event) => {
    event.preventDefault();
    
    let bookingId = Math.floor(Math.random() * 1000000);
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let datetime = document.querySelector('#datetime').value;
    let people = document.querySelector('#people').value;
    let message = document.querySelector('#message').value;

    let msg = message.length === 0 ? 'none' : message;

    if (name.length > 0 && email.length > 0 && datetime.length > 0) {
        alert(`Your order is confirmed and your booking ID is ${bookingId}\n
        Name: ${name}\n
        Email: ${email}\n
        Date & time: ${datetime}\n
        People: ${people}\n
        Message: ${msg}`);
    } else {
        alert('Fill in the required details');
    }
};

document.querySelector('form').addEventListener('submit', booking);
