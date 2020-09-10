const path = require("path");

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
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../components/')
        });

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.unshift({
        test: /\.svg$/,
        include: path.resolve(__dirname, '../stories/'),
        use: ["@svgr/webpack", "url-loader"],
    });

    return config;
};

