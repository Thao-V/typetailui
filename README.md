# TypeTailUI

## Overview
TypeTailUI is a mobile-first UI library designed to accelerate the development of web applications. Harnessing the power of ReactJS, TypeScript, and Tailwind CSS, this library offers a range of components specifically tailored for creating responsive and efficient mobile-first web interfaces. Our goal is to simplify the development process without sacrificing flexibility or performance.
[GitHub Repository](https://github.com/Thao-V/typetailui)
## Installation
To start using TypeTailUI in your project, install it via npm:

```bash
npm install typetailui
# or
yarn add typetailui
```
## Usage
### Importing components
You can import individual components from typetailui like so:
```JavaScript
import { Button, Text } from 'typetailui';
```
## Using components
Here's an example of using the Button component:
```JavaScript
import React from 'react';
import { Button } from 'typetailui';

const MyComponent = () => {
  return (
    <Button title="Click Me" onClick={() => console.log('Button clicked')}/>
  );
};

export default MyComponent;

```
### Available Components
1. ActivitiIndicator
2. Alert
3. BackgroundImage
4. Button
5. CheckBoxButton
6. Container
7. CopyableText
8. ErrorBoundary
9. Footer
10. GroupBox
11. H1-H4
12. Image
13. ImageSlider
14. Input
15. JsonEditor
16. NumericInput
17. RadioButton
18. Select
19. Text
20. TextEditor
21. TextArea
22. YouTubeVideo
## License
TypeTailUI is licensed under the Apache License 2.0. See the LICENSE file for more information.