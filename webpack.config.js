const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

const addons = (addonsArg) => {
    let addons = [].concat.apply([], [addonsArg]).filter(Boolean);

    return addons.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`));
}

module.exports = (env) => {
    let envConfig = {};
    let addonsArg = undefined;
    if (env) {
        envConfig = require(`./build-utils/webpack.${env.env}`);
        addonsArg = env.addons;
    }
    
    const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(addonsArg));

    return mergedConfig;
};
 