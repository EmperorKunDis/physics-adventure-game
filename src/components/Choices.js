import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

const Choices = ({ scene }) => {
    const { gameState, actions } = useGame();
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    if (!scene || !scene.choices) {
        return null;
    }

    const handleChoice = async (choice) => {
        if (isProcessing) return;
        
        setSelectedChoice(choice.id);
        setIsProcessing(true);

        // Simulate thinking time for immersion
        await new Promise(resolve => setTimeout(resolve, 500));

        // Execute choice actions
        if (choice.actions) {
            choice.actions.forEach(action => {
                switch (action.type) {
                    case 'setScene':
                        actions.setScene(action.value);
                        break;
                    case 'addToInventory':
                        actions.addToInventory(action.value);
                        break;
                    case 'addPhysicsFragment':
                        actions.addPhysicsFragment();
                        break;
                    case 'increaseUnderstanding':
                        actions.increaseUnderstanding();
                        break;
                    case 'addEnergeticCore':
                        actions.addEnergeticCore();
                        break;
                    case 'setStoryFlag':
                        actions.setStoryFlag(action.flag, action.value);
                        break;
                    default:
                        break;
                }
            });
        }

        // Navigate to next scene
        if (choice.nextScene) {
            actions.setScene(choice.nextScene);
        }

        setIsProcessing(false);
        setSelectedChoice(null);
    };

    const isChoiceAvailable = (choice) => {
        if (!choice.conditions) return true;

        return choice.conditions.every(condition => {
            switch (condition.type) {
                case 'hasItem':
                    return gameState.inventory[condition.item];
                case 'hasFlag':
                    return gameState.storyFlags[condition.flag] === condition.value;
                case 'minUnderstanding':
                    return gameState.physicsUnderstandingLevel >= condition.level;
                case 'minFragments':
                    return gameState.physicsFragments >= condition.count;
                case 'minCores':
                    return gameState.energetickeJadra >= condition.count;
                case 'maxCores':
                    return gameState.energetickeJadra <= condition.count;
                default:
                    return true;
            }
        });
    };

    const availableChoices = scene.choices.filter(isChoiceAvailable);

    if (availableChoices.length === 0) {
        return (
            <div className={`physics-card text-center ${
                gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
            }`}>
                <p className="physics-text-light italic">
                    Žádné dostupné akce. Možná potřebujete získat více zkušeností nebo předmětů.
                </p>
            </div>
        );
    }

    return (
        <div className={`physics-card ${
            gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
        }`}>
            <h3 className="font-semibold text-lg mb-4 text-physics-blue">
                🤔 Co uděláte?
            </h3>
            
            <div className="space-y-3">
                {availableChoices.map((choice, index) => (
                    <button
                        key={choice.id || index}
                        onClick={() => handleChoice(choice)}
                        disabled={isProcessing}
                        className={`
                            w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                            ${selectedChoice === choice.id 
                                ? 'border-physics-blue bg-blue-50 scale-[0.98]' 
                                : gameState.darkMode
                                    ? 'border-gray-600 hover:border-gray-500 bg-gray-700 hover:bg-gray-600'
                                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                            }
                            ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md cursor-pointer'}
                            focus:outline-none focus:ring-2 focus:ring-physics-blue focus:ring-opacity-50
                        `}
                    >
                        <div className="flex items-start gap-3">
                            <span className={`
                                flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold
                                ${selectedChoice === choice.id 
                                    ? 'bg-physics-blue text-white' 
                                    : gameState.darkMode 
                                        ? 'bg-gray-600 text-gray-300'
                                        : 'bg-gray-200 text-gray-600'
                                }
                            `}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <div className="flex-1">
                                <p className={`font-medium mb-1 ${
                                    gameState.darkMode ? 'text-gray-200' : 'text-gray-800'
                                }`}>
                                    {choice.text}
                                </p>
                                {choice.description && (
                                    <p className={`text-sm ${
                                        gameState.darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {choice.description}
                                    </p>
                                )}
                                {choice.requiredItems && (
                                    <div className={`text-xs mt-2 ${
                                        gameState.darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        🔧 Potřebuje: {choice.requiredItems.join(', ')}
                                    </div>
                                )}
                            </div>
                            {isProcessing && selectedChoice === choice.id && (
                                <div className="flex-shrink-0">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-physics-blue"></div>
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {scene.hint && (
                <div className={`mt-4 p-3 rounded-lg border-l-4 border-physics-orange ${
                    gameState.darkMode 
                        ? 'bg-gray-700/50' 
                        : 'bg-orange-50'
                }`}>
                    <p className={`text-sm ${
                        gameState.darkMode ? 'text-gray-300' : 'text-orange-800'
                    }`}>
                        💡 <strong>Nápověda:</strong> {scene.hint}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Choices;