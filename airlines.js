document.addEventListener('DOMContentLoaded',  ()=> {
    let jumpInButtonElement = document.getElementById('button-jump-in');
    let groupRatesButtonElement = document.getElementById('button-group-rates');
    let letsGoButtonElement = document.getElementById('button-lets-go');
    let learnMoreButtonElement = document.getElementById('button-learn-more');
    let aboutUsParagraph = document.getElementById('about-us-text')

    jumpInButtonElement.addEventListener("click",(event)=>{
        alert("Splash! We're all in!!")
    })

    learnMoreButtonElement.addEventListener("click", (event)=>{
        learnMoreButtonElement.hidden = true
        aboutUsParagraph.hidden = false

        let interestingFact = document.createElement('p')
        interestingFact.textContent = "The humble bumblebee influenced the design of a now obsolete USAF aircraft"
        interestingFact.className = 'card-text-footer'
        document.getElementById('footer-title').append(interestingFact)
    })

    groupRatesButtonElement.addEventListener('click',()=>{
        let div = document.createElement('div')
        div.className = "information-cards"
        div.id = "group-packages"
        document.getElementById('hidded-section').prepend(div)
        let groupP1 = document.createElement('li')
        groupP1.textContent = "Group Package 1"
        let groupP2 = document.createElement('li')
        groupP2.textContent = "Group Package 2"
        let groupP3 = document.createElement('li')
        groupP3.textContent = "Group Package 2"
        document.getElementById('group-packages').append(groupP1)
        document.getElementById('group-packages').append(groupP2)
        document.getElementById('group-packages').append(groupP3)

    })

    letsGoButtonElement.addEventListener("click", ()=>{
        let form = document.createElement('form')
        let firstNameElement = document.createElement('label')
        let lastNameElement = document.createElement('label')
        let cityDropDown = document.createElement('optgroup')
    })

})
