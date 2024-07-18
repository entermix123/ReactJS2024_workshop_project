import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/comments-api";

export default function GameDetails() {

    const [ game, setGame ] = useState({});           // set state for current game
    const [ username, setUsername ] = useState('');     // set state for username
    const [ comment, setComment ] = useState('');       // set state for comment
    const { gameId } = useParams();                   // useParams take specific property of the game

    useEffect(() => {                               // set useEffect to change current game content
        (async () => {                              // set async function to make GET request for specific game
            const result = await gamesAPI.getOne(gameId); // call getOne function from games-api.js
            setGame(result);                        // set game state as result game details
        })();
    }, []);

    const commentSubmitHanlder = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(gameId, username, comment);  // create comment with props

        // TODO: this should be refactured
        // update comments for specific game - reload comments
        setGame(prevState => ({     // make new reference for availble games 
            ...prevState,
            comments: {                 // make new reference for comments in every game
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }));

        setUsername('');
        setComment('');
    }

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">{game.summary}</p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* if length of the keys of comments are > 0, map comments, else show no comments */}
                    {Object.keys(game.comments || {}).length > 0             
                        ? Object.values(game.comments).map(comment => (     
                            <li key={comment._id} className="comment">
                                <p>{comment.username}: {comment.text}</p>
                            </li>
                        ))
                        : <p className="no-comment">No comments.</p>
                    }
                </ul>
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={commentSubmitHanlder}>
                {/* add additional input for comment without user auth and user functionality */}
                <input 
                    type="text" 
                    placeholder="Pesho" 
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <textarea 
                    name="comment" 
                    placeholder="Comment......"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <input 
                    className="btn submit" 
                    type="submit" 
                    value="Add Comment" 
                />
            </form>
        </article>

    </section>
    );
}