import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

    // Generate new suggestions whenever this component loads
    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length === 0 ? <p>Add some favorites to see suggestions!</p> : null}
            {recommendations.map(recipe => (
                <div key={recipe.id} style={{ backgroundColor: '#f9f9f9', padding: '10px', margin: '10px 0' }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsList;