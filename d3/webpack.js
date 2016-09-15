/*把源配置成了cnpm之后只能用cnpm install d3 --save-dev安装d3了,npm安装会报错
(1)通过 config 配置指向国内镜像源

npm config set registry http://registry.cnpmjs.org //配置指向源
npm info express  //下载安装第三方包
(2)通过 npm 命令指定下载源

npm --registry http://registry.cnpmjs.org info express
(3)在配置文件 ~/.npmrc 文件写入源地址

nano ~/.npmrc   //打开配置文件
registry =https://registry.npm.taobao.org   //写入配置文件




"Cannot remove 'babel-plugin-transform-es2015-modules-commonjs' from the plugin list."


{
  "name": "ecidi-react-boilerplate",
  "version": "2.0.0",
  "description": "ecidi react boilerplate",
  "main": "index.js",
  "scripts": {
    "start": "cross-env NODE_ENV=development node server",
    "build": "cross-env NODE_ENV=production webpack --config webpack.prod.config.js --color -p",
    "testbuild": "cross-env NODE_ENV=development webpack --config webpack.dev.config.js --color -p"
  },
  "keywords": [
    "react",
    "react-start",
    "react-application",
    "react-boilerplate"
  ],
  "author": "xueying (https://github.com/catcxj)",
  "license": "MIT",
  "babel": {
    "presets": [
      "es2015-webpack",
      "react",
      "stage-0"
    ],
    "env": {
      "production": {
        "only": [
          "app"
        ],
        "plugins": [
          "transform-react-remove-prop-types",
          "transform-react-constant-elements",
          "transform-react-inline-elements"
        ]
      }
    }
  },
  "devDependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.9.1",
    "babel-loader": "^6.2.4",
    "babel-plugin-react-transform": "^2.0.2",
    "babel-plugin-transform-react-constant-elements": "^6.9.1",
    "babel-plugin-transform-react-inline-elements": "^6.8.0",
    "babel-plugin-transform-react-remove-prop-types": "^0.2.7",
    "babel-polyfill": "^6.13.0",
    "babel-preset-es2015": "6.9.0",
    "babel-preset-es2015-webpack": "^6.4.2",
    "babel-preset-react": "^6.5.0",
    "babel-preset-react-hmre": "^1.1.1",
    "babel-preset-stage-0": "^6.5.0",
    "cross-env": "^1.0.8",
    "css-loader": "^0.23.1",
    "eslint": "^3.2.2",
    "eslint-config-airbnb": "^10.0.1",
    "eslint-plugin-import": "^1.13.0",
    "eslint-plugin-jsx-a11y": "^2.1.0",
    "eslint-plugin-react": "^6.0.0",
    "eventsource-polyfill": "^0.9.6",
    "expect": "^1.20.1",
    "expect-jsx": "^2.6.0",
    "exports-loader": "^0.6.3",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "html-loader": "^0.4.3",
    "html-webpack-plugin": "^2.21.0",
    "image-webpack-loader": "^1.8.0",
    "json-loader": "^0.5.4",
    "offline-plugin": "^3.4.0",
    "postcss-cssnext": "^2.6.0",
    "postcss-focus": "^1.0.0",
    "postcss-loader": "^0.9.1",
    "postcss-reporter": "^1.3.3",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.7",
    "webpack": "^2.1.0-beta.13",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-hot-middleware": "^2.10.0"
  },
  "dependencies": {
    "antd": "^1.8.0",
    "babel-polyfill": "^6.9.1",
    "bootstrap": "^3.3.7",
    "chalk": "^1.1.3",
    "compression": "^1.6.2",
    "deep-equal": "^1.0.1",
    "docxtemplater": "^2.1.5",
    "es6-promise": "^3.2.1",
    "express": "^4.14.0",
    "file-saver": "^1.3.2",
    "highcharts": "^v4.2.5",
    "highcharts-exporting": "^0.1.2",
    "highcharts-heatmap": "^0.1.2",
    "highcharts-more": "^0.1.2",
    "history": "^3.0.0",
    "immutable": "^3.8.1",
    "ip": "^1.1.3",
    "jquery": "^3.1.0",
    "jquery-mousewheel": "^3.1.13",
    "jquery.mb.browser": "^1.0.0",
    "jszip-utils": "^0.0.2",
    "malihu-custom-scrollbar-plugin": "^3.1.5",
    "matchmedia-polyfill": "^0.3.0",
    "minimist": "^1.2.0",
    "moment": "^2.14.1",
    "radium": "^0.17.1",
    "react": "^15.1.0",
    "react-bootstrap-table": "^2.3.9",
    "react-dom": "^15.1.0",
    "react-highcharts": "^8.4.1",
    "react-redux": "^4.4.5",
    "react-router": "^2.4.1",
    "react-router-redux": "^4.0.5",
    "react-router-scroll": "^0.2.0",
    "react-utils": "^1.0.0",
    "redux": "^3.5.2",
    "redux-immutable": "^3.0.6",
    "redux-saga": "^0.10.5",
    "reselect": "^2.5.1",
    "sanitize.css": "^4.0.0",
    "shallowequal": "^0.2.2",
    "velocity-react": "^1.1.5",
    "whatwg-fetch": "^1.0.0"
  }
}


//webpack学习:
安装webpack:

project: npm install webpack --save-dev

global: npm install webpack -g

webpack uses async I/O and has multiple caching levels. This makes webpack fast and incredibly fast on incremental compilations.


AMD
require(["module", "../file"], function(module, file) { /* ... */ });
define("mymodule", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue;
});

功能:
webpack takes modules with dependencies and generates static assets representing those modules.


