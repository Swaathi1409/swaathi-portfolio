const btns = [
    { id: 1, name: 'Ganesha' },
    { id: 2, name: 'Guru' },
    { id: 3, name: 'Saraswathi' },
    { id: 4, name: 'Murugan' },
    { id: 5, name: 'Shivan' },
    { id: 6, name: 'Durga' },
    { id: 7, name: 'Ramar' },
    { id: 8, name: 'Krishnar' },
    { id: 9, name: 'Hanuman' },
    { id: 10, name: 'Carnatic Fusion' }
  ];
  
  const filters = [...new Set(btns.map((btn) => {return btn}))];
  
  document.getElementById('btns').innerHTML = filters.map((btn) => {
    var { name, id } = btn;
    return "<button class='fil-p' onclick='filterItems("+{id}+`)'>${name}</button>`
  }).join('');

  
  