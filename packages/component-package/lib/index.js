// import utilPackage from 'util-package'

// export default component
const { util } = require("util-package");

module.exports = {
  component: function component() {
    console.log("我是 component package1");
    console.log("下面将从 component package 中执行 utils packages 中的方法");
    util();
  }
};
