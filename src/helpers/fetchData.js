const fetchData = async () => {
  let dataArray = []
  let catchError = false
  await fetch("https://poloniex.com/public?command=returnTicker", {
          method: 'POST'
      }).then(response => response.json())
        .then(data => {
          // console.log(data)
          dataArray = data
        })
        .catch((e) => catchError = e);
        console.log( {dataArray, catchError})
  return {dataArray, catchError};
}
export default fetchData;