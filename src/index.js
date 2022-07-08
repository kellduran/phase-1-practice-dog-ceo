console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogContainer = document.getElementById("dog-image-container")
// console.log(dogContainer)

fetch(imgUrl)
.then(resp => resp.json())
.then(dogObj => {
    dogObj.message.forEach(dogObj => {
    const dogImageElement = document.createElement ('img')
    dogImageElement.src= dogObj
    document.getElementById("dog-image-container").append( dogImageElement )
    
    })
})

fetch(breedUrl).then(resp => resp.json())
.then(dogListObj => {   
    const namesArray = Object.keys(dogListObj.message) 
    console.log(namesArray) 
    namesArray.forEach(dogListObj => {
        // console.log(dogListObj) 
        renderNamesArray(dogListObj)
    }) 
}) 

function renderNamesArray (dogListObj){
    const newDogListElement = document.createElement ('li')
    newDogListElement.addEventListener('click',(e)=>{
        e.target.style.color= 'purple'
    })
    newDogListElement.textContent= dogListObj 
    document.getElementById("dog-breeds").append(newDogListElement)
}


