module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|expo|expo-status-bar|expo-modules-core|react-clone-referenced-element|react-native-vector-icons|@expo|@unimodules|@react-native-async-storage|@react-native-community|@react-native-masked-view|@react-native-picker|@react-native-segmented-control|@react-native-segmented-control/segmented-control|@react-native-safe-area-context|@react-native-community/masked-view)/)',
  ],
  moduleNameMapper: {
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
};