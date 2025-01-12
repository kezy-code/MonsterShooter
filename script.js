//séléctionner les éléments html

let container = document.querySelector('.container');
let btn = document.querySelector('button');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function() {

    //initialiser le score et le temps
    let score = 0;
    let time = 30;

    //la cible spawn tout les ...ms
    timeSpawn = 300

    //initialiser le container avec rien dedans
    container.innerHTML = '';

    let interval = setInterval(function showTarger() {

        //creation de la cible
        let target = document.createElement('img');
        target.id = "target";
        target.src = "target.png";

        //ajouter la cible au container
        container.appendChild(target);

        //le faire spawn dans un endroit random
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        //faire disparaitre la cible après 2 sec
        setTimeout(function() {
            target.remove();
        }, 2000)

        //quand on clique sur la target
        target.onclick = function() {

            //Ajoute au score
            score+=1;

            //suopprime la cible
            target.remove();

        }

        // temps multiplié par 0.001 pour avoir toujours un décompte par seconde
        time-= 0.001 * timeSpawn;

        // convertir le time a virgule en entier
        timeEntier = Math.floor(time)

        //afficher les infos
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Time : ${timeEntier}`;

        //fin du jeu quand le temps est écoulé
        if(time < 0){
            clearInterval(interval);
            container.innerHTML = "le jeu est terminé";
            timeContainer.innerHTML = `Time : 0`
        }

    }, timeSpawn)
}