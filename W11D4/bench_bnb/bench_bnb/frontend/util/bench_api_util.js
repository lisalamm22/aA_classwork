export const fetchBenches = () => {
    return $.ajax({
        method: 'get' ,
            url: '/api/benches',
        error: (err) => console.log(err)
    })
}