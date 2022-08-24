export const truncate = (str, max) => {
  const string = str.toString().replace(/  +/g, ' ')
  const arr = string.toString().split(' ')
  if (arr?.length > max) {
    return arr.slice(0, max).join(' ') + '...'
  } else {
    return string
  }
}
export const truncateChar = (str, max) => {
  const strLen = str?.toString()?.length
  return strLen > max ? str?.slice(0, max) + '...' : str
}
export const scoreToRating = (val) => {
  const score = parseInt(val || 0)
  const step10 = Math.round(score / 10) * 10
  const res = Array(Math.ceil(step10 / 20))
    ?.fill(step10 / 20)
    ?.map((m, index) => {
      const check = m - Math.floor(m) !== 0 && index + 1 === Math.ceil(step10 / 20) ? '½' : '★'
      return check
    })
  return res?.join('')
}
export const convertToTweet = (movies, reviews) => {
  const tweet = reviews?.map(({ title, score, review }) => {
    const hasMovie = movies?.find(({ title: moviesTitle }) =>
      title?.match(new RegExp(moviesTitle, 'gi'))
    )
    const { year } = hasMovie || {}
    return `${truncateChar(title, 25)}${year && ` (${year})`}: ${truncateChar(
      review,
      50
    )} ${scoreToRating(score)}`
  })
  return tweet
}
