var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',

        })
.state('Login', {
    url: '/Login',
    template: 'login page'
})
           .state('contact', {
                    url: '/contact',
                    templateUrl: 'partial-contact.html'
                })


            .state('contact.contact1',{
                url:'/contact1',
                template: 'hello contact1'

            })

        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html'

        })
        .state('home.paragraph', {
            url: '/paragraph',
            templateUrl: 'partial-home-paragraph.html'
        })

        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am column one!' },

                // for column two, we'll define a separate controller 
                'columnTwo@about': {
                    templateUrl: 'partial-about-columnTwo.html',


                }
            }

             


        });

});