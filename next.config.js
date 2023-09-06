/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'encrypted-tbn0.gstatic.com'
        ]
    },
    env:{
        DB_URL: 'mongodb+srv://mohammadrifathossainrk:12123252@cluster0.hmrmimt.mongodb.net/databasename?retryWrites=true&w=majority'
    }
}

module.exports = nextConfig
