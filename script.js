// Code goes here

var app = angular.module('theApp', ['pascalprecht.translate']);

app.config(function($translateProvider, $translatePartialLoaderProvider) {
	// $translateProvider.translations('en', {
	// 	TITLE: 'Welcome!',
	// 	MESSAGE: 'This app supports your lanaguage!',
	// 	en: 'English',
	// 	sv: 'Svenska'
	// })
	// .translations('sv', {
	// 	TITLE: 'Välkommen!',
	// 	MESSAGE: 'Denna app stöder ditt språk!',
	// 	en: 'English',
	// 	sv: 'Svenska'
    // });
    // $translatePartialLoaderProvider.addPart('menu');
    // $translateProvider.useLoader('$translatePartialLoader', {
    //     urlTemplate: '/i18n/{part}/{lang}.json'
    //   });
    // $translateProvider.preferredLanguage('en');
    
   ​​ $translateProvider.translations('en', {
        "HEADLINE": "What an awesome module!",
        "PARAGRAPH": "Srsly!",
        "PASSED_AS_TEXT": "Hey there! I'm passed as text value!",
        "PASSED_AS_ATTRIBUTE": "I'm passed as attribute value, cool ha?",
        "PASSED_AS_INTERPOLATION": "Beginners! I'm interpolated!",
        "VARIABLE_REPLACEMENT": "Hi {{name}}",
        "BUTTON_LANG_DE": "German",
        "BUTTON_LANG_EN": "English"
      });
      // configures staticFilesLoader
      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/menu/local-',
        suffix: '.json'
      });
      // load 'en' table on startup
      $translateProvider.preferredLanguage('en');

});

app.controller('HomeCtrl', function($scopeុំ$translate) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
      };
});