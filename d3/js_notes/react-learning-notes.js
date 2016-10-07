/*
1.React official tutorial

Operating on the DOM nodes may also be tricky because the wrapper component has no way to know when the child’s state updates. You can solve this by providing a callback ref (new in React 0.13) as one of the props to the composed component. It can then use ref={this.props.someRef} to notify the higher-order component about attaching and detaching a particular DOM node. The higher-order component can then use React.findDOMNode to work with that node.
get rid of react mixin?

The idea is to have every mixin call super() to allow predictable chaining.

The mixin(...mixins) function would essentially create a new prototype chain with each mixin's set of functions stacked on top of each other in order. An object is treated as a prototype. A function is treated as a class/constructor and gets all their static methods + their prototype merged.

Idiomatic React reusable code should primarily be implemented in terms of composition and not inheritance.


Learning React by copying biolerplates is like learning to cook by eating food in fancy restaurants.It doesn't work.You need to start with basics and ignore the fear of missing out.It's unfounded.People create boilerplates to show off what they built or learned,not help you learn.
https://github.com/petehunt/react-howto
所有的软件都是建立在某个技术栈之上的, 你需要对整个技术栈有足够深入的理解, 才能建造你的应用. 为什么 React 生态圈的工具似乎总让人感觉压力山大呢, 因为它总是以错误的顺序被解释:
许多人一坐下来刚开始构建应用, 就认为需要用 Flux 来定义他们的数据模型. 这样采用 Flux 是不对的, Flux 应该在大量组件被建立完成以后才被引入.

React 组件之间存在层级关系. 在很多时候, 你的数据模型也跟随这种层级. 这种情况下, Flux 不会给你很大帮助. 但有些时候, 你的数据模型没有层次, 当你的 React 组件开始接受没有关联的 props 的时候, 或者当小部分组件开始变得复杂的时候, 你才可能需要看看 Flux.

你会知道什么时候需要用 Flux. 如果你不确定是否需要用它, 你就不需要它.
Immutable.js 提供了一系列的数据结构, 以帮助解决构造 React 应用时的某些性能问题. 这是一个很棒的库, 你可能会在应用发展的过程里大量用到它, 但直到你在意识到性能问题以前, 它是完全不必要的.
这些技术可以帮你减少 AJAX 请求数, 它们仍然是非常前沿的, 所以如果你没有遇到过多 AJAX 请求的问题, 就不需要用到 Relay 或者 Falcor.

Thinking in React
Since you're often displaying a JSON data model to a user, you'll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That's because UI and data models tend to adhere to the same information architecture, which means the work of separating your UI into components is often trivial. Just break it up into components that represent exactly one piece of your data model.
步骤是:
划分组件,每个表示单一功能,如果某个组件end up growing,则需要再细分
列出组件间层级关系
To build a static version of your app that renders your data model, you'll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you're familiar with the concept of state, don't use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don't need it.

DRY原则:
To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you're building a TODO list, just keep an array of the TODO items around; don't keep a separate state variable for the count. Instead, when you want to render the TODO count, simply take the length of the TODO items array.
如果你创建的并非单页面应用, 请不要使用路由. 














2.webpack tutorial:
它和browserify类似 但是它可以把你的应用拆分成多个文件。如果你的单页应用里有很多页面，用户只会下载当前访问页面的代码。当他们访问应用中的其他页面时，不再需要加载与之前页面重复的通用代码。
它可以替代gulp和grunt 因为他可以构建打包css、预处理css、编译js和图片等。
如何调用webpack?

选择一个目录下有webpack.config.js文件的文件夹，然后运行下面的命令:

webpack 开发环境下编译
webpack -p 产品编译及压缩
webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
webpack -d 引入 source maps
你也要看下babel-loader的介绍，它会作为一个开发环境下的依赖加载到我们的项目中(run npm install babel-core babel-preset-es2015 babel-preset-react)

// webpack.config.js
module.exports = {
  entry: './main.js', // 入口文件
  output: {
    filename: 'bundle.js' // 打包输出的文件
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,  // test 去判断是否为.coffee的文件,是的话就是进行coffee编译
        loader: 'coffee-loader'
      },
      {
        test: /\.js$/, // test 去判断是否为.js,是的话就是进行es6和jsx的编译
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
如果你希望在require文件时省略文件的扩展名，只需要在webpack.config.js中添加 resolve.extensions 来配置。

// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  }
};
Css样式和图片的加载

首先你需要用require()去加载你的静态资源(named as they would with node's require()):

require('./bootstrap.css');
require('./myapp.less');

var img = document.createElement('img');
img.src = require('./glyph.png');
但是这需要你在webpack.config.js做相应的配置(这里还是使用loaders)

// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    path: './build', // 图片和js会放在这
    publicPath: 'http://mycdn.com/', // 这里用来生成图片的地址
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // 用!去链式调用loader
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // 内联的base64的图片地址，图片要小于8k，直接的url的地址则不解析
    ]
  }
};

项目中有些代码我们只为在开发环境（例如日志）或者是内部测试环境（例如那些没有发布的新功能）中使用，那就需要引入下面这些魔法全局变量（magic globals）：

if (__DEV__) {
  console.warn('Extra logging');
}
// ...
if (__PRERELEASE__) {
  showSecretFeature();
}
同时还要在webpack.config.js中配置这些变量，使得webpack能够识别他们。

// webpack.config.js

// definePlugin 会把定义的string 变量插入到Js代码中。
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [definePlugin]
};

配置完成后，就可以使用 BUILD_DEV=1 BUILD_PRERELEASE=1 webpack来打包代码了。 值得注意的是，webpack -p 会删除所有无作用代码，也就是说那些包裹在这些全局变量下的代码块都会被删除，这样就能保证这些代码不会因发布上线而泄露。
如果你有两个页面：profile和feed。如果你希望用户访问profile页面时不加载feed页面的代码，那就需要生成多个bundles文件：为每个页面创建自己的“main module”（入口文件）。

// webpack.config.js
module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // name是基于上边entry中定义的key
  }
};
在profile页面中插入<script src="build/Profile.js"></script>。feed也一样。
Feed和Profile页面存在大量通用代码(比如React、公共的样式和组件等等)。webpack可以抽离页面间公共的代码，生成一个公共的bundle文件，供这两个页面缓存使用:

// webpack.config.js

var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js'); // 引入插件

module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // 为上面entry的key值
  },
  plugins: [commonsPlugin]
};
在上一步引入自己的bundle之前引入<script src="build/common.js"></script>
虽然CommonJS是同步加载的，但是webpack也提供了异步加载的方式。这对于单页应用中使用的客户端路由非常有用。当真正路由到了某个页面的时候，它的代码才会被加载下来。

指定你要异步加载的 拆分点。看下面的例子

if (window.location.pathname === '/feed') {
  showLoadingState();
  require.ensure([], function() { // 这个语法痕奇怪，但是还是可以起作用的
    hideLoadingState();
    require('./feed').show(); // 当这个函数被调用的时候，此模块是一定已经被同步加载下来了
  });
} else if (window.location.pathname === '/profile') {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./profile').show();
  });
}
剩下的事就可以交给webpack，它会为你生成并加载这些额外的 chunk 文件。

webpack 默认会从项目的根目录下引入这些chunk文件。你也可以通过 output.publicPath来配置chunk文件的引入路径

// webpack.config.js
output: {
    path: "/home/proj/public/assets", // webpack的build路径
    publicPath: "/assets/" // 你require的路径
}


3.Redux:
Redux offers a tradeoff. It asks you to:
Describe application state as plain objects and arrays.
Describe changes in the system as plain objects.
Describe the logic for handling changes as pure functions.

These limitations are appealing to me because they help build apps that:
Persist state to a local storage and then boot up from it, out of the box.
Pre-fill state on the server, send it to the client in HTML, and boot up from it, out of the box.
Serialize user actions and attach them, together with a state snapshot, to automated bug reports, so that the product developers can replay them to reproduce the errors.
Pass action objects over the network to implement collaborative environments without dramatic changes to how the code is written.
Maintain an undo history or implement optimistic mutations without dramatic changes to how the code is written.
Travel between the state history in development, and re-evaluate the current state from the action history when the code changes, a la TDD.
Provide full inspection and control capabilities to the development tooling so that product developers can build custom tools for their apps.
Provide alternative UIs while reusing most of the business logic.


Finally, don’t forget that you can apply ideas from Redux without using Redux.
But if you trade something off, make sure you get something in return.
*/
import React, { Component } from 'react';

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

