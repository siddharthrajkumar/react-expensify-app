import * as firebase from 'firebase';

const config = {
    // get from firebase
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        });

        console.log(expenses);
    });


// Events for on - value, child_removed, child_changed, child_added

// const expenses = [{
//     description: 'Rent',
//     amount: 14000,
//     note: '',
//     createdAt: 1000
// }, {
//     description: 'Water',
//     amount: 1400,
//     note: '',
//     createdAt: 2000
// }, {
//     description: 'Gas',
//     amount: 4000,
//     note: '',
//     createdAt: 500
// }];

// const expensesRefs = [];

// expenses.forEach((expense, index) => {
//     const refToPush = database.ref('expenses').push(expense, (error) => {
//         if (error) {
//             console.log(`Something went wrong at index ${index} `, error);
//         } else {
//             console.log(`Successfully pushed to firebase for index ${index}`);
//         }
//     });
//     expensesRefs.push(refToPush);
// });

// setTimeout(() => {
//     if (expensesRefs.length > 0)
//     {
//         console.log(expensesRefs);
//         expensesRefs[1].update({
//             amount: 2000
//         }).then(() => {
//             console.log('ref update 1 complete ');
//         }).catch((e) => {
//             console.log('ref update 1 failed. ', e);
//         });
//     }
// }, 6000);

// setTimeout(() => {
//     if (expensesRefs.length > 0)
//     {
//         database.ref(`expenses/${expensesRefs[2].key}`).update({
//             amount: 9000
//         }).then(() => {
//             console.log('ref update 2 complete ');
//         }).catch((e) => {
//             console.log('ref update 2 failed. ', e);
//         });
//     }
// }, 9000);

// const notes = [{
//     id: 12,
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: 13,
//     title: 'Second Note',
//     body: 'This is another note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 10000);

// database.ref('location/city').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Siddharth Rajkumar',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Bangalore',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved to firebase!!');
// }).catch((error) => {
//     console.log('Set failed. ', error);
// });

//database.ref().set('This is my data');

// database.ref('age').set(27);

// database.ref('location/city').set('Coimbatore');

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Mumbai'
// });

//database.ref('isSingle').set(null); //- Similar to remove()

// database.ref('isSingle').remove().then(() => {
//     console.log('Property removed successfully from firebase!');
// }).catch((error) => {
//     console.log('Remove Failed. ', error);
// });