J’ai d’abord initialisé une variable globale "color" (let color= ["red","blue","green","black"])
Ensuite j'ai aussi initialisé une variable globale "i" (let i =0) car si elle n'avait pas été une variable globale, cela ne fonctionnerait pas car la méthode move est appelée autre part, j'ai déduit que cela réinitialisait mon tableau

Ensuite pour que ma balle change de couleur, j'ai fait une méthode en Jquery dont j'appelle mon tableau color ($("#balle").css("background", color[i++]);),
Le i++ me permet d'avancer dans mon tableau.
Au début, j'ai tenté de faire un for pour parcourir le tableau ( for(i=0;i<color<i++) cependant cela bloquait tout mon move. 

Après cela, ma balle changeait bel et bien de couleur mais lorsque tout mon tableau était parcouru, la couleur ne changeait plus.
Du coup, j'ai mis une condition me permettant de réinitialiser mon "i" à Zéro.


         if (i > color.length) {

                i = 0;

            }
