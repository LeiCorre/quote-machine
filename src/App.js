import './App.css';
import QuoteB from "./quotebegin.jpg";
import QuoteE from "./quoteend.jpg";
import { ReactComponent as Icon } from "./twitter.svg";

const expression = (min, max) => {
  return Math.round(Math.random()*(max - min) + min)
};





const quotesArray = [
  ["If you could only sense how important you are to the lives of those you meet and how important you can be to the people you may never even dream of. There is something of yourself that you leave at every meeting with another person.", "― Mister Rogers"], 
  
  ["When I was ten, I read fairy tales in secret and would have been ashamed if I had been found doing so. Now that I am fifty, I read them openly. When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.", "― C.S. Lewis"], 
  
  ["Deep within us—no matter who we are—there lives a feeling of wanting to be lovable, of wanting to be the kind of person that others like to be with. And the greatest thing we can do is to let people know that they are loved and capable of loving.", "― Mister Rogers"],
  
  ["When we love a person, we accept him or her exactly as is: the lovely with the unlovely, the strong along with the fearful, the true mixed in with the façade, and of course, the only way we can do it is by accepting ourselves that way.", "― Mister Rogers"],
  
  ["When I was a boy I used to think that strong meant having big muscles, great physical power: but the longer I live, the more I realize that real strength has much more to do with what is not seen.  Real strength has to do with helping others", "― Mister Rogers"],
  
  ["Love is not affectionate feeling, but a steady wish for the loved person’s ultimate good as far as it can be obtained.", "― C.S. Lewis"],
  
  ["Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.", "― C.S. Lewis"],
  
  ["God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.", "― C.S. Lewis"],
  
  ["I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin, but you begin anyway and see it through no matter what.", "― Atticus Finch - Harper Lee"],
  
  ["For what it’s worth: it’s never too late or, in my case, too early to be whoever you want to be. There’s no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you’re proud of. If you find that you’re not, I hope you have the courage to start all over again.", "― Eric Roth"],
  
  ["As different as we are from one another, as unique as each one of us is, we are much more the same than we are different. That may be the most essential message of all, as we help our children grow toward being caring, compassionate, and charitable adults.", "― Mister Rogers"],
  
  ["Most of us, I believe, admire strength. It's something we tend to respect in others, desire for ourselves, and wish for our children. Sometimes, though, I wonder if we confuse strength with other words—like 'aggression' and even 'violence'. Real strength is neither male nor female; but it is, quite simply, one of the finest characteristics that a human being can possess.", "― Fred Rogers"],
  
  ["The look the Shepherd turned on her was very beautiful. “Nothing my Father and I have made is ever wasted,” he said quietly, “and the little wild flowers have a wonderful lesson to teach. They offer themselves so sweetly and confidently and willingly, even if it seems that there is no one to appreciate them. Just as though they sang a joyous little song to themselves, that it is so happy to love, even though one is not loved in return.", "― Hannah Hurnard"],
  
  ["The awful glimpse down into the abyss of an existence without him had so staggered and appalled her heart that she felt she could never be quite the same again. However, it had opened her eyes to the fact that right down in the depths of her own heart she really had but one passionate desire, not for the things which the Shepherd had promised, but for himself. All she wanted was to be allowed to follow him forever.", "― Hannah Hurnard"],
  
  ["God has called us into a place of tenderness, when nobody is looking, when there are no great decisions to make, when it’s just him and me in a hotel room, with no one to pray for, no one to preach to. When it is just two people in a room, that’s where you learn. That’s where you learn his heartbeat. That’s where you learn the presence. That’s where you learn the voice. It’s in the moments when nobody is watching, nobody is evaluating how good you’re doing. When it is just you and him.", "― Bill Johnson"],
  
  ["As long as you are proud you cannot know God. A proud man is always looking down on thing and people: and, of course, as long as you are looking down you cannot see something that is above you.", "― C.S. Lewis"],
  
  ["I have been driven many times upon my knees by the overwhelming conviction that I had no where else to go. My own wisdom and that of all about me seemed insufficient for that day.", "― Abraham Lincoln "],
  
  ["I believe that the first test of a great man is his humility. I don't mean by humility, doubt of his power. But really great men have a curious feeling that the greatness is not of them, but through them. And they see something divine in every other man and are endlessly, foolishly, incredibly merciful.", "― John Ruskin "],
  
  ["Do things for people not because of who they are or what they do in return, but because of who you are.", "― Harold S. Kushner"],
  
  ["Love and kindness are never wasted. They always make a difference. They bless the one who receives them, and they bless you, the giver.", "― Barbara De Angelis "]
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const generate = expression(0, 19)
    this.setState({
      index: generate
    })
  }

  render() {
    
  const tweetQuote = ("http://twitter.com/intent/tweet?text=" + quotesArray[this.state.index][0] + quotesArray[this.state.index][1]).replace(/\s/g, "%20");
  
    
    return (
      
      <div style={{height: "100%"}}>
        <div className="foot" style={{background: "white"}}>Designed by LeiCorre for FCC &hearts; &emsp; | &emsp; Source Code for Project .js | .css | .html</div>
        <div className="container-fluid backg" style={{height: "100%", textAlign: "center"}}> 
        <h1 className="headText">Inspired Quotes
        </h1><br/>
        <br /><br />
        <div className="row">

        
        <div className="col-lg-2 col-md-2 col-sm-1 col-xl-3"></div>
        <div className="col-lg-8 col-md-8 col-sm-10 col-xl-6">
          
          <div id="quote-box">

            

              <div className="box" style={{height: "300px"}}>
              <a id="tweet-quote" href={tweetQuote}> 

            <Icon height="50px" width="50px" style={{ borderRadius: "10%", marginLeft: "auto", marginRight: 0}} />
            </a>  
              <div className ="box" id="text" style={{padding: "2% 5%", backgroundColor: "white"}}>
                
                <sup><img id="quoteB" src={QuoteB} alt="" /></sup>
                <br />
                
                {quotesArray[this.state.index][0]}<br/>
                <img  id="quoteE" src={QuoteE} alt="" /> <br />
              </div>
           
           
            </div>
             <div id="author" className="author" style={{verticalAlign: "middle"}}>{quotesArray[this.state.index][1]}
            </div> 
            <br />
          <button  className="btn btn-dark" id="new-quote" onClick={this.handleClick}>New Quote</button>
        </div> 
        </div>
        <div className="col-lg-2 col-md-2 col-sm-1 col-xl-3"></div>
        </div>
        </div>
      </div>
      
  )
}

};



ReactDOM.render(<QuoteMachine />, document.getElementById("root"))




export default QuoteMachine;