$(document).ready(function () {


    function makeCharacterTile(updatedCharacters) {
        elementString = "";
        for( let i in updatedCharacters ){
            elementString += '<div class="tile is-parent"><article class="tile is-child box"><p class="title" name="' + updatedCharacters[i].name + '">' + updatedCharacters[i].name + '</p><p class="subtitle">Priority ' + updatedCharacters[i].priority + '</p><div class="button" id="' + updatedCharacters[i].name + '">Downed</div></article></div>'
        }
        return elementString;
    }

    function renderCharacters(updatedCharacters) {
        console.log();

        $('.is-ancestor').empty().append(makeCharacterTile(updatedCharacters));

        $(".button").click(function () {

            let currentName = $(this).closest('.button').attr("id");
            console.log(currentName);
            $.ajax({
                url: `/character/${currentName}/update/downed`,
                method: 'POST',
                success: function (reload) {
                    // reload();
                    loadCharacters();
                    console.log('it works');
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
                console.log(updatedCharacters);
                renderCharacters(updatedCharacters);
            }
        });
    };

      loadCharacters();

    $(".button").click(function () {

        let currentName = $(this).closest('.button').attr("id");
        console.log(currentName);
        $.ajax({
            url: `/character/${currentName}/update/downed`,
            method: 'POST',
            success: function (reload) {
                // reload();
                loadCharacters();
                console.log('it works');
            }
        });
    });

});