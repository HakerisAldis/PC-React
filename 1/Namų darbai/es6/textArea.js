const textArea = document.getElementById('textArea')
const minRows = 2
const maxRows = 4
const areaHeight = 8
const lineHeight = 14

// textArea.setAttribute('rows', minRows)
textArea.style.height = ((minRows * lineHeight) + areaHeight - 4) + 'px'
textArea.addEventListener('input', OnInput, false)

function OnInput () {
    if (this.scrollHeight <= (maxRows * lineHeight) + areaHeight) {
        this.style.height = 'auto'
        this.style.height = (this.scrollHeight) + 'px'
        this.style.overflow = 'hidden'
        this.style.width = '200px'
    } else {
        this.style.overflowY = 'scroll'
        this.style.width = '215px'
    }
}
