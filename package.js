Package.describe({
  name: 'urigo:angular2-meteor',
  version: '0.2.3',
  summary: 'Angular2 and Meteor integration',
  git: 'https://github.com/Urigo/Meteor-Angular2',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'check@1.0.5',
    'mongo@1.1.1',
    'tracker@1.0.8',
    'underscore@1.0.4',
    'barbatus:angular2@0.6.4_1'
  ]);

  api.imply([
    'barbatus:angular2'
  ]);

  api.addFiles([
    'system_config.js'
  ]);

  // Adds TS typings.
  api.addFiles([
    'typings/angular2-meteor.d.ts'
  ], 'server');

  api.addFiles([
    'main.ts',
    'modules/meteor_component.ts',
    'modules/cursor_handle.ts',
    'modules/mongo_cursor_observer.ts',
    'modules/mongo_cursor_differ.ts',
    'modules/bootstrap.ts'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'sanjo:jasmine@0.18.0',
    'mongo@1.1.1',
    'underscore@1.0.4',
    'urigo:angular2-meteor'
  ]);

  api.addFiles([
    'tests/client/unit/lib/fakes.js',
    'tests/client/unit/meteor_component_spec.js',
    'tests/client/unit/mongo_cursor_differ_spec.js',
    'tests/client/unit/mongo_cursor_observer_spec.js'
  ], 'client');
});
