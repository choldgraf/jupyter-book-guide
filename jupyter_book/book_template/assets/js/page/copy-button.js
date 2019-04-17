/**
 * Set up copy/paste for code blocks
 */
const codeCellId = index => `codecell${index}`

const clipboardButton = id =>
  `<a id="copy-button-${id}" class="btn copybtn o-tooltip--left" data-tooltip="Copy" data-clipboard-target="#${id}">
    <img src="{{ site.images_url | relative_url }}/copy-button.svg" alt="Copy to clipboard">
  </a>`

// Clears selected text since ClipboardJS will select the text when copying
const clearSelection = () => {
  if (window.getSelection) {
    window.getSelection().removeAllRanges()
  } else if (document.selection) {
    document.selection.empty()
  }
}

// Changes tooltip text for two seconds, then changes it back
const temporarilyChangeTooltip = (el, newText) => {
  const oldText = el.getAttribute('data-tooltip')
  el.setAttribute('data-tooltip', newText)
  setTimeout(() => el.setAttribute('data-tooltip', oldText), 2000)
}

const addCopyButtonToCodeCells = () => {
  // If ClipboardJS hasn't loaded, wait a bit and try again. This
  // happens because we load ClipboardJS asynchronously.
  if (window.ClipboardJS === undefined) {
    setTimeout(addCopyButtonToCodeCells, 250)
    return
  }

<<<<<<< HEAD:jupyter_book/book_template/assets/js/page/copy-button.js
  const codeCells = document.querySelectorAll('div.input_area div.highlight > pre')
=======
  const codeCells = document.querySelectorAll('div.c-textbook__content > div.highlighter-rouge > div.highlight > pre, div.input_area pre')
>>>>>>> master:jupyter_book/book_template/_includes/js/copy-button.html
  codeCells.forEach((codeCell, index) => {
    const id = codeCellId(index)
    codeCell.setAttribute('id', id)
    if (document.getElementById("copy-button" + id) == null) {
      codeCell.insertAdjacentHTML('afterend', clipboardButton(id));
    }
  })

  const clipboard = new ClipboardJS('.copybtn')
  clipboard.on('success', event => {
    clearSelection()
    temporarilyChangeTooltip(event.trigger, 'Copied!')
  })

  clipboard.on('error', event => {
    temporarilyChangeTooltip(event.trigger, 'Failed to copy')
  })

  // Get rid of clipboard before the next page visit to avoid memory leak
  document.addEventListener('turbolinks:before-visit', () =>
    clipboard.destroy()
  )
}

<<<<<<< HEAD:jupyter_book/book_template/assets/js/page/copy-button.js
initFunction(addCopyButtonToCodeCells);
=======
initFunction(addCopyButtonToCodeCells);
</script>
>>>>>>> master:jupyter_book/book_template/_includes/js/copy-button.html
