# API-Movies

### Démarrer le serveur :
`$ npm start`

### Voir tous les films :
`http://localhost:3000/items`

### Voir un film :
`http://localhost:3000/item/id`

### Installer body parser :
`$ npm install body-parser`

### Installer diskDB :
`$ npm install diskdb`

### Ajouter : 
`$ curl -X POST -H "Content-Type: application/json" --data '{"id": "tt0109831", "name": "Gran Torino", "annee": "2010"}' http://localhost:3000/items`

### Modifier : 
`$ curl -X PUT -H "Content-Type: application/json" --data '{"annee": "2018"}' http://localhost:3000/items/tt0109830`

### Supprimer : 
`$ curl -X DELETE http://localhost:3000/items/tt0468569`
