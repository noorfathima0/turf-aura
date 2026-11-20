import sharp from 'sharp'
import { readdir, mkdir, rename, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SCREENS = path.join(ROOT, 'src/assets/screens')
const LOGO = path.join(ROOT, 'src/assets/logo.png')
const BACKUP = path.join(ROOT, 'originals') // untouched copies, kept out of git

await mkdir(path.join(BACKUP, 'screens'), { recursive: true })

// Screenshots -> WebP, 480px wide
for (const file of await readdir(SCREENS)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue
  const src = path.join(SCREENS, file)
  const out = path.join(SCREENS, file.replace(/\.(png|jpe?g)$/i, '.webp'))
  await sharp(src)
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  await rename(src, path.join(BACKUP, 'screens', file))
  console.log(`screens/${file} -> ${path.basename(out)}`)
}

// Logo -> 256px (it is never shown larger than 128px)
const logoBuf = await readFile(LOGO)
const meta = await sharp(logoBuf).metadata()
if (meta.width > 256) {
  await writeFile(path.join(BACKUP, 'logo-original.png'), logoBuf)
  const small = await sharp(logoBuf)
    .resize(256, 256)
    .png({ compressionLevel: 9, palette: true, quality: 85 })
    .toBuffer()
  await writeFile(LOGO, small)
  console.log('logo.png resized to 256px')
}
