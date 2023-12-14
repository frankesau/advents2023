function organizeGifts(gifts) {
  const boxConstraint = 10
  const palletConstraint = 5
  const giftMatch = new RegExp('[0-9]+|[a-zA-Z]', 'g')
  const splitGiftAmountType = gifts.match(giftMatch)
  const organizedGifts = {
    a: {
      bags: 0,
      boxes: 0,
      pallets: 0,
      items: 0
    }
  }
  let pallets
  let boxes
  let bags
  let giftAmount
  let giftType
  console.log(splitGiftAmountType)
  const getBoxes = (giftAmount) => {
    let group = giftAmount / boxConstraint
    let floorGroup = Math.floor(group)

    console.log(group, floorGroup)
    while (floorGroup >= boxConstraint) {
      console.log('group, floorGroup', group, floorGroup)
      group = group / boxConstraint
      floorGroup = Math.floor(floorGroup / boxConstraint)
    }

    console.log('group, floorGroup', group, floorGroup)


    return floorGroup
  }
  const getBags = () => {

  }
  const getPallets = (giftAmount) => {
    let group = giftAmount / palletConstraint
    let floorGroup = Math.floor(group)

    console.log(group, floorGroup)
    while (floorGroup >= palletConstraint) {
      console.log('group, floorGroup', group, floorGroup)
      group = group / palletConstraint
      floorGroup = Math.floor(floorGroup / palletConstraint)
    }

    console.log('group, floorGroup', group, floorGroup)


    return floorGroup
  }

  for (let index = 0; index < splitGiftAmountType.length; index++) {
    console.log(index, index % 2 === 0)
    if (index % 2 === 0) {
      giftAmount = parseInt(splitGiftAmountType[index])
      giftType = splitGiftAmountType[index + 1]
      console.log(giftType)
      if (organizedGifts[giftType]) {
        organizedGifts[giftType].boxes = boxes = getBoxes(giftAmount)
        organizedGifts[giftType].pallets = getPallets(boxes)
      } else {
        organizedGifts[giftType] = {
          boxes: 0,
          bags: 0,
          pallets: 0,
          items: giftAmount
        }
      }
      console.log('--', organizedGifts)
    }
  }

  console.log(organizedGifts)


  return ''
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)