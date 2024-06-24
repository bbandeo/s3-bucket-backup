import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import fs from 'fs'
import { join } from 'path'



const filePath = join(import.meta.dirname, ".");
const fileContent = fs.readFileSync(filePath, 'utf-8')

const credentials = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: "",
    secretAccessKey: ""
  }
}

const input = {
  "Body": fileContent,
  "Bucket": "",
  "Key": "new_try"
}

const client = new S3Client(credentials)
const command = new PutObjectCommand(input)
// client.send(command).then(res => console.log(res))