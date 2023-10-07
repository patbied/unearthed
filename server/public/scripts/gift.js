const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')
    let gift = data.find(gift => gift.id === requestedID)
    const testEle = document.createElement('h1')
    testEle.textContent = 'test'
    
    if (gift) {
        console.log(gift)
        document.body.appendChild(testEle)
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedby
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricepoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    }
    else {
          
    }
}

renderGift()