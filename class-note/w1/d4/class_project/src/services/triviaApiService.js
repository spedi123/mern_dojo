import axios from 'axios'

const http = axios.create ( {
    baseURL: 'https://opentdb.com/api.php'
})
export const getTriviaQuestions = (queryParams) => {
    const {amount, category, difficulty, type} = queryParams;
    return  http
        .get(
            `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
        )
        .then((res) => {
            return res.data;
        })

    // axos build the query string for us from a query params objects.
//     return http.get('', { params: queryParams})
//     .then((res) => {
//         return res.data;
//     })
}