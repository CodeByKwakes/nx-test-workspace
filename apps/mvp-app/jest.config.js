module.exports = {
  name: 'mvp-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mvp-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
