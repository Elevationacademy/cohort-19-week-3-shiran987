const StringFormatter = function () {
    const capitalizeFirst=  function (word) { 
        console.log( word[0].toUpperCase()+word.slice(1).toLowerCase())
    }

    const skewerCase=  function (word){
        console.log(word.split(" ").join("-").toLowerCase() )
    }
    
    return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase
    }
}
const formatter = StringFormatter()
formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box
