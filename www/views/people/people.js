angular.module('starter')
    .controller('CardsCtrl', function ($scope, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate) {
        console.log('CARDS CTRL');
        $ionicSideMenuDelegate.canDragContent(false);
        var cardTypes = [];
        $ionicLoading.show();
        $http.get('https://randomuser.me/api/?results=5').success(function (response) {
            /*angular.forEach(response.results, function (famous) {
             cardTypes.push(famous);

             //console.log(JSON.stringify(famous));
             });*/
            /**
             * http://preview.images.memegenerator.net/Instance/Preview?imageID=6541210&generatorTypeID=&panels=&text0=&text1=Testing&text2=&text3=
             *
             */
            var cats = [332591, 1533638, 1119726, 5780845, 6565502, 6541210, 332591, 1533638, 1119726, 5780845, 6565502, 6541210];
            var questions = [
                'Do you find this app disturbing?',
                'Do you like cats?',
                'Do your cats like you?',
                'Would you like to be a cat?',
                'Meow?',
                'Dogs suck, right?',
                'Do you find this app disturbing?',
                'Do you like cats?',
                'Do your cats like you?',
                'Would you like to be a cat?',
                'Meow?',
                'Dogs suck, right?'
            ];

            for (var i = 0; i < cats.length; i++) {
                cardTypes.push({
                    question: 'How\'s it going? ' + i,
                    cat_img: 'http://preview.images.memegenerator.net/Instance/Preview?imageID='+ cats[i] + '&generatorTypeID=&panels=&text0=&text1=' + questions[i]
                });
            }

            $ionicLoading.hide();
        }).error(function (err) {
            console.log(err);
        });

        //$scope.cards = Array.prototype.slice.call(cardTypes, 0);


        $scope.cards = cardTypes;
        $scope.cardDestroyed = function (index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function () {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        };

        $scope.yesCard = function () {
            console.log('YES');
            $scope.addCard();
        };

        $scope.noCard = function () {
            console.log('NO');
            $scope.addCard();
        };
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.cardSwipedLeft = function (index) {
            console.log('LEFT SWIPE');
            $scope.addCard();
        };
        $scope.cardSwipedRight = function (index) {
            console.log('RIGHT SWIPE');
            $scope.addCard();
        };
    })
    /*.controller('CardCtrl', function ($scope, TDCardDelegate) {
     $scope.cardSwipedLeft = function (index) {
     console.log('LEFT SWIPE');
     $scope.addCard();
     };
     $scope.cardSwipedRight = function (index) {
     console.log('RIGHT SWIPE');
     $scope.addCard();
     };
     })*/;
