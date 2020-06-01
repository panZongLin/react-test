import htmlToDraft from 'html-to-draftjs'
import { convertToRaw, EditorState, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'


const draftjsToHtml = function (editorState) {
  let returnHtml = '<p></p>'
  try {
    returnHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  } catch (err) {
    console.error('解析state为html错误', err)
  }
  return returnHtml
}


const htmlToDraftState = function (html) {
  if (!html) return undefined
  if (!(/<[^>]+>/g.test(html))) {
    html = `<p>${html}</p>`
  }
  try {
    const blocksFromHtml = htmlToDraft(html)
    const contentState = ContentState.createFromBlockArray(blocksFromHtml)
    const editorState = EditorState.createWithContent(contentState)
    // console.log(editorState)
    return editorState
  } catch (err) {
    return undefined
  }
}

module.exports = {
  draftjsToHtml,
  htmlToDraftState,
}
