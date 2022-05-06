module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@navigation": "./src/navigation",
          "@redux": "./src/state",
          "@screens": "./src/screens",
        },
      },
    ],
    "react-native-reanimated/plugin", // Has to be listed last
  ],
};
