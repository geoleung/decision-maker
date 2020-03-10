const animals = [
    {
        name:"dog",
        url: "assets/dog.png"
    },
    {
        name: "cat",
        url: "assets/cat.png"
    },
    {
        name: "monkey",
        url: "assets/monkey.png"
    },
    {
        name: "turtle",
        url: "assets/turtle.png"
    },
    {
        name: "rabbit",
        url: "assets/rabbit.png"
    },
    {
        name: "penguin",
        url: "assets/penguin.png"
    },
    {
        name: "elephant",
        url: "assets/elephant.png"
    },
    {
        name: "dolphin",
        url: "assets/dolphin.png"
    }
]
const seasons = [
    {
        name: "winter",
        url: "assets/winter.png"
    },
    {
        name: "spring",
        url: "assets/spring.png"
    },
    {
        name: "summer",
        url: "assets/summer.png"
    },
    {
        name: "autumn",
        url: "assets/autumn.png"
    }
]
const time = [
    {
        name: "daytime",
        url: "assets/daytime.png"
    },
    {
        name: "nighttime",
        url: "assets/nighttime.png"
    }
]
const zombie = [
    {
        name: "chainsaw",
        url: "assets/chainsaw.png"
    },
    {
        name: "baseball bat",
        url: "assets/baseball.png"
    },
    {
        name: "frying pan",
        url: "assets/pan.png"
    },
    {
        name: "knife",
        url: "assets/knife.png"
    }
]
const travel = [
    {
        name: "by foot",
        url: "assets/walking.png"
    },
    {
        name: "riding",
        url: "assets/riding.png"
    },
    {
        name: "driving",
        url: "assets/driving.png"
    },
    {
        name: "flying",
        url: "assets/flying.png"
    },
    {
        name: "swimming",
        url: "assets/swimming.png"
    }
]
const picked = []

let tallyTotal1 = 0;
let tallyTotal2 = 0;

const selection = []

selection.event = function() {
    $('.choiceInputs').on('submit', function(e){
        e.preventDefault();
        selection[0] = $('#firstChoice').val();
        selection[1] = $('#secondChoice').val();
        $('.choiceInputs').css('display', 'none').hide().slideUp();
        $('p').css('display', 'none');
        // console.log(selection);
        // console.log(valueFirst, valueSecond);
        $('h1').html('Choose');
        $('.decision1').css('display', 'flex').hide().slideDown(500);
    });
};

//on submit
    //get the radio button that is selected
    //get its text
    //push text into array

picked.store1 = function() {
    $('.decision1').on('submit', function(e) {
        e.preventDefault();
        let labelsFor = $(e.target).find('input[type="radio"]:checked').attr('id');
        picked.push($(e.target).find('label[for="' + labelsFor + '"]').text());
        let tally = $(e.target).find('input[type="radio"]:checked').attr('value');
        if (tally === '1') {
            tallyTotal1 = tallyTotal1 + 1;
        } else {
            tallyTotal2 = tallyTotal2 + 1;
        }
        $('.decision1').css('display', 'none').hide().slideUp();
        $('.decision2').css('display', 'flex').hide().slideDown(500);
        // console.log('stored', tallyTotal1, tallyTotal2);
    })
};

picked.store2 = function() {
    $('.decision2').on('submit', function(e) {
        e.preventDefault();
        let labelsFor = $(e.target).find('input[type="radio"]:checked').attr('id');
        picked.push($(e.target).find('label[for="' + labelsFor + '"]').text());
        let tally = $(e.target).find('input[type="radio"]:checked').attr('value');
        if (tally === '1') {
            tallyTotal1 = tallyTotal1 + 1;
        } else {
            tallyTotal2 = tallyTotal2 + 1;
        }
        $('.decision2').css('display', 'none').hide().slideUp();
        $('.decision3').css('display', 'flex').hide().slideDown(500);
        // console.log('stored', tallyTotal1, tallyTotal2);
    })
};

