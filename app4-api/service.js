angular.module('apiApp').service('mainSrvc', function($http) {
    
    this.getCharacters = function(num) {
        
        var endpoint = 'http://swapi.co/api/people/' + num + '/';
        return $http.get(endpoint).then(function(response) {
            var results = response.data;
                console.log(results);
            var newResults = [];
            function character(name, species, homeworld, gender, eye_color, hair_color, skin_color) {
                this.name = name;
                this.species = species;
                this.homeworld = homeworld;
                this.gender = gender;
                this.eye_color = eye_color;
                this.hair_color = hair_color;
                this.skin_color = skin_color;
            };
            
            var character = new character(results.name, results.species, results.homeworld, results.gender, results.eye_color, results.hair_color, results.skin_color );
            // newResults.push(newRes);
            

            // for (var i = 0; i < results.length; i++) {

            
            // console.log(newResults);
            return character;
        });
    }
});