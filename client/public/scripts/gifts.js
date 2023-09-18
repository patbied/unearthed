const mainContent = document.getElementById('main-content')
const noGifts = document.createElement('h2')

noGifts.textContent = 'No gifts.'
const renderGifts = async() => {
    const res = await fetch('/gifts')
    const data = await res.json()
    if (data){
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            topContainer.style.backgroundImage = `url(${gift.image})`
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)  
            mainContent.appendChild(card)     
        })
    } else{
        mainContent.appendChild(noGifts)
    }
    
}

renderGifts()