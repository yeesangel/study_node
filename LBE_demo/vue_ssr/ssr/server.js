const Vue = require('vue')
const express = require('express')
const LRU = require('lru-cache')
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

const microCache = LRU({
    max: 100,
    maxAge: 10000 // 重要提示：条目在 1 秒后过期。
})

const isCacheable = req => {
    // 实现逻辑为，检查请求是否是用户特定(user-specific)。
    // 只有非用户特定(non-user-specific)页面才会缓存
    return true // 对每一个页面都进行缓存
  }
  

server.get('*', (req, res) => {
    const cacheable = isCacheable(req)
    if (cacheable) {
        const hit = microCache.get(req.url)
        if (hit) {
            console.log('========= hit ============')
            return res.end(hit)
        }
    }

    const renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false, // 推荐
        template, // 页面模板
        clientManifest // 客户端构建 manifest
    });

    const context = {
            url: req.url
        }
        // const app = createApp(context)

    // renderer.renderToString(context, (err, html) => {
    //     console.log(err)
    //     console.log(html)
    //     if (err) {
    //         res.status(500).end('Internal Server Error')
    //         return
    //     }
    //     res.end(html)
    //     if (cacheable) {
    //         microCache.set(req.url, html)
    //     }
    // })

    const stream = renderer.renderToStream(context)

    let html = ''

    stream.on('data', data => {
        html += data.toString()
    })

    stream.on('end', () => {
        res.end(html) // 渲染完成
        if (cacheable) {
            microCache.set(req.url, html)
        }
    })

    stream.on('error', err => {
        // handle error...
    })


})

server.listen(8080)