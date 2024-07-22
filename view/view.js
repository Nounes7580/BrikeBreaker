 class View {
     /**
      * 
      */
     sceneLeft() {
         return $("#zone").offset().left;
     }



     /**
      * ajoute dynamiquement un sprite à la scène
      * @param {*} sprite 
      */

     add(sprite) {
             var span = document.createElement('span');
             span.setAttribute("style", "top: " + sprite.topLeft.y + "px; left: " + sprite.topLeft.x + "px; ");
             span.setAttribute("id", sprite._id);
             span.setAttribute("class", sprite._type);
             document.getElementById("brick").appendChild(span);

         }
         /**
          * modifie la position visuelle du sprite en fonction de son attribut topLeft
          * @param {*} sprite 
          */
     uptade(sprite) {

         if (sprite instanceof Ball) {
             $("#balle").css("left", sprite.topLeft.x + "px");
             $("#balle").css("top", sprite.topLeft.y + "px");

         } else if (sprite instanceof Paddle) {
             document.getElementById('raquette').setAttribute('style', 'left:' + sprite.Left + "px; top:" + sprite.topLeft._y + "px;");

         }
     }

     addAll(tabBricks) {

             for (var i = 0; i < tabBricks.length; i++) {
                 this.add(tabBricks[i]);
             }
             for (var i = 0; i < document.getElementById('brick').childNodes.length; i++) {
                 document.getElementById('brick').childNodes[i].setAttribute('class', tabBricks[i]._type);
                 document.getElementById('brick').childNodes[i].setAttribute('id', tabBricks[i]._id);
             }
             this.displayVie();
         }
         /**
          * affiche le score
          * @param {*} score 
          */
     uptadeScore(score) {

             $("score").text(score)
         }
         /**affiche les coeur  */
     displayVie() {
             for (var i = 0; i < 3; i++) {
                 document.getElementById('vie').appendChild(document.createElement('img'));
                 document.getElementById('vie').childNodes[i].setAttribute('src', 'coeur.png');
                 document.getElementById('vie').childNodes[i].setAttribute('style', 'height:40px; width: 30px');
             }
         }
         /**
          * enleve une vie 
          */
     removeVie() {
             document.getElementById('vie').childNodes[0].remove();
         }
         /**
          * ajoute une vie 
          */
     addVie() {
             document.getElementById('vie').appendChild(document.createElement('img'));
             document.getElementById('vie').childNodes[0].setAttribute('src', 'coeur.png');
             document.getElementById('vie').childNodes[0].setAttribute('style', 'height:30px; width: 20px');
         }
         /**
          * affiche le message du debut de jeu 
          * @param {*} message 
          */
     showMessage(message) {
             document.getElementById('message').innerHTML = message;
         }
         /**
          * retire le message 
          */
     hideMessage() {
         document.getElementById('message').remove();
     }
 }