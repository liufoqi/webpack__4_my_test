import index  from '../main/index.js'
import nextPage from '../nextPage/index.js'
import threePage from '../threePage/index.js'
const page = [
    index.index,
    nextPage.nextPage,
    threePage.threePage
]
const pageId=[
    index.indexId, 
    nextPage.nextPageId,
    threePage.threePageId
]
export default {
    page:page,
    pageId:pageId
}