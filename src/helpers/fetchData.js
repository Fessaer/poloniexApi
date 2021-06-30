const fetchData = async () => {
  let dataArray = {}
  let catchError = false

    await fetch("https://poloniex.com/public?command=returnTicker", {
          method: 'POST'
      }).then(response => {
        return response.json()
      })
        .then(data => Object.entries(data))
        .then(arrData => {
          dataArray = {dataResponse: arrData, catchError: undefined, loading: false}
        })
        .catch((e) => {
          dataArray = {catchError: e, loading: false, loading: false}
        })
    return dataArray;
}

export default fetchData;
//тут написана переиспользуемая функция, осталось подлкючить
