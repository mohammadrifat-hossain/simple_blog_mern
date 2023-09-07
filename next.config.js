/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  env: {
    DB_URL:
      "mongodb+srv://mohammadrifathossainrk:12123252@cluster0.hmrmimt.mongodb.net/databasename?retryWrites=true&w=majority",
    PAGE_URL: "http://localhost:3000",
    GOOGLE_CLIENT_ID:
      "1040727717481-fvgbdknkbasjivgr9js659mfmb9jhgb5.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "12123252",
  },
};

module.exports = nextConfig;
