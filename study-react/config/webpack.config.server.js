const nodeExternals = require('webpack-node-externals')
const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent') // CSS 모듈의 고유 className을 만들떄 필요한 옵션
const webpack= require('webpack')
const getClientEnvironment = require('./env')

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const  env= getClientEnvironment(paths.publicUrlOrPath.slice(0,-1))
module.exports={
    mode:'production', // 프로덕션 모드로 설정하여 최적화 옵션들을 활성화
    entry: paths.ssrIndexJS, // 엔트리 경로
    target: 'node', // node 환경에서 실행될 것이라는 점을 명시
    output: {
        path:paths.ssrBuild, //빌드 경로
        filename:'server.js',
        chunkFilename: "js/[name].chunk.js", // 청크 파일 이름
        publicPath: paths.publicUrlOrPath, // 정적파일이 제공될 경로
    },
    module:{
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent:
                                                    '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                                            },
                                        },
                                    },
                                ],
                            ],
                            // This is a feature of `babel-loader` for webpack (not Babel itself).
                            // It enables caching results in ./node_modules/.cache/babel-loader/
                            // directory for faster rebuilds.
                            cacheDirectory: true,
                            // See #6846 for context on why cacheCompression is disabled
                            cacheCompression: false,
                            compact: false
                        },
                    },
                    {
                        test:cssRegex,
                        exclude: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            exportOnlyLocals:true
                        }
                    },
                    {
                        test: cssModuleRegex,
                        loader:require.resolve('css-loader'),
                        options: {
                            modules:{
                                exportOnlyLocals : true
                            },
                            getLocalIdent: getCSSModuleLocalIdent
                        }
                    },
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use:[
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    exportOnlyLocals:true
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use:[{
                            loader: require.resolve('css-loader'),
                            options: {
                                modules:{
                                    exportOnlyLocals : true
                                },
                                getLocalIdent: getCSSModuleLocalIdent
                            }
                        },
                        require.resolve('sass-loader')]
                    },
                    {
                        test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            emitFile:false, // 파일을 따로 저장하지 않는 옵션
                            limit:10000, // 원래는 9.76KB가 넘어가면 파일로 저장
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        loader:require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsc|ts|tsx)$/,/\.html$/, /\.json$/],
                        options: {
                            emitFile: false,
                            name:'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules']
    },
    externals: [nodeExternals()],
    plugins: [new webpack.DefinePlugin(env.stringified)]
}