picked.store3 = function() {
    $('.decision3').on('submit', function(e) {
        e.preventDefault();
        let labelsFor = $(e.target).find('input[type="radio"]:checked').attr('id');
        picked.push($(e.target).find('label[for="' + labelsFor + '"]').text());
        let tally = $(e.target).find('input[type="radio"]:checked').attr('value');
        if (tally === '1') {
            tallyTotal1 = tallyTotal1 + 1;
        } else {
            tallyTotal2 = tallyTotal2 + 1;
        }
        $('.decision3').css('display', 'none').hide().slideUp();
        $('.decision4').css('display', 'flex').hide().slideDown(500);
        // console.log('stored', tallyTotal1, tallyTotal2);
    })
};

picked.store4 = function() {
    $('.decision4').on('submit', function(e) {
        e.preventDefault();
        let labelsFor = $(e.target).find('input[type="radio"]:checked').attr('id');
        picked.push($(e.target).find('label[for="' + labelsFor + '"]').text());
        let tally = $(e.target).find('input[type="radio"]:checked').attr('value');
        if (tally === '1') {
            tallyTotal1 = tallyTotal1 + 1;
        } else {
            tallyTotal2 = tallyTotal2 + 1;
        }
        $('.decision4').css('display', 'none').hide().slideUp();
        $('.decision5').css('display', 'flex').hide().slideDown(500);
        // console.log('stored', tallyTotal1, tallyTotal2);
    })
};

picked.store5 = function() {
    $('.decision5').on('submit', function(e) {
        e.preventDefault();
        let labelsFor = $(e.target).find('input[type="radio"]:checked').attr('id');
        picked.push($(e.target).find('label[for="' + labelsFor + '"]').text());
        let tally = $(e.target).find('input[type="radio"]:checked').attr('value');
        if (tally === '1') {
            tallyTotal1 = tallyTotal1 + 1;
        } else {
            tallyTotal2 = tallyTotal2 + 1;
        }
        $('.decision5').css('display', 'none').hide().slideUp();
        // console.log('stored', tallyTotal1, tallyTotal2);
    })
};

const animalSelection = function() {
    $(function(){
        let option1 = animals[Math.floor(Math.random()*animals.length)];
        let option2 = animals[Math.floor(Math.random()*animals.length)];
        let value = Math.floor(Math.random()*2);
        if (value === 1) {
            $('#option1').attr('value', '1');
            $('#option2').attr('value', '0');
        } else {
            $('#option1').attr('value', '0');
            $('#option2').attr('value', '1');
        }
        for (let i = 1; i < 100; i++) {
            if (option1 === option2){
                option2 = animals[Math.floor(Math.random()*animals.length)];
            } else {
                i = 101;
            }
        }
        let image1 = $('<img>').attr('src', option1.url);
        let title1 = $('<h3>').text(option1.name);
        let image2 = $('<img>').attr('src', option2.url);
        let title2 = $('<h3>').text(option2.name);
        let listItem1 = $('<li>');
        let listItem2 = $('<li>');
        listItem1.append(image1, title1);
        listItem2.append(image2, title2);
        $('label[for=option1]').html(listItem1);
        $('label[for=option2]').html(listItem2);
        picked.store1();
        $('#option1').on('click', function(){
            $('#option1').siblings().css('color', 'green');
            if ($('#option1:checked' == true)) {
                $('#option2').siblings().css('color', 'black');
            } 
        });
        $('#option2').on('click', function(){
            $('#option2').siblings().css('color', 'green');
            if ($('#option2:checked' == true)) {
                $('#option1').siblings().css('color', 'black');
            } 
        });
    });
};

