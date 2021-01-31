import * as constants from '../config/constants.js'

// returns { error: string | null, changed: boolean, urls: string[] }
export function handleImages(newImages, existingImages) {
  const images = []
  const imagesDiff = { added: [], removed: [] }
  const badImages = []

  // Check for images that have been removed:
  existingImages.forEach((existingImage) => {
    if (newImages.includes(existingImage)) {
      images.push(existingImage)
    } else {
      imagesDiff.removed.push(existingImage)
    }
  })
  // Check for images added:
  newImages.forEach((file) => {
    // newImage = '../../something' => /something

    // const file = path.resolve('/', newImage)
    // Validate the new image is in uploads:
    // if (!file.startsWith('/uploads/')) {
    //   badImages.push(file)
    //   return
    // }

    // TODO: validate newImage is a URL with the domain of your storage bucke
    if (!file.startsWith(constants.PUBLIC_STORAGE_HOST)) {
      badImages.push(file)
    }

    if (!existingImages.includes(file)) {
      imagesDiff.added.push(file)
      images.push(file)
    }
  })
  console.log({ previous: existingImages, ...imagesDiff, badImages, images })

  if (badImages.length > 0) {
    return {
      error: `request contained image that wasn't in uploads: ${badImages.join(
        ', '
      )}`,
      changed: false,
      urls: existingImages,
    }
  }

  if (imagesDiff.added.length > 0) {
    // FIXME: check added images exist in uploads directory with fs.exists
    // if image doesn't exist return res.status(400);
  }

  // TODO: clean up files
  //if (imagesDiff.removed.length > 0) {
  //   try {
  //     await Promise.all(
  //       imagesDiff.removed.map((file) => {
  //         if (file.startsWith('/uploads/')) {
  //           return fs.rm(path.join(process.cwd(), file))
  //         } else {
  //           return Promise.resolve()
  //         }
  //       })
  //     )
  //   } catch (err) {
  //     console.error(err)
  //     res.status(400).send({
  //       error: 'unable to delete removed images',
  //     })
  //   }
  // }

  return {
    error: null,
    changed: imagesDiff.added.length > 0 || imagesDiff.removed.length > 0,
    urls: Array.from(new Set(images)),
  }
}
