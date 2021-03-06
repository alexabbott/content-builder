angular.module('contentApp', ['ngSanitize', 'angular-sortable-view', 'smoothScroll', 'ngTouch'])

.config(['$locationProvider', function($locationProvider) {
  'use strict';
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])

.run(['$location', function($location) {
  'use strict';
  FastClick.attach(document.body);
  if ($location.path() != '/custom.html') {
    $location.path('');
  }
}])

.factory('dataObject', function(){
  'use strict';
  var content = {
    sections: [
      {
        section: "General",
        subsections: [
          {
            subsection: "Android Mobile Solutions",
            content: "<div class='card-slide'><h3 class='headline'>Android Mobile Solutions Power Next Generation Business Transformation:</h3><div class='card-holder'><div class='card small'><i class='material-icons'>group</i><p>Improve efficiency and collaboration by <strong>completely connecting kand untethering</strong> your dispersed workforce.</p></div><div class='card small'><i class='material-icons'>trending_up</i><p>Increase confidence, control, and cost savings by <strong>unifying security and management</strong> for every device and every screen.</p></div><div class='card small'><i class='material-icons'>device_hub</i><p>Enable fast, proactive, and strategic decision making by <strong>digitizing processes</strong> and <strong>connecting to data and insights.</strong></p></div></div></div>",
            notes: "Talk about the value behind Google’s vision and what can be achieved through mobile solutions. Describe what impact looks like specifically. 'Mobility can transform your business, bringing long-term value across the enterprise.' Highlight Android and Google willingness to listen and understand current business pressures."
          },
          {
            subsection: "Worlds Biggest OS",
            content: "<div class='stat-slide'><h3 class='headline'>Android, the World's Biggest OS</h3><div class='card-holder'><div class='card small'><div class='stat'>81%</div><p>of the world's mobile devices</p></div><div class='card small'><div class='stat'>500+</div><p>operator partnerships</p></div><div class='card small'><div class='stat'>1.5M</div><p>Android devices activated daily</p></div><div class='card small'><div class='stat'>1.4B+</div><p>30-day active users</p></div><div class='card small'><div class='stat'>400+</div><p>OEMs developing for Android</p></div><div class='card small'><div class='stat'>45%</div><p>share of U.S. corporate purchased smartphones</p></div></div></div>",
            notes: "Highlight that Android has strong partners and is the OS of choice in the consumer and corporate space. 'With Android, you’ll be building with a solid network of partners and a high volume of adoption in both the consumer and corporate space.' 'Start with the world’s biggest, open-source operating system—the OS that your global workforce is using and familiar with today.'"
          }
        ]
      },
      {
        section: "Collective Intelligence",
        subsections: [
          {
            subsection: "Business Transformation",
            content: "<div class='card-slide'><h3 class='headline'>Android Mobile Solutions Power Next Generation Business Transformation:</h3><div class='card-holder'><div class='card small'><i class='material-icons'>face</i><p>Elevate service and increase revenue by <strong>enabling a 360 degree, cross-channel view of your customers.</strong></p></div><div class='card small'><i class='material-icons'>domain</i><p>Improve employee and customer experience by <strong>creating a connected and intuitive workplace.</strong></p></div><div class='card small'><i class='material-icons'>star_border</i><p>Attract talent and empower your workforce by <strong>providing the smartest, most efficient tools for any job, anywhere.</strong></strong></p></div></div></div>",
            notes: "Continue to talk about the transformational value behind Google’s vision and what can be achieved through mobile solutions."
          },
          {
            subsection: "Google Play",
            content: "<div class='stat-slide three-stats'><h3 class='headline'>Google Play, the Largest Distribution Platform Available:</h3><div class='card-holder'><div class='card small'><div class='stat'>65B+</div><p>App installs through Play</p></div><div class='card small'><div class='stat'>1M+</div><p>Apps available</p></div><div class='card small'><div class='stat'>1B+</div><p>30-day active users of Google Apps</p></div></div></div>",
            notes: "Continue that you also have access to the largest secure distribution platform. 'And build with the largest distribution platform available with Google Play.'"
          },
          {
            subsection: "New in Android N",
            content: "<div class='video-slide'><iframe src='https://www.youtube.com/embed/CsulIu3UaUM' frameborder='0' allowfullscreen></iframe></div>",
            notes: "New in Android N and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      },
      {
        section: "Security",
        subsections: [
          {
            subsection: "Continued Investment",
            content: "<div class='card-image-slide'><div class='left'><h3 class='headline'>Continued Google Investment in Security Programs</h3><div class='card large'><h4 class='subheadline'>Security Reward Program:</h4><ul class='arrow-points'><li>Reports from 35 researchers have helped make Android security stronger.</li><li>More than one third or reports were made in Media Server, which has been hardened to resist vulnerabilities.</li></ul><h4 class='subheadline'>OEM Programs:</h4><ul class='arrow-points'><li>CTS Test</li><li>CDD Compatibility</li></ul></div></div><div class='right'><img src='img/phone-security.png' alt='security'></div></div>",
            notes: "Outline specific security programs that Google supports, putting the security researcher community to work in Security Rewards Program, and the CTS Test and CDD Compatibility in partnership with OEMS."
          },
          {
            subsection: "Continual Updates",
            content: "<div class='card-image-slide'><div class='left'><h3 class='headline'>Continual Updates</h3><div class='card large'><h4 class='subheadline'>SafetyNet:</h4><ul class='arrow-points'><li>400 million device scans a day</li><li>6 billion apps checked per day</li></ul></div></div><div class='right'><img src='img/phone-updates.png' alt='continual updates'></div></div>",
            notes: "Explain in additional detail how Android provides continual updates and verifications; tie to Google security services, what they enable and ensure, and how Google intelligence and machine learning supports Android platform security. 'Google Play Services, Application Analysis and Safety Net all work in the cloud to ensure that at any time you download a new app on your device, you are protected from potentially harmful apps, data corruption and data leakage.'"
          },
          {
            subsection: "Android Fingerprints",
            content: "<div class='video-slide'><iframe src='https://www.youtube.com/embed/5HbDQQ5WlS8' frameborder='0' allowfullscreen></iframe></div>",
            notes: "Android fingerprints and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      }
    ]
  };

  return content;
})

.controller('mainController', ['$scope', '$timeout', '$location', '$sce', 'dataObject', 'smoothScroll', function($scope, $timeout, $location, $sce, dataObject, smoothScroll) {
  'use strict';

  $scope.content = dataObject;
  $scope.primaryContent = [];
  $scope.custom = [];
  $scope.link = '';
  $scope.showTitle = true;
  $scope.customTitle = "Custom presentation";
  $scope.showExpanded = '';

  console.log($scope.content);

  // allow iframes and other html to be displayed
  $scope.trustAsHtml = $sce.trustAsHtml;

  // show section in the main content area
  $scope.showSections = function() {
    $scope.primaryContent = this;
    location.hash = "#";
    document.querySelector('.primary-content').scrollTop = 0;
    $scope.showMenu = false;
    $scope.showExpanded = '';
  };

  // show the parent section in the main content area and scroll down to subsection anchor
  $scope.showSubsection = function() {
    var me = this;
    $scope.primaryContent = this;
    $scope.showMenu = false;
    $scope.showExpanded = this.sub.subsection;

    // wait for menu to close and new content to load before smooth scrolling to subsection
    // setTimeout(function(){
    //   var element = document.getElementById(me.sub.subsection.toLowerCase());

    //   var options = {
    //       duration: 700,
    //       easing: 'easeInQuad',
    //       offset: 80,
    //       containerId: 'primary-content'
    //   }
    //   smoothScroll(element, options);
    // }, 300);
  };

  // show expanded view of card
  $scope.showDetails = function() {
    $scope.showExpanded = this.i.subsection;
  };

  // go to prev card
  $scope.goPrev = function() {
    $scope.showExpanded = this.$$prevSibling.i.subsection;
  };

  // go to next card
  $scope.goNext = function() {
    $scope.showExpanded = this.$$nextSibling.i.subsection;
  };

  // add an item to the custom objects array
  $scope.addToCustom = function() {
    $scope.custom.push(this);
  };

  // create a custom link from the items added to the custom array and show modal
  $scope.showLink = function() {
    $scope.link = 'http://' + location.host + '/custom.html?custom=';
    for (var i = 0; i < $scope.custom.length; i++) {
      $scope.link += $scope.custom[i].i.subsection.replace(/ /g, '-') + ',';
    }
    $scope.link = $scope.link.substring(0, $scope.link.length - 1);
    $scope.link += ('&title=' + $scope.customTitle.replace(/ /g,'-'));
    $scope.modalActive = true;
  };

  // remove an item from the custom array
  $scope.removeSection = function(item) {
    for (var n = 0; n < $scope.content.sections.length; n++) {
      for (var x = 0; x < $scope.content.sections[n].subsections.length; x++) {
        if ($scope.content.sections[n].subsections[x].subsection === item.i.subsection) {
          $scope.content.sections[n].subsections[x].disabled = false;
        }
      }
    }
    var index = $scope.custom.indexOf(item);
    $scope.custom.splice(index, 1);
  };

  $scope.saveCollection = function() {
    var newCollection = {};
    newCollection.title = $scope.customTitle;
    newCollection.slides = $scope.custom;
    newCollection.link = 'custom.html?custom=';
    for (var n = 0; n < $scope.custom.length; n++) {
      newCollection.link += ($scope.custom[n].i.subsection + ',');
    }
    newCollection.link += ('&title=' + $scope.customTitle.replace(/ /g,'-'));
    $scope.userCollections.push(newCollection);
    console.log('new', newCollection);
    console.log($scope.userCollections);
  };

  $scope.userCollections = [
    {
      title: 'Presentation 1',
      slides: [
        $scope.content.sections[0].subsections[0],
        $scope.content.sections[0].subsections[1],
        $scope.content.sections[1].subsections[1],
        $scope.content.sections[2].subsections[2]
      ],
      link: 'custom.html?custom=' + $scope.content.sections[0].subsections[0].subsection + ',' + $scope.content.sections[0].subsections[1] + ',' + $scope.content.sections[1].subsections[1] + ',' + $scope.content.sections[2].subsections[2] + '&title=Presentation-1'
    },
    {
      title: 'Custom 2',
      slides: [
        $scope.content.sections[2].subsections[2],
        $scope.content.sections[1].subsections[1],
        $scope.content.sections[2].subsections[3],
        $scope.content.sections[0].subsections[0]
      ],
      link: 'custom.html?custom=' + $scope.content.sections[2].subsections[2].subsection + ',' + $scope.content.sections[1].subsections[1] + ',' + $scope.content.sections[2].subsections[3] + ',' + $scope.content.sections[0].subsections[0] + '&title=Custom-2'
    }
  ];

}])

.controller('customController', ['$scope', '$location', '$sce', 'dataObject', function($scope, $location, $sce, dataObject) {
  'use strict';

  $scope.index = 1;
  $scope.fullscreenCounter = 0;
  $scope.content = dataObject;
  var subsections = [];
  var customContent = [];
  $scope.results = [];

  // set page title
  $scope.customTitle = "Custom presentation";
  $scope.customTitle = $location.search().title.replace(/-/g, ' ');

  // allow iframes and other html to be displayed
  $scope.trustAsHtml = $sce.trustAsHtml;

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
    }
    return -1;
  }
  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  };

  // create new array of subsection objects from original set of content data
  for (var i = 0; i < $scope.content.sections.length; i++) {
    for (var x = 0; x < $scope.content.sections[i].subsections.length; x++) {
      subsections.push($scope.content.sections[i].subsections[x]);
    }
  }

  // create new array of values from query string
  var customSections = $location.search().custom.split(',');
  console.log('section', customSections);
  for (var n = 0; n < customSections.length; n++) {
    customContent.push({'subsection': customSections[n].replace(/-/g, ' ')});
    console.log('content', customContent);
  }

  // filter array of subsections and create new array with objects that match the query string
  subsections.filter(function( obj ) {
    for (var y = 0; y < customSections.length; y++) {
      if (obj.subsection == customSections[y].replace(/-/g, ' ')) {
        $scope.results.push(obj);
      }
    }
    // put results array in correct order
    for (var c = 0; c < $scope.results.length; c++) {
      $scope.results.move(c, findWithAttr(customContent, 'subsection', $scope.results[c].subsection));
    }
  });

  // go to previous slide
  $scope.goPrev = function() {
    $scope.index = $scope.index > 1 ? $scope.index - 1 : 1;
  };

  // go to next slide
  $scope.goNext = function() {
    $scope.index = $scope.index < $scope.results.length ? $scope.index + 1 : $scope.results.length;
  };

  // change slides when pressing left or right keys
  $scope.key = function($event){
    if ($event.keyCode == 39)
        $scope.goNext();
    else if ($event.keyCode == 37)
        $scope.goPrev();
  }

  // make presentation fullscreen
  $scope.requestFullScreen = function() {
    var element = document.body
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
  };

  if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
  }

  // show and hide fullscreen icon depending on whether window is fullscreen or not
  function exitHandler() {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null) {
      $scope.fullscreenCounter += 1;
      if ($scope.fullscreenCounter % 2 === 0) {
        angular.element(document.querySelector('.fullscreen')).removeClass('ng-hide');
        angular.element(document.querySelector('.controls')).removeClass('hide');
        angular.element(document.querySelector('.slide-holder')).removeClass('full');
      } else {
        angular.element(document.querySelector('.fullscreen')).addClass('ng-hide');
        angular.element(document.querySelector('.controls')).addClass('hide');
        angular.element(document.querySelector('.slide-holder')).addClass('full');
      }
    }
  }

}]);