const seasonSelection = function() {
    $(function(){
        let option3 = seasons[Math.floor(Math.random()*seasons.length)];
        let option4 = seasons[Math.floor(Math.random()*seasons.length)];
        let value = Math.floor(Math.random()*2);
        if (value === 1) {
            $('#option3').attr('value', '1');
            $('#option4').attr('value', '0');
        } else {
            $('#option3').attr('value', '0');
            $('#option4').attr('value', '1');
        }
        optionButton3 = $('<button>').text(option3);
        optionButton4 = $('<button>').text(option4);
        for (let i = 1; i < 100; i++) {
            if (option3 === option4){
                option4 = seasons[Math.floor(Math.random()*seasons.length)];
            } else {
                i = 101;
            }
        }
        let image1 = $('<img>').attr('src', option3.url);
        let title1 = $('<h3>').text(option3.name);
        let image2 = $('<img>').attr('src', option4.url);
        let title2 = $('<h3>').text(option4.name);
        let listItem1 = $('<li>');
        let listItem2 = $('<li>');
        listItem1.append(image1, title1);
        listItem2.append(image2, title2);
        $('label[for=option3]').html(listItem1);
        $('label[for=option4]').html(listItem2);
        picked.store2();
        $('#option3').on('click', function(){
            $('#option3').siblings().css('color', 'green');
            if ($('#option3:checked' == true)) {
                $('#option4').siblings().css('color', 'black');
            } 
        });
        $('#option4').on('click', function(){
            $('#option4').siblings().css('color', 'green');
            if ($('#option4:checked' == true)) {
                $('#option3').siblings().css('color', 'black');
            } 
        });
    });
};

const timeSelection = function() {
    $(function(){
        let option5 = time[Math.floor(Math.random()*time.length)];
        let option6 = time[Math.floor(Math.random()*time.length)];
        let value = Math.floor(Math.random()*2);
        if (value === 1) {
            $('#option5').attr('value', '1');
            $('#option6').attr('value', '0');
        } else {
            $('#option5').attr('value', '0');
            $('#option6').attr('value', '1');
        }
        for (let i = 1; i < 100; i++) {
            if (option5 === option6){
                option6 = time[Math.floor(Math.random()*time.length)];
            } else {
                i = 101;
            };
        }
        let image1 = $('<img>').attr('src', option5.url);
        let title1 = $('<h3>').text(option5.name);
        let image2 = $('<img>').attr('src', option6.url);
        let title2 = $('<h3>').text(option6.name);
        let listItem1 = $('<li>');
        let listItem2 = $('<li>');
        listItem1.append(image1, title1);
        listItem2.append(image2, title2);
        $('label[for=option5]').html(listItem1);
        $('label[for=option6]').html(listItem2);
        picked.store3();
        $('#option5').on('click', function(){
            $('#option5').siblings().css('color', 'green');
            if ($('#option5:checked' == true)) {
                $('#option6').siblings().css('color', 'black');
            } 
        });
        $('#option6').on('click', function(){
            $('#option6').siblings().css('color', 'green');
            if ($('#option6:checked' == true)) {
                $('#option5').siblings().css('color', 'black');
            } 
        });
    });
};

const zombieSelection = function() {
    $(function(){
        let option7 = zombie[Math.floor(Math.random()*zombie.length)];
        let option8 = zombie[Math.floor(Math.random()*zombie.length)];
        let value = Math.floor(Math.random()*2);
        if (value === 1) {
            $('#option7').attr('value', '1');
            $('#option8').attr('value', '0');
        } else {
            $('#option7').attr('value', '0');
            $('#option8').attr('value', '1');
        }
        for (let i = 1; i < 100; i++) {
            if (option7 === option8){
                option8 = zombie[Math.floor(Math.random()*zombie.length)];
            } else {
                i = 101;
            }
        }
        let image1 = $('<img>').attr('src', option7.url);
        let title1 = $('<h3>').text(option7.name);
        let image2 = $('<img>').attr('src', option8.url);
        let title2 = $('<h3>').text(option8.name);
        let listItem1 = $('<li>');
        let listItem2 = $('<li>');
        listItem1.append(image1, title1);
        listItem2.append(image2, title2);
        $('label[for=option7]').html(listItem1);
        $('label[for=option8]').html(listItem2);
        picked.store4();
        $('#option7').on('click', function(){
            $('#option7').siblings().css('color', 'green');
            if ($('#option7:checked' == true)) {
                $('#option8').siblings().css('color', 'black');
            } 
        });
        $('#option8').on('click', function(){
            $('#option8').siblings().css('color', 'green');
            if ($('#option8:checked' == true)) {
                $('#option7').siblings().css('color', 'black');
            } 
        });
    });
};

