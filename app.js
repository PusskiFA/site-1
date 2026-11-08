'use strict';
const arrow = '<svg aria-hidden="true"><use href="#arrow"/></svg>';
const products = {
  coffee: [
    {id:'cappuccino',name:'Капучино',price:260,volume:'200 мл',image:'latte.jpg',position:'54% center',tag:'ВАШ ЛЮБИМЧИК',red:true,short:'Баланс кофе и нежной молочной пены',description:'Знакомый с первой чашки. Двойной эспрессо, тёплое молоко и бархатная пена — ничего лишнего, только идеальный баланс.',ingredients:'Эспрессо, молоко. Содержит лактозу. Можно заменить молоко на растительное.'},
    {id:'flatwhite',name:'Флэт уайт',price:290,volume:'180 мл',image:'coffee.jpg',position:'center 72%',short:'Больше кофе. Мягче, чем кажется.',description:'Для тех, кто любит вкус кофе поярче. Двойной эспрессо под тонким слоем шелковистого молока. Насыщенный, собранный, без спешки.',ingredients:'Двойной эспрессо, молоко. Содержит лактозу. Можно заменить молоко на растительное.'},
    {id:'latte',name:'Латте',price:290,volume:'300 мл',image:'iced-coffee.jpg',short:'Молочная нежность, тёплый или со льдом',description:'Большая чашка спокойствия. Много нежного молока и мягкая кофейная основа. Приготовим горячим или со льдом — как вам нравится.',ingredients:'Эспрессо, молоко, лёд по желанию. Содержит лактозу. Можно заменить молоко на растительное.'},
    {id:'filter',name:'Фильтр-кофе',price:220,volume:'250 мл',image:'hero.jpg',position:'center center',tag:'ДЛЯ ЦЕНИТЕЛЕЙ',short:'Чистый вкус зерна. Каждый день новый.',description:'Зерно, вода и немного магии. Готовим небольшими порциями, чтобы раскрыть природную сладость и аромат кофе. Спросите бариста, что сегодня в воронке.',ingredients:'Свежеобжаренный кофе, фильтрованная вода. Без молока и сахара.'}
  ],
  special: [
    {id:'iced',name:'Айс-латте',price:330,volume:'350 мл',image:'iced-coffee.jpg',tag:'ОСВЕЖИТЬСЯ',red:true,short:'Любимый кофе с прохладным настроением',description:'Свежий эспрессо, холодное молоко и звонкие кубики льда. Для прогулки без маршрута и дней, которые хочется растянуть.',ingredients:'Эспрессо, молоко, лёд. Содержит лактозу. Можно заменить молоко на растительное.'},
    {id:'raf',name:'Ванильный раф',price:360,volume:'300 мл',image:'latte.jpg',short:'Сливочный и мягкий, как воскресенье',description:'Эспрессо, сливки и ваниль взбиваем вместе до воздушной текстуры. Нежный, тёплый и чуть сладкий — маленький десерт в чашке.',ingredients:'Эспрессо, сливки, ванильный сахар. Содержит лактозу.'},
    {id:'caramel',name:'Солёная карамель',price:360,volume:'300 мл',image:'coffee.jpg',position:'center 78%',tag:'СЛАДКИЙ МОМЕНТ',short:'Латте с карамелью и щепоткой соли',description:'Классический латте с карамельным характером. Сладость, щепотка морской соли и эспрессо, который собирает всё вместе.',ingredients:'Эспрессо, молоко, карамельный соус, морская соль. Содержит лактозу.'}
  ],
  bakery: [
    {id:'croissant',name:'Круассан',price:190,volume:'80 г',image:'croissant.jpg',tag:'ХРУСТИТ КАК НАДО',red:true,short:'Золотистая корочка, нежная середина',description:'Тот самый хруст первого кусочка. Слоёное тесто на сливочном масле, золотистая корочка и нежный мякиш. Особенно хорош с капучино.',ingredients:'Пшеничная мука, сливочное масло, молоко, дрожжи, сахар, яйцо, соль. Содержит глютен, лактозу, яйцо.'},
    {id:'cinnamon',name:'Булочка с корицей',price:240,volume:'120 г',image:'cinnamon.jpg',short:'Пряная, мягкая, с сахарной корочкой',description:'Мягкая булочка с ароматной корицей и хрустящими сахарными жемчужинами. Для тех, кому сегодня нужно чуть больше уюта.',ingredients:'Пшеничная мука, молоко, сливочное масло, сахар, яйцо, корица. Содержит глютен, лактозу, яйцо.'},
    {id:'cheesecake',name:'Черничный чизкейк',price:320,volume:'130 г',image:'cheesecake.jpg',short:'Сливочная нежность и яркая черника',description:'Нежный сливочный чизкейк на тонкой песочной основе с ягодной черничной верхушкой. Чуть кислинки, много удовольствия.',ingredients:'Сливочный сыр, сливки, сахар, яйцо, пшеничное печенье, сливочное масло, черника. Содержит глютен, лактозу, яйцо.'}
  ]
};
const grid = document.querySelector('#product-grid');
let activeCategory = 'coffee';
function renderMenu(category) {
  activeCategory = category;
  document.querySelectorAll('[role="tab"]').forEach(tab => {
    const selected = tab.dataset.category === category;
    tab.setAttribute('aria-selected',String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelector('#menu-panel').setAttribute('aria-labelledby','tab-' + category);
  grid.classList.toggle('is-short',products[category].length === 3);
  grid.innerHTML = products[category].map(p => `<button class="product-card" data-product="${p.id}" aria-label="${p.name}, ${p.price} рублей. Подробнее"><span class="product-image"><img src="/images/${p.image}" alt="" width="650" height="700" loading="lazy" style="object-position:${p.position || 'center'}">${p.tag ? `<span class="product-tag ${p.red ? 'is-red' : ''}">${p.tag}</span>` : ''}<span class="product-open" aria-hidden="true">+</span></span><span class="product-heading"><span class="product-name">${p.name}</span><span class="product-price">${p.price} ₽</span></span><span class="product-description">${p.short}<br>${p.volume}</span></button>`).join('');
}
renderMenu('coffee');
document.querySelectorAll('[role="tab"]').forEach((tab,index,tabs) => {
  tab.addEventListener('click',()=>renderMenu(tab.dataset.category));
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key === 'ArrowRight') next=(index+1)%tabs.length;
    if(event.key === 'ArrowLeft') next=(index+tabs.length-1)%tabs.length;
    if(event.key === 'Home') next=0;
    if(event.key === 'End') next=tabs.length-1;
    if(next !== undefined){event.preventDefault();renderMenu(tabs[next].dataset.category);tabs[next].focus();}
  });
});
const allProducts = Object.values(products).flat();
function findProduct(id){return allProducts.find(p=>p.id === id);}
const productDialog = document.querySelector('#product-dialog');
function openDialog(dialog){dialog.showModal();document.body.classList.add('modal-open');}
function openProduct(id){
  const p=findProduct(id);
  if(!p) return;
  document.querySelector('#product-content').innerHTML=`<img class="detail-image" src="/images/${p.image}" alt="${p.name}" style="object-position:${p.position||'center'}"><div class="detail-copy"><p class="eyebrow">МАЛЕНЬКАЯ РАДОСТЬ ИЗ НАШЕГО МЕНЮ</p><h2 id="product-title">${p.name}</h2><p>${p.description}</p><div class="detail-meta"><strong>${p.price} ₽</strong><span>${p.volume}</span></div><span class="small-label">СОСТАВ И АЛЛЕРГЕНЫ</span><p>${p.ingredients}</p><p class="small-label">МЕНЮ ВЫМЫШЛЕННОЙ КОФЕЙНИ · ПОРТФОЛИО-КОНЦЕПТ</p></div>`;
  openDialog(productDialog);
}
grid.addEventListener('click',event=>{const card=event.target.closest('[data-product]');if(card)openProduct(card.dataset.product);});
const quizDialog=document.querySelector('#coffee-quiz');
const quizContent=document.querySelector('#quiz-content');
let quizStep=0;
let quizAnswers={};
const quizQuestions=[
  {title:'Какой у вас<br><span class="serif-word">сегодня ритм?</span>',description:'Всего два вопроса — и ваша чашка найдётся.',options:[['bold','Хочу собраться и свернуть горы'],['soft','Никуда не спешу, хочу нежности'],['sweet','Хочется себя порадовать']]},
  {title:'А настроение —<br><span class="serif-word">какое?</span>',description:'Последний штрих к вашему маленькому ритуалу.',options:[['hot','Хочется тепла и уюта'],['cold','Чего-нибудь освежающего'],['classic','Люблю простую классику']]}
];
function renderQuiz(focus=false){
  if(quizStep===2){renderResult(focus);return;}
  const q=quizQuestions[quizStep];
  quizContent.innerHTML=`<p class="eyebrow">ВАШ КОФЕ — ВОПРОС ${quizStep+1} ИЗ 2</p><h2 id="quiz-title" tabindex="-1">${q.title}</h2><p class="quiz-description">${q.description}</p><div class="quiz-options">${q.options.map(([value,label])=>`<button class="quiz-option" data-answer="${value}">${label}<span aria-hidden="true">↗</span></button>`).join('')}</div>${quizStep ? '<button class="quiz-back" data-quiz-back>← Предыдущий вопрос</button>' : ''}<div class="quiz-progress" aria-hidden="true"><span style="width:${(quizStep+1)*50}%"></span></div>`;
  if(focus)quizContent.querySelector('h2').focus();
}
function getRecommendation(){
  if(quizAnswers[1]==='cold')return quizAnswers[0]==='bold' ? 'iced' : 'latte';
  if(quizAnswers[0]==='sweet')return quizAnswers[1]==='classic' ? 'caramel' : 'raf';
  if(quizAnswers[0]==='bold')return quizAnswers[1]==='classic' ? 'filter' : 'flatwhite';
  return quizAnswers[1]==='classic' ? 'cappuccino' : 'latte';
}
function renderResult(focus){
  const p=findProduct(getRecommendation());
  quizContent.innerHTML=`<p class="eyebrow">КАЖЕТСЯ, ЭТО ВАША ЧАШКА</p><h2 id="quiz-title" tabindex="-1">${p.name}<span class="red-period">.</span></h2><p class="quiz-description">${p.description}</p><img class="quiz-result-image" src="/images/${p.image}" alt="${p.name}" style="object-position:${p.position||'center'}"><p class="quiz-description">${p.volume} · ${p.price} ₽<br>Маленькая рекомендация по настроению.</p><div class="quiz-result-actions"><button class="button button-red" data-show-recommendation="${p.id}">Посмотреть в меню ${arrow}</button><button class="quiz-back" data-quiz-restart>Ещё раз ↻</button></div>`;
  if(focus)quizContent.querySelector('h2').focus();
}
document.querySelectorAll('[data-open-quiz]').forEach(button=>button.addEventListener('click',()=>{quizStep=0;quizAnswers={};renderQuiz();openDialog(quizDialog);}));
quizContent.addEventListener('click',event=>{
  const answer=event.target.closest('[data-answer]');
  if(answer){quizAnswers[quizStep]=answer.dataset.answer;quizStep++;renderQuiz(true);return;}
  if(event.target.closest('[data-quiz-back]')){quizStep=Math.max(0,quizStep-1);renderQuiz(true);}
  if(event.target.closest('[data-quiz-restart]')){quizStep=0;quizAnswers={};renderQuiz(true);}
  const recommendation=event.target.closest('[data-show-recommendation]');
  if(recommendation){
    const id=recommendation.dataset.showRecommendation;
    const category=Object.keys(products).find(key=>products[key].some(p=>p.id===id));
    quizDialog.close();renderMenu(category);
    const card=grid.querySelector(`[data-product="${id}"]`);
    card.classList.add('highlight');card.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});card.focus({preventScroll:true});
    window.setTimeout(()=>card.classList.remove('highlight'),3500);
  }
});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('[data-close-dialog]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
});
const navToggle=document.querySelector('.nav-toggle');
const navigation=document.querySelector('#navigation');
function closeNavigation(){navToggle.setAttribute('aria-expanded','false');navToggle.setAttribute('aria-label','Открыть меню');navigation.classList.remove('is-open');}
navToggle.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!open));navToggle.setAttribute('aria-label',open?'Открыть меню':'Закрыть меню');navigation.classList.toggle('is-open',!open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNavigation));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const restore=navigation.classList.contains('is-open')&&navigation.contains(document.activeElement);closeNavigation();if(restore)navToggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeNavigation();});
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !motionPreference.matches){
  document.documentElement.classList.add('js-motion');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const heroSlides=[{image:'latte.jpg',alt:'Бариста наливает молоко в чашку свежего кофе',position:'54% center'},{image:'hero.jpg',alt:'Приготовление свежего фильтр-кофе в кофейне',position:'center'},{image:'coffee.jpg',alt:'Чашки капучино на деревянном столе среди растений',position:'center 72%'}];
let heroSlide=0;
const heroNext=document.querySelector('#hero-next');
heroNext.addEventListener('click',()=>{
  heroSlide=(heroSlide+1)%heroSlides.length;
  const slide=heroSlides[heroSlide];const img=document.querySelector('.hero-image');
  img.src='/images/'+slide.image;img.alt=slide.alt;img.style.objectPosition=slide.position;
  heroNext.textContent=`0${heroSlide+1} / 03 ↗`;
});

const tickerToggle=document.querySelector('#ticker-toggle');
tickerToggle.addEventListener('click',()=>{const paused=tickerToggle.getAttribute('aria-pressed')!=='true';tickerToggle.setAttribute('aria-pressed',String(paused));tickerToggle.setAttribute('aria-label',paused?'Продолжить бегущую строку':'Приостановить бегущую строку');tickerToggle.textContent=paused?'▷':'Ⅱ';document.querySelector('.ticker-track').style.animationPlayState=paused?'paused':'running';});
