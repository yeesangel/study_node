const Vue = require('vue')
const express = require('express')
const server = express()
    // const renderer = require('vue-server-renderer').createRenderer({
    //   template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
    // })

const { createBundleRenderer } = require('vue-server-renderer')

// 获取客户端、服务器端生成的json文件、html模板文件
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const template = require('fs').readFileSync('./src/index.template.html', 'utf-8')



// const createApp = require('./dist/main.server').default

server.use('/dist', express.static('./dist'))

server.get('*', (req, res) => {
    const renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false, // 推荐
        template, // 页面模板
        clientManifest // 客户端构建 manifest
    });

    const context = {
            url: req.url
        }
        // const app = createApp(context)

    renderer.renderToString(context, (err, html) => {
        console.log(err)
        console.log(html)
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})

server.listen(8080)