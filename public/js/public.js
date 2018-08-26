$(document).ready(function () {


    function makeCharacterTile(updatedCharacters) {
        elementString = '<div class="tile is-ancestor">';
        for (let i in updatedCharacters) {
            elementString += '<div class="tile is-parent"><article class="tile is-child box"><p class="title" name="' + updatedCharacters[i].name + '">' + updatedCharacters[i].name + '</p><p class="subtitle">Priority ' + updatedCharacters[i].priority + '</p><div class="button" id="' + updatedCharacters[i].name + '">Downed</div></article></div>'
            if (i % 2 == 0 && i != 0) {
                elementString += '</div><div class="tile is-ancestor">'
            }
        }
        return elementString;
    }

    function renderCharacters(updatedCharacters) {
        $('#origin').empty().append(makeCharacterTile(updatedCharacters));

        $(".button").click(function () {

            let currentName = $(this).closest('.button').attr("id");
            $.ajax({
                url: `/character/${currentName}/update/downed`,
                method: 'POST',
                success: function (reload) {
                    loadCharacters();
                }
            });
        });

    }

    function loadCharacters() {
        $.ajax({
            url: '/character/load',
            method: 'GET',
            dataType: 'JSON',
            success: function (updatedCharacters) {
                renderCharacters(updatedCharacters);
            }
        });
    };

    loadCharacters();

    $(".button").click(function () {
        let currentName = $(this).closest('.button').attr("id");
        $.ajax({
            url: `/character/${currentName}/update/downed`,
            method: 'POST',
            success: function (reload) {
                loadCharacters();
            }
        });
    });

    $(".addToFight").click(function () {
        let currentName = $(this).closest('.addToFight').attr("id");
        $.ajax({
            url: `/character/${currentName}/update/added`,
            method: 'POST',
            success: function (reload) {
                loadCharacters();
            }
        });
    });

});