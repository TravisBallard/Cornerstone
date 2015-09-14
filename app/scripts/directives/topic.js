'use strict';
angular.module('cornerstoneApp')
	.directive( 'topic', function(){
		return {
			restrict: 'A',
			replace: true,
			transclude: true,
			link: function(scope, el){
				angular.element(document).ready(function(){

					var $ = window.$,
						$el = $(el),
						$icon = $(el).find('.icon');

					$el.hover(function(){
						if( $icon.hasClass('fadeInDownBig')){
							$icon.removeClass('fadeInDownBig');
						}
						$icon.addClass('swing');
					}, function(){
						$icon.removeClass('swing');
					});

				});
			},
			templateUrl: 'views/topic.html'
		};
	});