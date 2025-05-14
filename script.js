document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('event-list');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalDate = document.getElementById('modal-date');
    const closeModal = document.getElementById('close-modal');
  
    const events = JSON.parse(localStorage.getItem('events')) || [];
  
    function renderEvents(data) {
      if (!list) return;
      list.innerHTML = '';
      data.forEach((e, i) => {
        const div = document.createElement('div');
        div.className = 'event';
        div.innerHTML = `<h3>${e.title}</h3><p>${e.date}</p>`;
        div.addEventListener('click', () => {
          modalTitle.innerText = e.title;
          modalDesc.innerText = e.desc;
          modalDate.innerText = e.date;
          modal.classList.remove('hidden');
        });
        list.appendChild(div);
      });
    }
  
    if (list) renderEvents(events);
    if (closeModal) {
      closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    }
  });
  function login() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
      alert('istifadəçi adını daxil edin');
      return;
    }
    localStorage.setItem('username', username);
    window.location.href = 'add.html'; 
  }
    