export const saveGame = (gameState) => {
    try {
        const saveData = {
            ...gameState,
            savedAt: new Date().toISOString(),
            version: "1.0.0"
        };
        localStorage.setItem('physicsAdventureSave', JSON.stringify(saveData));
        return { success: true, message: "Hra byla úspěšně uložena!" };
    } catch (error) {
        console.error('Chyba při ukládání hry:', error);
        return { success: false, message: "Chyba při ukládání hry." };
    }
};

export const loadGame = () => {
    try {
        const savedGame = localStorage.getItem('physicsAdventureSave');
        if (!savedGame) {
            return { success: false, message: "Žádná uložená hra nebyla nalezena." };
        }
        
        const gameData = JSON.parse(savedGame);
        
        // Validate save data
        if (!gameData.currentSceneId || !gameData.inventory) {
            return { success: false, message: "Uložená hra je poškozená." };
        }
        
        return { success: true, data: gameData, message: "Hra byla úspěšně načtena!" };
    } catch (error) {
        console.error('Chyba při načítání hry:', error);
        return { success: false, message: "Chyba při načítání hry." };
    }
};

export const exportSave = (gameState) => {
    try {
        const exportData = {
            ...gameState,
            exportedAt: new Date().toISOString(),
            version: "1.0.0"
        };
        const exportString = btoa(JSON.stringify(exportData));
        return { success: true, data: exportString };
    } catch (error) {
        console.error('Chyba při exportu hry:', error);
        return { success: false, message: "Chyba při exportu hry." };
    }
};

export const importSave = (importString) => {
    try {
        const gameData = JSON.parse(atob(importString));
        
        // Validate imported data
        if (!gameData.currentSceneId || !gameData.inventory) {
            return { success: false, message: "Importovaná data jsou neplatná." };
        }
        
        return { success: true, data: gameData, message: "Hra byla úspěšně importována!" };
    } catch (error) {
        console.error('Chyba při importu hry:', error);
        return { success: false, message: "Chyba při importu hry. Zkontrolujte formát dat." };
    }
};

export const deleteSave = () => {
    try {
        localStorage.removeItem('physicsAdventureSave');
        return { success: true, message: "Uložená hra byla smazána." };
    } catch (error) {
        console.error('Chyba při mazání uložené hry:', error);
        return { success: false, message: "Chyba při mazání uložené hry." };
    }
};