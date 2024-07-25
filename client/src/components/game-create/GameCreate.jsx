import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";
import { useNavigate } from "react-router-dom";

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
    // Add more fields as needed for game details
};

export default function GameCreate() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async (values) => {
        try {
            const { _id: gameId} = await createGame(values);
            navigate(`/games/${gameId}/details`);
        } catch (err) {
            // set error state and display error message like in register component
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={submitHandler}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={values.title} 
                    onChange={changeHandler}
                    placeholder="Enter game title..." 
                />

                <label htmlFor="category">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={values.category} 
                    onChange={changeHandler}
                    placeholder="Enter game category..." 
                />

                <label htmlFor="levels">MaxLevel:</label>
                <input 
                    type="number" 
                    id="maxLevel" 
                    name="maxLevel" 
                    values={values.maxLevel} 
                    onChange={changeHandler}
                    min="1" 
                    placeholder="1" 
                />

                <label htmlFor="game-img">Image:</label>
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={values.imageUrl} 
                    onChange={changeHandler}
                    placeholder="Upload a photo..." 
                />

                <label htmlFor="summary">Summary:</label>
                <textarea 
                    name="summary" 
                    id="summary"
                    value={values.summary} 
                    onChange={changeHandler}
                    placeholder="Enter game summary..." 
                    >
                </textarea>
                <input className="btn submit" type="submit" value="Create Game" />
            </div>
        </form>
    </section>
    );
}