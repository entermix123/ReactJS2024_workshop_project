import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneGames } from "../../hooks/useGames";

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
    // Add more fields as needed for game details
};

export default function GameEdit() {
    const { gameId } = useParams();
    const [ game, setGame ] = useGetOneGames(gameId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, game), (values) => {
        console.log(values)
    });

    return (
        <section id="edit-page" className="auth">
        <form id="edit" onSubmit={submitHandler}>
            <div className="container">

                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={values.title}
                    onChange={changeHandler}
                    autoComplete="title"
                />

                <label htmlFor="category">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={values.category}
                    onChange={changeHandler}
                    autoComplete="category"
                />

                <label htmlFor="levels">MaxLevel:</label>
                <input 
                    type="number" 
                    id="maxLevel" 
                    name="maxLevel" 
                    min="1" 
                    value={values.maxLevel}
                    onChange={changeHandler}
                    autoComplete="maxLevel"
                />

                <label htmlFor="game-img">Image:</label>
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={values.imageUrl}
                    onChange={changeHandler}
                    autoComplete="imageURL"
                />

                <label htmlFor="summary">Summary:</label>
                <textarea 
                    id="summary"
                    name="summary"
                    value={values.summary}
                    onChange={changeHandler}
                    autoComplete="summary"
                ></textarea>
                <input className="btn submit" type="submit" value="Edit Game" />

            </div>
        </form>
    </section>
    );
}