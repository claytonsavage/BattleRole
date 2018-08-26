// require("babel-core").transform("code", options);



let characterDatabase = {
    '1': {
        'name': 'Marvin',
        'priority': 4,
        'health': 20,
        'group': 1,
        'downed': false
    },
    '2': {
        'name': 'Dan',
        'priority': 7,
        'health': 10,
        'group': 1,
        'downed': false
    },
    '3': {
        'name': 'Steve',
        'priority': 2,
        'health': 10,
        'group': 1,
        'downed': false
    },
    '4': {
        'name': 'Larry',
        'priority': 4,
        'health': 20,
        'group': 2,
        'downed': false
    },
    '5': {
        'name': 'Jim',
        'priority': 7,
        'health': 10,
        'group': 2,
        'downed': false
    },
    '6': {
        'name': 'Jeff',
        'priority': 2,
        'health': 10,
        'group': 1,
        'downed': false
    },
};

// characters in current group
let activeParty = [];

// characters in memory
let allCharacters = [];

// add character
function addCharacterInPlay(character) {
    allCharacters.push(character);
}

// print characters name
function readWhatCharacterIsInPlay() {
    allCharacters.forEach(character => {
        console.log(character.name)
    });
}

// print active party members in fight
function readWhatCharacterIsActiveParty() {
    let i = 0;
    activeParty.forEach(character => {
        i++
        console.log(character.name + ' is the ' + i + ' priority');
    });
}

function charactersInActiveParty() {
    let characters = []
    allCharacters.forEach(character => {
        if(character.group == 1 && character.downed == false){
            characters.push(character);
        }
    });
    return characters;
}

// determine priority of characters
function sortOrderFromPriority() {
    allCharacters.sort(function (a, b) {
        return b.priority - a.priority;
    });
}

// print priority of all characters
function readOrderOfallCharactersFromPriority() {
    sortOrderFromPriority(allCharacters);
    readWhatCharacterIsInPlay();
}

// create group of which characters can fight in current group
function determineActiveParty(currentGroup) {
    allCharacters.forEach(character => {
        if (character.group == currentGroup && character.downed == false) {
            activeParty.push(character);
        }
    })
}

function addAllCharactersFromDatabase() {
    for (let characters in characterDatabase) {
        addCharacterInPlay(characterDatabase[characters])
    }
}

// only run once
function initiateBattle(group) {
    addAllCharactersFromDatabase();
    sortOrderFromPriority();
    determineActiveParty(group);
    console.log('----------------------------');
    console.log('The battle is about to begin. The battle participants are: ')
    readWhatCharacterIsActiveParty();
    console.log('----------------------------');
    //TODO add array of characters
}

function addToBattle(addCharacter) {
    allCharacters.push(addCharacter);
    recalculateOrderAfterAddToBattle();
    console.log('a new character joins the battle. The battle participants are: ');
    readWhatCharacterIsActiveParty();
    console.log('----------------------------');
}

function recalculateOrderAfterAddToBattle() {
    activeParty.sort(function (a, b) {
        return b.priority - a.priority;
    });
}

function changeToDowned(name) {
    for (let character in allCharacters) {
        if (allCharacters[character].name == name) {
            allCharacters[character].downed = true;
            console.log(allCharacters[character].name + ' was defeated.');
            console.log('----------------------------');
        }
    }
}

function changeFromDowned(name) {
    for (let character in allCharacters) {
        if (allCharacters[character].name == name) {
            allCharacters[character].downed = false;
            console.log(allCharacters[character].name + ' was revived.');
            console.log('----------------------------');
        }
    }
}

function changeToGroup(name, currentGroup = 1) {
    for (let character in allCharacters) {
        if (allCharacters[character].name == name) {
            allCharacters[character].group = currentGroup;
            console.log(allCharacters[character].name + ' has joined the group.');
            console.log('----------------------------');
        }
    }
}

function changePriority(name, value) {
    for (let character in activeParty) {
        if (activeParty[character].name == name) {
            activeParty[character].priority = value;
            console.log(activeParty[character].name + ' got higher priority.');
            console.log('----------------------------');
        }
    }
    recalculateOrderAfterAddToBattle();
}

let dragon = {
    'name': 'Crazy Dragon',
    'priority': 12,
    'health': 100,
    'group': 1,
    'downed': false
};

addToBattle(dragon);

// changeToDowned('Jeff');

// changeToDowned('Dan');

// changePriority('Marvin', 20);

export { initiateBattle, charactersInActiveParty, changeToDowned, allCharacters, changeFromDowned, changeToGroup };