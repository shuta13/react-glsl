# react-glsl
### dir
```shell
.
├── README.md
├── config
├── package.json
├── public
├── renovate.json
├── scripts
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Canvas.scss
│   │   ├── Canvas.tsx
│   │   └── shaders # add your glsl(vert, frag) file
│   │       └── fragment.glsl
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── tsconfig.json
└── yarn.lock
```
### steps
1. Create react app by npm or yarn
2. Run eject
3. `yarn add gl-react gl-react-dom glslify-loader raw-loader` && `yarn add -D @types/gl-react @types/gl-react-dom`
4. Add rules in `oneOf` of `config/webpack.config.js`
```javascript
oneOf: [
  // for loading glsl
  {
    test: /\.(glsl|frag|vert)$/,
    use: [
      require.resolve('raw-loader'),
      require.resolve('glslify-loader'),
    ]
  },
```
5. Require glsl file in your `.tsx` file
```javascript
const fragment = require('./shaders/fragment.glsl');
```
6. Apply it as string
```javascript
const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`${fragment.default}`
  }
});
```

Watch this example : <https://github.com/shuta13/react-glsl-sample/blob/master/src/components/Canvas.tsx>