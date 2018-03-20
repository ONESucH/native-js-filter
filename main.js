'use strict';
var dataUsers = [
    [
        {name: 'вера', family: 'коготыжева'},
        {name: 'настя', family: 'беляева'},
        {name: 'аня', family: 'готова'},
        {name: 'лена', family: 'сырник'},
        {name: 'вера', family: 'пономарева'},
        {name: 'вера', family: 'алеева'},
        {name: 'софия', family: 'соловьева'}
    ],
    [
        {name: 'дима', family: 'притыс'},
        {name: 'вова', family: 'волочев'},
        {name: 'петр', family: 'афанасьев'},
        {name: 'вадим', family: 'веров'},
        {name: 'вадим', family: 'краснов'},
        {name: 'вадим', family: 'смелов'},
        {name: 'сергей', family: 'позднер'}
    ]
];

/* Выводим набранный результат в интерфейс */
function getInputValue(inputValue) {
    var yourText = document.getElementsByClassName('your-text')[0],
        littleText = inputValue.toLowerCase();
    
    yourText.innerHTML = littleText;

    getValueOfMassive(littleText);
}

/* Бегаем по массиву чтобы перебрать данные в новый массив */
function getValueOfMassive(text) {
    var postData = '',
        createNewArr = [];
    
    for (var counter = 0; counter < dataUsers.length; counter++) {
        
        dataUsers[counter].forEach(function (item) {

            for (var letter = 0 ; letter < item.name.length; letter++) {
                
                postData += item.name[letter];

                if (postData === text) {
                    var obj = {
                        name: item.name,
                        family: item.family
                    };
                    
                    createNewArr.push(obj);
                }
            }

            postData = '';
        })
    }
    
    createNewArray(createNewArr);
}

/* Покажем результат списком */
function createNewArray(newItem) {
    var result = document.getElementsByClassName('result')[0];

    result.innerHTML = '';
    
    newItem.forEach(function (item) {
        var div = document.createElement('div');
        
        div.innerHTML = '<p>' + item.name + '</p><span>'+ item.family +'</span>';
        result.appendChild(div);
    });
    
}