type Photo = {
  date: Date
  location: string
  title: string
}

type Person = {
  name: string
  photo: Photo
}

const composePersonHtml = ({ aPerson }: { aPerson: Person }) => {
  let result = ""
  result += `<p>${aPerson.name}</p>\n`
  result += composePhotoHtml({ aPhoto: aPerson.photo })
  return result
}
const composeOldPhotosHtml = ({ photos }: { photos: Photo[] }) => {
  let result = ""

  photos
    .filter((aPhoto) => aPhoto.date < new Date())
    .forEach((aPhoto) => {
      result += "<div>\n"
      result += composePhotoHtml({ aPhoto })
      result += "</div>\n"
    })

  return result
}

const composePhotoHtml = ({ aPhoto }: { aPhoto: Photo }) => {
  let result = ""
  result += `<p>title: ${aPhoto.title}</p>\n`
  result += `<p>date: ${aPhoto.date.toDateString()}</p>\n`
  result += `<p>location: ${aPhoto.location}</p>\n`
  return result
}

const aPhoto: Photo = {
  date: new Date(12124214123),
  location: "New York",
  title: "Trip",
}

const aPersonHtml = composePersonHtml({
  aPerson: { name: "John", photo: aPhoto },
})

const oldPhotosHtml = composeOldPhotosHtml({ photos: [aPhoto, aPhoto, aPhoto] })

export const getPersonHtml = () => {
  return aPersonHtml
}

export const getOldPhotosHtml = () => {
  return oldPhotosHtml
}
