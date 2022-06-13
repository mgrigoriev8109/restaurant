import restaurantContent from './generatePage';
import './style.css';

 function component() {
   const content = document.getElementById('content');

   content.textContent = restaurantContent('Gri');

   return content;
 }

 document.body.appendChild(component());