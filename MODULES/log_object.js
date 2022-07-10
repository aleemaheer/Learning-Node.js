const obj = {
    name: 'Aleem',
    age: '18',
    city: 'islamabad',
    person2: {
        name: 'John',
        age: '17',
        city: 'Boston'
    }
}

try {
    console.log(obj);
    console.log(JSON.stringify(obj, null, 2));
    console.log('%o', obj);
}
catch (err) {
    console.log(err.message);
}