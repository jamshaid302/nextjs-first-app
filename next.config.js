/** @type {import('next').NextConfig} */

/**---------------
if the image has region with it then use this kind of domain
s3-upload-files.s3.eu-north-1.amazonaws.com
-------------
*/

const nextConfig = {
  images: {
    domains: ["s3-bucket-practice.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
