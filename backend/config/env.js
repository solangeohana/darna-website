import envalid, { str, email, port, url } from 'envalid'

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  MONGO_URI: url(),
  PORT: port({ devDefault: 5000 }),
  JWT_SECRET: str(),

  RECEIVER_EMAIL: email({ default: 'contact@darna-immobilien.com' }),
  FROM_EMAIL: email({ default: 'contactrequest.darna@gmail.com' }),
  FROM_PASSWORD: str(),

  DO_SPACE: str({
    default: 'https://darna-images-upload.fra1.digitaloceanspaces.com',
  }),
  DO_SPACE_BUCKET: str({ default: 'darna-images-upload' }),
  DO_SPACE_KEY: str(),
  DO_SPACE_SECRET: str(),
})

export default env
