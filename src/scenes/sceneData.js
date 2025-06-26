// Central scene data management
import { introScenes } from './intro/introScenes';
import { zone1Scenes } from './zone1_gravity/gravityScenes';
import { zone2Scenes } from './zone2_thermodynamics/thermodynamicsScenes';
import { zone3Scenes } from './zone3_optics/opticsScenes';
import { zone4Scenes } from './zone4_acoustics/acousticsScenes';
import { zone5Scenes } from './zone5_mechanics/mechanicsScenes';
import { finaleScenes } from './finale/finaleScenes';
import { energetickySkretScenes } from './characters/energetickySkret';

// Combine all scenes into one object
const allScenes = {
    ...introScenes,
    ...zone1Scenes,
    ...zone2Scenes,
    ...zone3Scenes,
    ...zone4Scenes,
    ...zone5Scenes,
    ...finaleScenes,
    ...energetickySkretScenes
};

export const getScene = (sceneId) => {
    const scene = allScenes[sceneId];
    if (!scene) {
        console.warn(`Scéna '${sceneId}' nebyla nalezena`);
        return {
            id: 'ERROR',
            location: 'Neznámá lokace',
            text: `<p><strong>Chyba:</strong> Scéna '${sceneId}' nebyla nalezena.</p>
                   <p>Možná jste narazili na chybu ve hře. Zkuste se vrátit nebo použít MAZ.</p>`,
            choices: [
                {
                    id: 'back',
                    text: 'Vrátit se zpět',
                    nextScene: 'UVOD_PORTAL_AKTIVACE'
                }
            ]
        };
    }
    return scene;
};

export const getAllScenes = () => allScenes;

export const getScenesByZone = (zone) => {
    return Object.entries(allScenes)
        .filter(([id, scene]) => id.startsWith(zone))
        .reduce((acc, [id, scene]) => {
            acc[id] = scene;
            return acc;
        }, {});
};