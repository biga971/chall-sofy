Mon Projet
Ce projet est divisé en trois parties :

Un bot de scraping utilisant Puppeteer.
Un serveur backend utilisant AdonisJS.
Un site web utilisant ReactJS.
Structure du projet
bot/ : Contient le code de scraping réalisé avec Puppeteer.
server/ : Contient le serveur backend développé avec AdonisJS.
web/ : Contient l'application web développée avec ReactJS.
Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

Node.js (v14.x ou plus récent)
Yarn (facultatif, sinon utiliser npm)
AdonisJS CLI (optionnel pour certaines commandes)
Installation des dépendances

1. Installation des dépendances du bot de scraping

cd bot
npm install
npm start

2. Installation des dépendances du serveur backend

cd ../server
npm install
npm run dev

Pour lancer les CRON lancer la commande suivante dans un autre terminal
node ace scheduler:run

3. Installation des dépendances du site web

cd ../web
npm install
npm start

Lancement des projets
1. Lancer le bot de scraping
Naviguez dans le dossier bot et lancez le script de scraping :

2. Lancer le serveur backend
Naviguez dans le dossier server et démarrez le serveur AdonisJS :

Le serveur sera disponible sur http://localhost:3333.

un point de terminaison est disponible pour déposé des fichier csv : 
http://localhost:3333/api/upload-csv via la méthod POST

curl \                               
--insecure \
--request POST \
--header 'Content-Type: multipart/form-data' \
'http://localhost:3333/api/upload-csv' \
-F  "csv=@fichier.csv" \ 
--include

3. Lancer le site web
Naviguez dans le dossier web et démarrez l'application React :

L'application sera disponible sur http://localhost:3000.

Notes supplémentaires
Si vous utilisez Yarn au lieu de npm, remplacez npm install par yarn install et npm start par yarn start dans les instructions ci-dessus.
Si vous rencontrez des problèmes de dépendances ou de compatibilité, assurez-vous que les versions de Node.js et d'autres packages sont bien à jour.
Contribuer
Les contributions sont les bienvenues. Veuillez ouvrir une issue ou soumettre une pull request pour proposer des modifications.

