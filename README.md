# Javascript Pattern
通过详细的用例来阐明Javascript的基本语法与模式。
这里的测试用例是基于[mocha](http://mochajs.org/)的，使用[should](https://github.com/visionmedia/should.js)断言
## 使用
### 安装配置mocha/should
mocha是基于[nodejs](http://nodejs.org/)的，安装mocha，要先安装[nodejs](http://nodejs.org/).
#### 1. 安装mocha
```
sudo npm install -g mocha
```
#### 2. 安装should
```
npm install should --save-dev
```
### 执行用例
例如用例type_check.js
```
mocha type_check.js -R spec
```

