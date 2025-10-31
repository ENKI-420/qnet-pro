/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add .dna as a resolvable extension
    config.resolve.extensions.push('.dna')
    
    // Configure .dna files to be processed like .tsx
    config.module.rules.push({
      test: /\.dna$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    })
    
    return config
  },
  // Enable .dna files in page routing (backwards compatible with .tsx)
  pageExtensions: ['dna', 'tsx', 'ts', 'jsx', 'js'],
}

export default nextConfig