class Counter extends Component {
  state = counter(undefined, {});
  
  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };
  
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

/*I think we’re in a weird transitional period where the widespread usage of classes is a necessary evil because they are limiting. They are certainly better than learning a new ad-hoc class system that comes with every framework, each with its own way of multiple inheritance in form of mixins.

So What About React Components?
I hope that the rules above show why this is a terrible idea:
import { Component } from 'react';
class BaseButton extends Component {
  componentDidMount() {
    console.log('hey');
  }
  render() {
    return <button>{this.getContent()}</button>;
  }
}
class RedButton extends BaseButton {
  componentDidMount() {
    super.componentDidMount();
    console.log('ho');
  }
  getContent() {
    return 'I am red';
  }
  render() {
    return (
      <div className='red'>
        {super.render()}
      </div>
    );
  }
}
However I say that the code below is just fine.
import { Component } from 'react';
class Button extends Component {
  componentDidMount() {
    console.log('hey');
  }
  render() {
    return (
      <div className={this.props.color}>
        <button>{this.props.children}</button>
      </div>
    );
  }
}
class RedButton extends Component {
  componentDidMount() {
    console.log('ho');
  }
  render() {
    return (
      <Button color='red'>
        I am red
      </Button>
    );
  }
}
Yes, we used the dreaded class keyword but we didn’t create a hierarchy, as we always extended Component. And you can write lint rules for that, if you wish so. There is no need to jump through the hoops just to avoid using the class keyword in the code above. It’s not a real issue.
When you want to supply a component with some additional functionality in a generic way, higher order components cover pretty much every use case I have encountered so far. Technically they are just higher order functions.
After discovering higher order components, I haven’t felt the need for either createClass()-style mixins, proposed-for-ES7 mixins, “stamp composition”, or any other composition solution. This is another argument in favor of just using class — because you don’t realistically need anything “more powerful”.
As of React 0.14 you can write the components as pure functions. This is totally worth doing. Any time you can write a function instead of a class, do.
However, when you need the lifecycle hooks or state, until React settles on some purely functional solution, I see no harm in using classes given that you don’t break the rules above. In fact it will be easier to migrate from ES6 classes to a purely functional approach than from anything else.
I am thus concerned about using “compositional solutions” that don’t directly harness React’s composition model, as in my view it’s a step back and conceptually is closer to mixins that don’t make sense in the functional paradigm.
So what are my recommendations for React components?
You can use class in your JS if you don’t inherit twice and don’t use super.
Prefer to write React components as pure functions when possible.
Use ES6 classes for components if you need the state or lifecycle hooks.
In this case, you may only extend React.Component directly.
Give your feedback to the React team on the functional state proposals.

notes from below:
https://medium.com/@dan_abramov

1).You Might Not Need Redux
every day when you lie on the bed think about the work you've done and figure out how you can finish it more easily in shortest time and being smarter at your work! Think outside the box and keep doing this at a different point of view.

