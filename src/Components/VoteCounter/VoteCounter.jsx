import { useState } from "react";


const VoteCounter = () => {
    const [votes, setVotes] = useState();

    const handleUpvote = () => {
        setVotes(votes + 1);
    }

        const handleDownvote = () => {
            setVotes(votes === 0 ? -1 : votes -1);
        }
    
    return (
        <div className="space-x-5">  
            <button className="btn bg-green-600 text-white" onClick={handleUpvote}>Upvote</button>
            <button className="btn bg-red-600 text-white" onClick={handleDownvote}>Downvote</button>
        </div>
    );
};

export default VoteCounter;