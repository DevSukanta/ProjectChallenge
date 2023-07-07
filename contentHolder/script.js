 const header =document.getElementById('header');
 const title = document.getElementById('title');
 const excerpt = document.getElementById('excerpt');
 const profile_img = document.getElementById('profile_img');
 const name = document.getElementById('name');
 const date = document.getElementById('date');

 const animated_bgs = document.querySelectorAll('animated-bg');
 const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

 setTimeout(getData, 2500);

 function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'

    title.innerHTML = 'That was for dommy thing....'

    excerpt.innerHTML = 'It was great to see you thanks you saw this and try to use this code thank you so much....'
    profile_img.innerHTML = 
    '<img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" alt="" />'

    name.innerHTML = 'Sukanta Dev'
    date.innerHTML = 'July 07, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
 }