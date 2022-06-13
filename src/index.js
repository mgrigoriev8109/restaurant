import restaurantContent from './generatePage';
import './style.css';
import Background from './background.jpg';

 function component() {
   const content = document.getElementById('content');
   content.textContent = restaurantContent('Gri');


   return content;
 }

 document.body.appendChild(component());