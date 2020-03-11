/**
 * 扑克牌小练习，创建一个扑克牌，不包括大小王，能打印扑克牌
 * 
 */
// 一副扑克牌
//  type Deck = (NormalCard | Joker)[]
// type Deck = Card

interface Card {
    getString(): string
}

//一张牌  
interface NormalCard extends Card {
    color: Color,
    mark: Mark
}
//  joker
interface Joker extends Card {
    type: "big" | 'small'
}

// 花色
//  type Color = '♢' | '♥' | '♤' | '♣'
enum Color {
    fk = '♢',
    hongt = '♥',
    heit = '♤',
    meih = '♣'
}
enum Mark {
    A = '1',
    B = '2',
    C = '3',
    D = '4',
    E = '5',
    F = '7',
    G = '8',
    H = '9',
    I = '10',
    J = 'J',
    K = 'Q',
    S = 'K'
}

function createDeck(): Card[] {
    const deck: Card[] = [] //定义一副牌
    const marks: Mark[] = Object.values(Mark)
    const colors: Color[] = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            let card = {
                color: c,
                mark: m,
                getString(){
                    return this.mark + this.color
                }
            }
            deck.push(card)
        }
    }
    deck.push({
      type:'small',
      getString(){
        return this.type + " joker"
      }
    } as Joker)
    // 这也是一种类型断言的写法
    deck.push(<Joker>{
        type:"big",
        getString(){
          return this.type + " joker"
        }
    })
    return deck
}

function printDeck(deck: Card[]): void {
    let result = ''
    deck.forEach(d => {
        // let color:Color = d.color
        // let mark:number = d.mark
        // if(mark <= 10){
        //     str = d.mark
        // }else if(mark === 11){
        //     str += "J"
        // }else if(mark === 12){
        //     str += "Q"
        // }else if(mark === 13){
        //     str += "K"
        // }
        result += d.getString() + '\n'
    })
    console.log(result)
}

const deck = createDeck()
printDeck(deck)