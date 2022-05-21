type Photo = {
  date: Date
  location: string
  title: string
}

type Person = {
  name: string
  photo: Photo
}

const getPersonHtml = ({ aPerson }: { aPerson: Person }) => {
  const result = []
  result.push(`<p>${aPerson.name}</p>`)
  result.push(`<p>title: ${aPerson.photo.title}</p>`)
  result.push(emitPhotoData({ aPhoto: aPerson.photo }))
  return result.join("\n")
}

const getPhotoHtml = ({ aPhoto }: { aPhoto: Photo }) => {
  return ["<div>", `<p>title: ${aPhoto.title}</p>`, emitPhotoData({ aPhoto }), "</div>"].join("\n")
}

const emitPhotoData = ({ aPhoto }: { aPhoto: Photo }) => {
  const result = []
  result.push(`<p>location: ${aPhoto.location}</p>`)
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`)
  return result.join("\n")
}

const aPhoto = { date: new Date(10000000), location: "Miami", title: "Miami beach" }

const aPersonHtml = getPersonHtml({
  aPerson: { name: "John", photo: aPhoto },
})

const aPhotoHtml = getPhotoHtml({ aPhoto })

export const queryPersonHtml = () => {
  return aPersonHtml
}

export const queryPhotoHtml = () => {
  return aPhotoHtml
}
