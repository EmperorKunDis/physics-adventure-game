import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialGameState = {
    currentSceneId: "UVOD_PORTAL_AKTIVACE",
    inventory: {
        MAZ: true,
        mericiPasmo: false,
        vaha: false,
        teplomer: false,
        kamenPratelstvi: false,
        pamatniKamen: false
    },
    physicsFragments: 0,
    physicsUnderstandingLevel: 0,
    energetickeJadra: 0,
    storyFlags: {
        kwarkDialogueSeen: false,
        zone1AnomalySolved: false,
        portalActivated: true,
        firstTimeInARFZ: true
    },
    sceneHistory: [],
    playerName: "",
    darkMode: false
};

const GameContext = createContext();

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SCENE':
            return {
                ...state,
                currentSceneId: action.payload,
                sceneHistory: [...state.sceneHistory, state.currentSceneId]
            };
        
        case 'ADD_TO_INVENTORY':
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    [action.payload]: true
                }
            };
        
        case 'ADD_PHYSICS_FRAGMENT':
            return {
                ...state,
                physicsFragments: state.physicsFragments + 1
            };
        
        case 'INCREASE_UNDERSTANDING':
            return {
                ...state,
                physicsUnderstandingLevel: state.physicsUnderstandingLevel + 1
            };
        
        case 'ADD_ENERGETIC_CORE':
            return {
                ...state,
                energetickeJadra: state.energetickeJadra + 1
            };
        
        case 'SET_STORY_FLAG':
            return {
                ...state,
                storyFlags: {
                    ...state.storyFlags,
                    [action.payload.flag]: action.payload.value
                }
            };
        
        case 'SET_PLAYER_NAME':
            return {
                ...state,
                playerName: action.payload
            };
        
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        
        case 'LOAD_GAME':
            return {
                ...action.payload
            };
        
        case 'RESET_GAME':
            return {
                ...initialGameState,
                playerName: state.playerName
            };
        
        default:
            return state;
    }
};

export const GameProvider = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

    // Auto-save functionality
    useEffect(() => {
        const saveData = {
            ...gameState,
            savedAt: new Date().toISOString()
        };
        localStorage.setItem('physicsAdventureSave', JSON.stringify(saveData));
    }, [gameState]);

    // Load saved game on mount
    useEffect(() => {
        const savedGame = localStorage.getItem('physicsAdventureSave');
        if (savedGame) {
            try {
                const parsedSave = JSON.parse(savedGame);
                // Only load if it's a valid save (has required fields)
                if (parsedSave.currentSceneId && parsedSave.inventory) {
                    dispatch({ type: 'LOAD_GAME', payload: parsedSave });
                }
            } catch (error) {
                console.error('Chyba při načítání uložené hry:', error);
            }
        }
    }, []);

    const value = {
        gameState,
        dispatch,
        actions: {
            setScene: (sceneId) => dispatch({ type: 'SET_SCENE', payload: sceneId }),
            addToInventory: (item) => dispatch({ type: 'ADD_TO_INVENTORY', payload: item }),
            addPhysicsFragment: () => dispatch({ type: 'ADD_PHYSICS_FRAGMENT' }),
            increaseUnderstanding: () => dispatch({ type: 'INCREASE_UNDERSTANDING' }),
            addEnergeticCore: () => dispatch({ type: 'ADD_ENERGETIC_CORE' }),
            setStoryFlag: (flag, value) => dispatch({ type: 'SET_STORY_FLAG', payload: { flag, value } }),
            setPlayerName: (name) => dispatch({ type: 'SET_PLAYER_NAME', payload: name }),
            toggleDarkMode: () => dispatch({ type: 'TOGGLE_DARK_MODE' }),
            loadGame: (saveData) => dispatch({ type: 'LOAD_GAME', payload: saveData }),
            resetGame: () => dispatch({ type: 'RESET_GAME' })
        }
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame musí být použito uvnitř GameProvider');
    }
    return context;
};