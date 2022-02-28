初始化项目
```
# 创建node项目
npm init -y

# 初始化hardhat
npx hardhat
choose Create an empty hardhat.config.js

# 安装hardhat
npm install --save-dev "hardhat@^2.8.4"

# 创建合约目录
mkdir contracts
# 创建测试目录和测试文件
# 测试文件名称为 custom-test.js,custom自定义
mkdir test & touch test/hq-test.js

```


为测试安装的插件,https://www.npmjs.com/package/@nomiclabs/hardhat-waffle
```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

安装完测试插件后，需要引入插件
在hardhat.config.js顶部引入
```
// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
```

这样，test文件才能访问 ethers
```
// test/hq-test.js
const { ethers } = require("hardhat");

````

测试所有
npx harhat test
测试单个文件
npx harhat test/hq-test.js