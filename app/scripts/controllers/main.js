'use strict';

angular.module('cornerstoneApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.topics = [
      {
        title:'Humanitarianism',
        content: 'The Sphere Handbook in Action Line Course in English, French, Spanish & Arabic; Sexual & Gender based violence; Humanitarian Coordination',
        icon: 'globe.png'
      },
      {
        title:'Program/Operations',
        content: 'Education in Emergencies: A Tool kit for Starting & Managing Education in Emergencies; Technical Project Management (TPM) in WASH Emergencies.',
        icon: 'clipboard.png'
      },
      {
        title:'Management & Leadership',
        content: 'Becoming a Manager Coach; fostering & Maintaining Motivation; Code of Good Practice in the Management & Support of Aid Personnel.',
        icon: 'people.png'
      },
      {
        title:'Staff Safety & Security',
        content: 'Travel Safety & Person Security; Family Matters: Self-Care for Family Members of Humanitarian Workers; Basic Security in the Field.',
        icon: 'aid.png'
      },
      {
        title:'Support Functions',
        content: 'Supporting National Staff; Facilitating a Training Course; Managing Stress in Humanitarian Workers &mdash; Guidelines for Good Practice',
        icon: 'person.png'
      },
      {
        title:'Soft-Skill Course Library',
        content: 'The 12 Guidelines of Effective Time Management; Language Learning Modules for Spanish, French, and English; Writing for the Web.',
        icon: 'computer.png'
      }
    ];

    $scope.workers = [
      {
        name:'Marie McNamee',
        content: 'DisasterReady.org is a powerful professional development tool that enables aid workers to access online training in critical areas... It is a much needed resource that will truly benefit those focused on disaster relief.',
        company: 'InsideNGO',
        thumbnail: 'mariemcnamee.jpg'
      },
      {
        name:'Evan Njoroge',
        content: 'I\'ve been using DisasterReady.org to find training on languages and other topics. This initiative is a great asset for aid workers, many of whom work deep in the field and are not in a position to attend conventional, classroom-based courses.',
        company: 'UNHCR',
        thumbnail: 'evannjoroge.jpg'
      },
      {
        name:'Saori Suzuki',
        content: 'I use DisasterReady.org to take courses on humanitarian coordination and response. I find it useful to access training designed by experienced humanitarian aid workers.',
        company: 'Japan Platform',
        thumbnail: 'saorisuzuki.jpg'
      }
    ];
  }]);
