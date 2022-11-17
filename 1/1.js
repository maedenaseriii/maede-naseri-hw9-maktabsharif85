function symmetric() {
const array=[...arguments]
    array.shift()
    const n=arguments[0]
    if (array.length!==n) return "wrong number"
    for (let i=0;i<n.length;i++){
        if (array.at(i)!==array.at(n-1-i))
            return  false
    }
    return true
}
console.log(symmetric(2,1,1))