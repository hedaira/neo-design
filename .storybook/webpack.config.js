const path = require("path");

//dont need stories path if you have your stories inside your //components folder
module.exports = ({config}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],

},
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        },
        {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../components/')
        });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};

