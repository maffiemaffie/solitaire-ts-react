// function Card({suit: Suit, value: number}) {
//     this.suit = suit;
//     this.value = value;
//     this.facing;

//     enum Facing {
//         Up,
//         Down
//     }

    

//     return (
//         <img src={`public/img/${this.suit}-${this.value}.png`} />
//     );
// }

enum Facing {
    Up,
    Down
}

enum Suit {
    Hearts,
    Spades,
    Diamonds,
    Clubs
} 

interface CardProps {
    suit: Suit;
    value: number;
}

const Card = ({suit, value}: CardProps): JSX.Element => {
    return (
        // <img src={`public/img/${this.suit}-${this.value}.png`} />
        
    );
}