const travelSelection = function() {
    $(function(){
        let option9 = travel[Math.floor(Math.random()*travel.length)];
        let option10 = travel[Math.floor(Math.random()*travel.length)];
        let value = Math.floor(Math.random()*2);
        if (value === 1) {
            $('#option9').attr('value', '1');
            $('#option10').attr('value', '0');
        } else {
            $('#option9').attr('value', '0');
            $('#option10').attr('value', '1');
        }
        for (let i = 1; i < 100; i++) {
            if (option9 === option10){
                option10 = travel[Math.floor(Math.random()*travel.length)];
            } else {
                i = 101;
            }
        }
        let image1 = $('<img>').attr('src', option9.url);
        let title1 = $('<h3>').text(option9.name);
        let image2 = $('<img>').attr('src', option10.url);
        let title2 = $('<h3>').text(option10.name);
        let listItem1 = $('<li>');
        let listItem2 = $('<li>');
        listItem1.append(image1, title1);
        listItem2.append(image2, title2);
        $('label[for=option9]').html(listItem1);
        $('label[for=option10]').html(listItem2);
        picked.store5();
        $('#option9').on('click', function(){
            $('#option9').siblings().css('color', 'green');
            if ($('#option9:checked' == true)) {
                $('#option10').siblings().css('color', 'black');
            } 
        });
        $('#option10').on('click', function(){
            $('#option10').siblings().css('color', 'green');
            if ($('#option10:checked' == true)) {
                $('#option9').siblings().css('color', 'black');
            } 
        });
        displayChoices();
        calculateAnswer();
    });
};

let valueFirst = Math.floor(Math.random()*2);
let valueSecond = 0;
if (valueFirst === 0){
    valueSecond = 1;
} else {
    valueSecond = 0;
}

const displayChoices = function() {
    $('.decision5').on('submit', function(){
        $('h4').append('Your Picks:');
        for (i = 0; i < picked.length; i++) {
            $('ol').append('<li>' +picked[i]+ '</li>');
        }
        $('.outcome').css('display', 'flex');
    });
};

const calculateAnswer = function() {
    $('.decision5').on('submit', function(e){
        e.preventDefault();
        $('h1').html('Winner');
        if (tallyTotal1 > tallyTotal2 && valueFirst == 0) {
            $('.result').html(`<h2>`+selection[0]+`!</h2>`);
            // console.log('working1');
        } else if (tallyTotal1 > tallyTotal2 && valueSecond == 0) {
            $('.result').html(`<h2>`+selection[1]+`!</h2>`);
            // console.log('working2');
        } else if (tallyTotal1 <= tallyTotal2 && valueFirst == 1 && valueSecond == 0) {
            $('.result').html(`<h2>`+selection[0]+`!</h2>`);
            // console.log('working3');
        } else if (tallyTotal1 <= tallyTotal2 && valueFirst == 0 && valueSecond == 1) {
            $('.result').html(`<h2>`+selection[1]+`!</h2>`);
            // console.log('working4');
        }
    });
};

$(function(){
    
    selection.event();
    animalSelection();
    seasonSelection();
    timeSelection();
    zombieSelection();
    travelSelection();
    
    
    
});
    // request two inputs from the user
    // on submit, store inputs and assign a value of 0 to one and a value of 1 to the other
    // call the first array and randomly pull two items from the array
    // assign the value of 0 to one item and a value of 1 to the other item
    // display both items as buttons and ask user to choose one
    // store selection in a tally
    // call next array and repeat lines 5-8 four more times
    
    // compare tallies and display the input option associated with the higher tally
    

