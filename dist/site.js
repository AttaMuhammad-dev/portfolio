const filterBar=document.querySelector('.filter-bar');
if(filterBar){
  filterBar.hidden=false;
  const rows=[...document.querySelectorAll('.project-row')];
  const matches=(category,key)=>key==='all'||(key==='web'&&/web/i.test(category))||(key==='mobile'&&/Flutter/.test(category))||(key==='python'&&/Python/.test(category));
  filterBar.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
    filterBar.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    let count=0;
    rows.forEach(row=>{row.hidden=!matches(row.dataset.category,button.dataset.filter);if(!row.hidden)count++;});
    document.getElementById('filter-status').textContent=`Showing ${count} project${count===1?'':'s'}.`;
  }));
}
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>a.closest('details').removeAttribute('open')));
