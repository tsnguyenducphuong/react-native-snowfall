# react-native-snowfall 🌨️

An animated snowy background using Reanimated and Skia Atlas.

![npm](https://img.shields.io/npm/v/react-native-snowfall)
![GitHub issues](https://img.shields.io/github/issues/tomatterton/react-native-snowfall)
![GitHub stars](https://img.shields.io/github/stars/tomatterton/react-native-snowfall)
![GitHub license](https://img.shields.io/github/license/tomatterton/react-native-snowfall)

## Installation ❄️

```sh
npm install react-native-snowfall
```

### Peer Dependencies 🔗

This library relies on the following peer dependencies. Make sure they are installed in your project:

```sh
npm install react-native-reanimated @shopify/react-native-skia
```

## Usage 🎨

```jsx
import React from 'react';
import { View } from 'react-native';
import { SnowFall } from 'react-native-snowfall';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Add the SnowFall component */}
      <SnowFall />
      {/* Rest of your app components */}
    </View>
  );
};

export default App;
```

### Customization ✨

You can customize the snowfall effect by passing props to the `SnowFall` component:

```jsx
import React from 'react';
import { View } from 'react-native';
import { SnowFall } from 'react-native-snowfall';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SnowFall
        count={100}
        duration={15000}
        minSize={5}
        maxSize={25}
        imageScale={0.5}
        imagePath={require('./assets/customSnowflake.png')}
      />
      {/* Rest of your app components */}
    </View>
  );
};

export default App;
```

## Props 🎛️

| Prop          | Type               | Default                      | Description                                                               |
| ------------- | ------------------ | ---------------------------- | ------------------------------------------------------------------------- |
| `count`       | `number`           | `70`                         | Number of snowflakes to display.                                          |
| `duration`    | `number`           | `10000`                      | Duration of the snowfall animation in milliseconds.                       |
| `minSize`     | `number`           | `10`                         | Minimum size of the snowflakes.                                           |
| `maxSize`     | `number`           | `20`                         | Maximum size of the snowflakes.                                           |
| `imageScale`  | `number`           | `0.7`                        | Scale factor for the snowflake image.                                     |
| `imagePath`   | `DataSourceParam`  | `require('./snowflake.png')` | Path to the snowflake image asset.                                        |
| `customImage` | `SkImage`          | `undefined`                  | Custom Skia image to use as snowflake. Overrides `imagePath` if provided. |


## Contributing 🙌

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License 📜

MIT

Made with [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) ❄️

Feel free to customize the snowfall effect and enjoy the winter magic in your React Native apps! 🎅
