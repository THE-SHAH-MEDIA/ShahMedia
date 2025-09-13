const fs = require('fs');
const https = require('https');

// GitHub API settings
const OWNER = 'SuhasKumar01';
const REPO = 'shah-media-website';
const BRANCH = 'main';
const TOKEN = process.env.GITHUB_TOKEN; // This would need to be set by user

// List of files to upload
const files = [
  {
    localPath: 'C:\\Users\\suhas\\.vscode\\Projects\\TheShahMedia\\website\\public\\logo-128.webp',
    remotePath: 'public/logo-128.webp'
  },
  {
    localPath: 'C:\\Users\\suhas\\.vscode\\Projects\\TheShahMedia\\website\\public\\logo-64.webp',
    remotePath: 'public/logo-64.webp'
  },
  {
    localPath: 'C:\\Users\\suhas\\.vscode\\Projects\\TheShahMedia\\website\\public\\logo.webp',
    remotePath: 'public/logo.webp'
  },
  {
    localPath: 'C:\\Users\\suhas\\.vscode\\Projects\\TheShahMedia\\website\\public\\typography-optimized.webp',
    remotePath: 'public/typography-optimized.webp'
  }
];

async function uploadFile(file) {
  try {
    // Read file as binary
    const fileContent = fs.readFileSync(file.localPath);
    const base64Content = fileContent.toString('base64');
    
    console.log(`Uploading ${file.remotePath} (${fileContent.length} bytes)`);
    
    const data = JSON.stringify({
      message: `Upload optimized ${file.remotePath}`,
      content: base64Content,
      branch: BRANCH
    });

    const options = {
      hostname: 'api.github.com',
      path: `/repos/${OWNER}/${REPO}/contents/${file.remotePath}`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${TOKEN}`,
        'User-Agent': 'Shah-Media-Upload',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseBody = '';
        res.on('data', (chunk) => {
          responseBody += chunk;
        });
        res.on('end', () => {
          if (res.statusCode === 201) {
            console.log(`✅ Successfully uploaded ${file.remotePath}`);
            resolve(JSON.parse(responseBody));
          } else {
            console.log(`❌ Failed to upload ${file.remotePath}: ${res.statusCode}`);
            console.log(responseBody);
            reject(new Error(`Upload failed: ${res.statusCode}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  } catch (error) {
    console.error(`Error uploading ${file.remotePath}:`, error.message);
    throw error;
  }
}

async function uploadAllFiles() {
  console.log('🚀 Starting upload of optimized WebP files...\n');
  
  for (const file of files) {
    try {
      await uploadFile(file);
      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Failed to upload ${file.remotePath}:`, error.message);
    }
  }
  
  console.log('\n✨ Upload process complete!');
}

// Check if running directly
if (require.main === module) {
  console.log('Note: This script requires a GitHub token to be set as GITHUB_TOKEN environment variable');
  console.log('You can run this manually if you have the token set up, or upload the files through GitHub web interface.');
  console.log('\nFiles to upload:');
  files.forEach(file => {
    const stats = fs.statSync(file.localPath);
    console.log(`  - ${file.remotePath} (${stats.size} bytes)`);
  });
}

module.exports = { uploadAllFiles, files };
