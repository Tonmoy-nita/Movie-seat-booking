const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // descendant selector
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; // number coercion

function updateSelectedCount(){
    let ticketPrice = +movieSelect.value
    const selectedSSeats = document.querySelectorAll('.row .seat.selected'); // reselect live
    const selectedIndex=[...selectedSSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })

    localStorage.setItem('selectedSeats',JSON.stringify)

    const selectedSeatsCount = selectedSSeats.length;
    count.innerText  = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }
    updateSelectedCount()

})

movieSelect.addEventListener('change', updateSelectedCount);
    
updateSelectedCount();
