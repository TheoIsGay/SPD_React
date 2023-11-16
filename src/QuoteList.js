import Quote from "./Quote.js";
import { useEffect, useState } from "react";
function QuoteList(){

    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getQuotes(){
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            console.log(data);
            setQuotes(data.quotes);
            setLoading(false);
        }
    
        getQuotes();
    }, []);

    const quotesJSX = quotes.map((quote,index)=>{
        return (
            <>
                <Quote key={index} name={quote.author} quote={quote.quote}></Quote>
            </>
        )
    })
    return(
        <>
            <h1>Quotes</h1>
            {loading ? "Loading..." : quotesJSX }
        </>
    )
}
export default QuoteList;