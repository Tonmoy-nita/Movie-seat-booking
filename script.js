const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const clearBtn = document.getElementById('clear-seats');

populateUI();
updateSelectedCount();

let ticketPrice = +movieSelect.value;

// Persist selected movie
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', String(movieIndex));
  localStorage.setItem('selectedMoviePrice', String(moviePrice));
}

// Recalculate totals and persist selected seats
function updateSelectedCount() {
  const selectedSeatsEls = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeatsEls].map((seat) => [...seats].indexOf(seat));

  // Save indices as JSON
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeatsEls.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * +movieSelect.value;
}

// Restore UI from localStorage
function populateUI() {
  // Read safely
  let selectedSeats = [];
  const raw = localStorage.getItem('selectedSeats');
  if (typeof raw === 'string') {
    try { selectedSeats = JSON.parse(raw) || []; } catch { selectedSeats = []; }
  }

  // Apply saved selection
  if (selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.includes(index)) seat.classList.add('selected');
    });
  }

  // Restore movie selection
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) movieSelect.selectedIndex = +selectedMovieIndex;
}

// Events
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected'); // toggle add/remove
    updateSelectedCount();
  }
});

// New: cancel all selected seats
function clearSelectedSeats() {
  // Remove selection from DOM
  document.querySelectorAll('.row .seat.selected')
    .forEach((seat) => seat.classList.remove('selected'));
  // Remove saved indices only (keep selected movie)
  localStorage.removeItem('selectedSeats');
  // Recompute totals
  updateSelectedCount();
}

updateSelectedCount()

clearBtn?.addEventListener('click', clearSelectedSeats);
