import restaurantContent from './generatePage';

 function component() {
   const content = document.getElementById('content');

   content.textContent = restaurantContent('Gri');

   return content;
 }

 document.body.appendChild(component());