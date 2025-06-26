import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import Choices from './Choices';
import MAZ from './MAZ';
import { getScene } from '../scenes/sceneData';

const GameScreen = () => {
    const { gameState, actions } = useGame();
    const [showMAZ, setShowMAZ] = useState(false);
    const [sceneText, setSceneText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const textRef = useRef(null);

    useEffect(() => {
        const currentScene = getScene(gameState.currentSceneId);
        if (currentScene) {
            setSceneText(currentScene.text);
            setIsLoading(false);
            
            // Scroll to latest text
            if (textRef.current) {
                textRef.current.scrollTop = textRef.current.scrollHeight;
            }
        }
    }, [gameState.currentSceneId]);

    const currentScene = getScene(gameState.currentSceneId);

    if (isLoading || !currentScene) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-physics-blue mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 font-inter">Načítám dobrodružství...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            gameState.darkMode 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'
        }`}>
            {/* Header */}
            <header className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
                gameState.darkMode 
                    ? 'bg-gray-800/90 border-gray-700' 
                    : 'bg-white/90 border-gray-200'
            } backdrop-blur-sm`}>
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold text-physics-blue">
                            Fyzikální dobrodružství
                        </h1>
                        <p className="text-sm opacity-75">
                            Úroveň porozumění: {gameState.physicsUnderstandingLevel} | 
                            Fragmenty: {gameState.physicsFragments} | 
                            Jádra: {gameState.energetickeJadra}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={actions.toggleDarkMode}
                            className={`p-2 rounded-lg transition-colors ${
                                gameState.darkMode 
                                    ? 'bg-gray-700 hover:bg-gray-600' 
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                            aria-label="Přepnout tmavý režim"
                        >
                            {gameState.darkMode ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => setShowMAZ(!showMAZ)}
                            className="physics-button text-sm"
                        >
                            MAZ {showMAZ ? '×' : '📱'}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Game Area */}
                    <div className="lg:col-span-2">
                        {/* Scene Text */}
                        <div 
                            ref={textRef}
                            className={`physics-card mb-6 max-h-96 overflow-y-auto ${
                                gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
                            }`}
                        >
                            <div className="prose max-w-none">
                                <div 
                                    className="physics-text leading-relaxed text-base"
                                    dangerouslySetInnerHTML={{ __html: sceneText }}
                                />
                            </div>
                        </div>

                        {/* Choices */}
                        <Choices scene={currentScene} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Current Location */}
                        <div className={`physics-card ${
                            gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
                        }`}>
                            <h3 className="font-semibold text-physics-purple mb-2">
                                📍 Aktuální lokace
                            </h3>
                            <p className="text-sm physics-text-light">
                                {currentScene.location || 'Neznámá lokace'}
                            </p>
                        </div>

                        {/* Inventory Quick View */}
                        <div className={`physics-card ${
                            gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
                        }`}>
                            <h3 className="font-semibold text-physics-green mb-2">
                                🎒 Inventář
                            </h3>
                            <div className="space-y-1 text-sm">
                                {Object.entries(gameState.inventory)
                                    .filter(([_, hasItem]) => hasItem)
                                    .map(([item, _]) => (
                                        <div key={item} className="physics-text-light">
                                            • {getItemName(item)}
                                        </div>
                                    ))
                                }
                                {Object.values(gameState.inventory).every(item => !item) && (
                                    <p className="physics-text-light italic">Prázdný inventář</p>
                                )}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className={`physics-card ${
                            gameState.darkMode ? 'bg-gray-800 border-gray-700' : ''
                        }`}>
                            <h3 className="font-semibold text-physics-orange mb-2">
                                📊 Statistiky
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Úroveň porozumění:</span>
                                    <span className="font-semibold">{gameState.physicsUnderstandingLevel}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Fyzikální fragmenty:</span>
                                    <span className="font-semibold">{gameState.physicsFragments}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Energetická jádra:</span>
                                    <span className="font-semibold">{gameState.energetickeJadra}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAZ Overlay */}
            {showMAZ && (
                <MAZ onClose={() => setShowMAZ(false)} />
            )}
        </div>
    );
};

const getItemName = (itemKey) => {
    const itemNames = {
        MAZ: 'Multifunkční Analytický Záznamník',
        mericiPasmo: 'Měřicí pásmo',
        vaha: 'Váha/Siloměr',
        teplomer: 'Teploměr'
    };
    return itemNames[itemKey] || itemKey;
};

export default GameScreen;