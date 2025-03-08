const val = [10, 20, 30, 40, 50]

const total = val.reduce((acc, item) => {
    return acc + item
}, 0)

console.log(total);
