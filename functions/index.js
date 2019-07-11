const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createRecipeNotification = (notification => {
    return admin.firestore().collection('recipeNotifications')
    .add(notification)
    .then(doc => console.log('recipe notify added', doc))
})

const createUserNotification = (notification => {
    return admin.firestore().collection('userNotifications')
    .add(notification)
    .then(doc => console.log('user notify added', doc))
})


exports.recipeCreated = functions.firestore
    .document('recipes/{recipeId}')
    .onCreate(doc => {
        const recipe = doc.data();
        const notification = {
            content: 'Nowy przepis',
            title: `${recipe.title}`,
            name: `dodany przez ${recipe.authorName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createRecipeNotification(notification)
})

exports.userJoined = functions.auth
    .user()
    .onCreate(user => {
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const newUser = doc.data();
            const notification = {
                content: `Użytkownik ${newUser.name} dołaczył do aplikacji`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createUserNotification(notification)
        })
    
    })