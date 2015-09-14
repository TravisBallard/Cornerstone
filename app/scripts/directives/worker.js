'use strict';
angular.module('cornerstoneApp')
	.directive( 'worker', function(){
		return {
			restrict: 'A',
			replace: true,
			transclude: true,
			link: function(scope, el){
				angular.element(document).ready(function(){
					var $ = window.$,
						$el = $(el),
						$title = $el.find('h4');

					$el.hover(function(){ $title.slideToggle('fast'); });
				});
			},
			templateUrl: 'views/worker.html'
		};
	});