import { queryPersonHtml, queryPhotoHtml } from "./index"

describe("Person and photo HTML.", () => {
  test("Person HTML is created correctly.", () => {
    expect(queryPersonHtml()).toEqual(`<p>John</p>
<p>title: Miami beach</p>
<p>location: Miami</p>
<p>date: Thu Jan 01 1970</p>`)
  })

  test("Photo HTML is created correctly.", () => {
    expect(queryPhotoHtml()).toEqual(`<div>
<p>title: Miami beach</p>
<p>location: Miami</p>
<p>date: Thu Jan 01 1970</p>
</div>`)
  })
})
