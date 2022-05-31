// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    moduleNameMapper: {
      '@app/ui/theme/layout':
        ['<rootDir>/src/app/ui/theme/layout/index.ts'],
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        '@app/ui/icons': ['<rootDir>/src/app/ui/icons/index.ts'],
        stringifyContentPathRegex: '\\.(html|svg)$',
        astTransformers: {
          before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
        },
      },
    },
    coverageDirectory: 'coverage',
    snapshotSerializers: [
      'jest-preset-angular/build/serializers/no-ng-attributes',
      'jest-preset-angular/build/serializers/ng-snapshot',
      'jest-preset-angular/build/serializers/html-comment',
    ],
  };
};
