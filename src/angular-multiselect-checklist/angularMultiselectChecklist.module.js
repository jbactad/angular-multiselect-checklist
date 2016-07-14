(function(angular) {

    // Create all modules and define dependencies to make sure they exist
    // and are loaded in the correct order to satisfy dependency injection
    // before all nested files are concatenated by Gulp

    // Config
    angular.module('angularMultiselectChecklist.config', [])
        .value('angularMultiselectChecklist.config', {
            debug: true
        });

    // Modules
    angular.module('angularMultiselectChecklist.directives', [])
        .directive('multiselectChecklist' [function() {
            return {
                restrict: 'E',
                scope: {

                },
                link: function(scope, element) {
                    var html = '';
                    html += '<div>';
                    html += '</div>';
                    return html;
                }
            };
        }]);
    angular.module('angularMultiselectChecklist', [
        'angularMultiselectChecklist.config',
        'angularMultiselectChecklist.directives',
        'ngSanitize'
    ]);

})(angular);
