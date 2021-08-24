export const handleBookmark = (id, value) => {
    let bookmarked = localStorage.getItem('bookmarked')
    if (bookmarked) {
        bookmarked = JSON.parse(bookmarked)
    } else {
        bookmarked = {}
    }

    if (bookmarked[id]) {
        delete bookmarked[id]
    } else {
        bookmarked[id] = value
    }
    bookmarked = JSON.stringify(bookmarked)
    localStorage.setItem('bookmarked', bookmarked)
    window.location.reload()
}