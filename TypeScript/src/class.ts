/**
 * 扑克牌小练习，创建一个扑克牌，不包括大小王，能打印扑克牌
 * 
 */



    
    

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
    L = '6',
    F = '7',
    G = '8',
    H = '9',
    I = '10',
    J = 'J',
    K = 'Q',
    S = 'K'
}

interface PublishResult {
    player1: Deck
    player2: Deck
    player3: Deck
    left: Deck
}

class Deck {
    private cards: Card[] = []
    constructor(cards?: Card[]){
        if(cards){
            this.cards = cards
        }else{
            this.init()
        }
    }

    private init(){
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
                this.cards.push(card)
                }
            }
            this.cards.push({
              type:'small',
              getString(){
                return this.type + " joker"
              }
            } as Joker)
            // 这也是一种类型断言的写法
            this.cards.push(<Joker>{
                type:"big",
                getString(){
                  return this.type + " joker"
                }
            })
    }
    public printDeck(): void {
        let result = ''
        this.cards.forEach((d, i) => {
            if(i % 6 === 0){
                result += '\n'
            }
            result += d.getString() + '\t'
        })
        console.log(result)
    }

    // 洗牌
    shuffle(){
      for (let i = 0; i < this.cards.length; i++) {
          const targetIndex = this.getRandom(0, this.cards.length)
          const temp = this.cards[i]
          this.cards[i] = this.cards[targetIndex]
          this.cards[targetIndex] = temp
      }
    }

    private getRandom(min:number, max:number){
       const dec = max - min;
       return Math.floor(Math.random() * dec + min)
    }

    // 发完牌后，得到结果有四个card[]数组，其实就是元祖
    // 也可以再用个对象
    publish():PublishResult{
       let player1:Deck, player2:Deck, player3:Deck, left:Deck;
       player1 = this.takeCards(17);
       player2 = this.takeCards(17);
       player3 = this.takeCards(17);
       left = new Deck(this.cards)
       return {player1, player2, player3, left};
    }

    private takeCards(n:number):Deck{
      const result:Card[] = [];
      for (let i = 0; i < n; i++) {
        result.push(this.cards.shift() as Card)
      }
      return new Deck(result);
    }
}

let deck:Deck = new Deck()
deck.shuffle()
console.log('洗牌之后============')
deck.printDeck()
const res:PublishResult = deck.publish()
console.log('发牌之后============')
console.log('发牌之后的玩家1============')
res.player1.printDeck()
console.log('发牌之后的玩家2============')
res.player2.printDeck()
console.log('发牌之后的玩家3============')
res.player3.printDeck()
console.log('发牌之后的玩家left============')
res.left.printDeck()

// T表示泛型，依附于这个函数，泛型就相当于类型变量
function take<T>(arr:T[], n:number): T[]{
    if(n >= arr.length){
        return arr
    }
    const res: T[] = []
    for (let i = 0; i < n; i++) {
        const element = arr[i];
        res.push(element)
    }
    return res
}

// 调用函数的时候才知道什么类型
// 这样就能把丢失的信息找回来了
take([1, '2', 3], 2)




// "strictPropertyInitialization": true  //更加严格的属性检查，检查属性初始化
// class name {
//     //属性列表
//     readonly id:number; //只读, 相当于const
//     //直接初始化了这个字段，也可以在构造函数中初始化
//     gender:'男' | '女' = '男'
//     public pid?: string
//     private _publishNumber:number = 3 //每天一共可以发多少篇文章
//     private _curNumber:number = 0     //当前可以发布的文章数量
//     // 可以在形参中加修饰符达到初始化的效果。简化繁琐代码
//     constructor(public name:string, private _age:number) {
//         this.id = Math.random()
//     }
//     public publish(title:string){
//        if(this._publishNumber > this._curNumber){
//          console.log('发布了一篇文章', title)
//          this._curNumber++
//        }else{
//          console.log('不能发布文章了')
//        }
//     }
//     // 利用private控制，getAge() 是java的做法
//     // C# 是这样做的 get age，用的时候就像普通对象的获取
//     // ES6 的时候，也是这样玩的，其实这样也相当于是readonly
//     // 规范，写私有属性的时候尽量前面加下划线
//     get age(){
//         return this._age
//     }
//     set age(age: number){
//         this._age = age
//     }
// }
// const user = new name('hrt', 18)
// user.publish('文章1')
// user.publish('文章2')
// user.publish('文章3')
// user.age = 10






