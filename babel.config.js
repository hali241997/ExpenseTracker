module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@redux": "./src/state",
          "@screens": "./src/screens",
        },
      },
    ],
    "react-native-reanimated/plugin", // Has to be listed last
  ],
};
