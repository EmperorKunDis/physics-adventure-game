import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { saveGame, loadGame, exportSave, importSave, deleteSave } from '../utils/saveSystem';

const MAZ = ({ onClose }) => {
    const { gameState, actions } = useGame();
    const [activeTab, setActiveTab] = useState('kwark');
    const [notification, setNotification] = useState('');
    const [exportData, setExportData] = useState('');
    const [importData, setImportData] = useState('');

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000);
    };

    const handleSave = () => {
        const result = saveGame(gameState);
        showNotification(result.message);
    };

    const handleLoad = () => {
        const result = loadGame();
        if (result.success) {
            actions.loadGame(result.data);
            showNotification(result.message);
        } else {
            showNotification(result.message);
        }
    };

    const handleExport = () => {
        const result = exportSave(gameState);
        if (result.success) {
            setExportData(result.data);
            showNotification('Export připraven! Zkopírujte kód níže.');
        } else {
            showNotification(result.message);
        }
    };

    const handleImport = () => {
        if (!importData.trim()) {
            showNotification('Zadejte importní kód.');
            return;
        }
        
        const result = importSave(importData.trim());
        if (result.success) {
            actions.loadGame(result.data);
            setImportData('');
            showNotification(result.message);
        } else {
            showNotification(result.message);
        }
    };

    const handleDelete = () => {
        if (window.confirm('Opravdu chcete smazat uloženou hru? Tato akce je nevratná.')) {
            const result = deleteSave();
            showNotification(result.message);
        }
    };

    const tabs = [
        { id: 'kwark', label: '👨‍🔬 Prof. Kwark', icon: '🧠' },
        { id: 'inventory', label: '🎒 Inventář', icon: '📦' },
        { id: 'fragments', label: '🧩 Fragmenty', icon: '✨' },
        { id: 'save', label: '💾 Uložit/Načíst', icon: '🔄' }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl ${
                gameState.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}>
                {/* Header */}
                <div className={`p-4 border-b ${
                    gameState.darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-physics-blue'
                }`}>
                    <div className="flex justify-between items-center">
                        <h2 className={`text-xl font-bold flex items-center gap-2 ${
                            gameState.darkMode ? 'text-white' : 'text-white'
                        }`}>
                            📱 Multifunkční Analytický Záznamník (MAZ)
                        </h2>
                        <button
                            onClick={onClose}
                            className={`text-2xl hover:bg-opacity-20 hover:bg-gray-500 rounded p-1 transition-colors ${
                                gameState.darkMode ? 'text-gray-300' : 'text-white'
                            }`}
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className={`flex border-b ${
                    gameState.darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 p-3 text-sm font-medium transition-colors ${
                                activeTab === tab.id
                                    ? gameState.darkMode 
                                        ? 'bg-gray-700 text-white border-b-2 border-physics-blue'
                                        : 'bg-blue-50 text-physics-blue border-b-2 border-physics-blue'
                                    : gameState.darkMode
                                        ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                            }`}
                        >
                            <span className="block mb-1">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6 max-h-96 overflow-y-auto">
                    {/* Notification */}
                    {notification && (
                        <div className={`mb-4 p-3 rounded-lg ${
                            gameState.darkMode 
                                ? 'bg-green-900/50 text-green-300 border border-green-700'
                                : 'bg-green-100 text-green-800 border border-green-200'
                        }`}>
                            {notification}
                        </div>
                    )}

                    {/* Professor Kwark Tab */}
                    {activeTab === 'kwark' && (
                        <div className="space-y-4">
                            <div className={`p-4 rounded-lg ${
                                gameState.darkMode ? 'bg-gray-700' : 'bg-blue-50'
                            }`}>
                                <h3 className="font-semibold text-physics-blue mb-2">
                                    👨‍🔬 Profesor Kwark říká:
                                </h3>
                                <div className={`italic ${
                                    gameState.darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {getKwarkMessage(gameState)}
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="font-medium">Dostupné nápovědy:</h4>
                                <div className={`text-sm space-y-2 ${
                                    gameState.darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    <p>💡 Gravitace: "Síla, která přitahuje objekty k sobě. V ARFZ může být obrácená!"</p>
                                    <p>🔧 Měření: "Vždy si změř vzdálenosti a síly - čísla nemusí lhát, ale mohou překvapit."</p>
                                    <p>🧪 Experimenty: "Nejlepší způsob, jak pochopit fyziku, je vyzkoušet si ji na vlastní kůži."</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Inventory Tab */}
                    {activeTab === 'inventory' && (
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Váš inventář:</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries(gameState.inventory)
                                    .filter(([_, hasItem]) => hasItem)
                                    .map(([item, _]) => (
                                        <div key={item} className={`p-3 rounded-lg border ${
                                            gameState.darkMode 
                                                ? 'border-gray-600 bg-gray-700' 
                                                : 'border-gray-200 bg-gray-50'
                                        }`}>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{getItemIcon(item)}</span>
                                                <div>
                                                    <h4 className="font-medium">{getItemName(item)}</h4>
                                                    <p className={`text-sm ${
                                                        gameState.darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                        {getItemDescription(item)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {Object.values(gameState.inventory).every(item => !item) && (
                                    <p className={`text-center italic ${
                                        gameState.darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        Váš inventář je prázdný.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Physics Fragments Tab */}
                    {activeTab === 'fragments' && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">Fyzikální fragmenty</h3>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    gameState.darkMode 
                                        ? 'bg-physics-purple/20 text-physics-purple' 
                                        : 'bg-physics-purple text-white'
                                }`}>
                                    {gameState.physicsFragments} získáno
                                </span>
                            </div>
                            
                            <div className={`p-4 rounded-lg ${
                                gameState.darkMode ? 'bg-gray-700' : 'bg-purple-50'
                            }`}>
                                <p className={`text-sm ${
                                    gameState.darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Fyzikální fragmenty jsou cenné kousky informací o ARFZ a skutečné fyzice. 
                                    Sbírejte je prozkoumáváním světa a řešením hádanek!
                                </p>
                            </div>

                            {gameState.physicsFragments > 0 ? (
                                <div className="space-y-2">
                                    {Array.from({ length: gameState.physicsFragments }, (_, i) => (
                                        <div key={i} className={`p-3 rounded border ${
                                            gameState.darkMode 
                                                ? 'border-gray-600 bg-gray-700' 
                                                : 'border-gray-200 bg-white'
                                        }`}>
                                            <h4 className="font-medium">🧩 Fragment #{i + 1}</h4>
                                            <p className={`text-sm ${
                                                gameState.darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                {getFragmentDescription(i)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className={`text-center italic ${
                                    gameState.darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                    Zatím jste nenašli žádné fragmenty.
                                </p>
                            )}
                        </div>
                    )}

                    {/* Save/Load Tab */}
                    {activeTab === 'save' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-4">Správa uložených her</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={handleSave} className="physics-button">
                                        💾 Uložit hru
                                    </button>
                                    <button onClick={handleLoad} className="physics-button">
                                        📂 Načíst hru
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium mb-3">Export/Import</h4>
                                <div className="space-y-3">
                                    <button onClick={handleExport} className="physics-button-secondary w-full">
                                        📤 Exportovat hru
                                    </button>
                                    {exportData && (
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Exportní kód (zkopírujte):
                                            </label>
                                            <textarea
                                                value={exportData}
                                                readOnly
                                                className="physics-input w-full h-20 text-xs font-mono"
                                                onClick={(e) => e.target.select()}
                                            />
                                        </div>
                                    )}
                                    
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Importní kód:
                                        </label>
                                        <textarea
                                            value={importData}
                                            onChange={(e) => setImportData(e.target.value)}
                                            placeholder="Vložte exportní kód zde..."
                                            className="physics-input w-full h-20 text-xs font-mono"
                                        />
                                        <button 
                                            onClick={handleImport} 
                                            className="physics-button-secondary w-full mt-2"
                                        >
                                            📥 Importovat hru
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={`pt-4 border-t ${
                                gameState.darkMode ? 'border-gray-600' : 'border-gray-200'
                            }`}>
                                <button 
                                    onClick={handleDelete}
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full"
                                >
                                    🗑️ Smazat uloženou hru
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const getKwarkMessage = (gameState) => {
    if (gameState.physicsUnderstandingLevel === 0) {
        return "Ahá! Nový student ve světě ARFZ! Neboj se, společně prozkoumáme tyto podivné fyzikální jevy. Začneme pomalu s gravitací.";
    } else if (gameState.physicsUnderstandingLevel < 3) {
        return "Výborně pokračuješ! Vidím, že začínáš chápat, jak fungují zákony fyziky v této podivné realitě. Pamatuj si - pozorování je klíčem k pochopení.";
    } else {
        return "Jsem na tebe hrdý! Tvé chápání fyzikálních zákonů se výrazně zlepšilo. Možná jsi připraven na složitější výzvy v dalších zónách ARFZ.";
    }
};

const getItemIcon = (item) => {
    const icons = {
        MAZ: '📱',
        mericiPasmo: '📏',
        vaha: '⚖️',
        teplomer: '🌡️',
        kamenPratelstvi: '💎',
        pamatniKamen: '🌟'
    };
    return icons[item] || '📦';
};

const getItemName = (item) => {
    const names = {
        MAZ: 'Multifunkční Analytický Zázramník',
        mericiPasmo: 'Měřicí pásmo',
        vaha: 'Váha/Siloměr',
        teplomer: 'Teploměr',
        kamenPratelstvi: 'Kámen přátelství',
        pamatniKamen: 'Pamětní kámen od Zzzika'
    };
    return names[item] || item;
};

const getItemDescription = (item) => {
    const descriptions = {
        MAZ: 'Váš věrný společník v ARFZ. Poskytuje nápovědy a provádí výpočty.',
        mericiPasmo: 'Umožňuje přesné měření vzdáleností v podivném prostředí ARFZ.',
        vaha: 'Měří hmotnost a síly - užitečné pro gravitační experimenty.',
        teplomer: 'Sleduje teplotu v termodynamicky nestabilních zónách.',
        kamenPratelstvi: 'Dar od Energetického Skřeta. Umožňuje komunikaci na dálku.',
        pamatniKamen: 'Světélkující kámen na památku dobrodružství v ARFZ.'
    };
    return descriptions[item] || 'Užitečný nástroj pro fyzikální výzkum.';
};

const getFragmentDescription = (index) => {
    const descriptions = [
        "Gravitační konstanta v ARFZ: 'G může být záporné! To znamená odpudivou gravitaci.'",
        "Termodynamika v chaosu: 'Entropy zde někdy klesá místo růstu - to je teoreticky nemožné!'",
        "Energie a hmota: 'E=mc² platí, ale konstanta 'c' se zde mění podle nálady reality.'",
        "Newtonovy zákony: 'Každá akce má svou reakci, ale ne nutně ve stejném směru!'",
        "Kvantová mechanika v makrosvětě: 'Objekty se zde chovají kvantově i ve velkém měřítku.'",
        "Gravitační anomálie: 'Síla je nepřímo úměrná hmotnosti - lehčí objekty padají rychleji nahoru!'",
        "Měření v ARFZ: 'Standardní jednotky zde platí, ale měření musí být interpretováno obráceně.'",
        "Energetické vzorce: 'E = mgh funguje, ale h může být záporné v gravitačních anomáliích.'",
        "Profesorovy poznámky: 'Kwark pozoroval, že ARFZ má 7 vrstev reality - my jsme pouze v první.'",
        "Vědecká metoda: 'I v podivném světě platí - pozoruj, testuj, dokumentuj, opakuj.'",
        "Hmotnost vs. váha: 'V ARFZ se hmotnost nemění, ale váha může být záporná!'",
        "Tíhové zrychlení: 'Normálně 9.8 m/s², v ARFZ může být -9.8 m/s² nebo dokonce proměnné.'",
        "Volný pád: 'Objekty padají nahoru rychlostí závislou na jejich hmotnosti.'",
        "Experimentální pozorování: 'List stoupá rychleji než kámen - obrácená logika gravitace.'",
        "Gravitační rezonátor: 'Zařízení může stabilizovat nebo destabilizovat gravitační pole.'",
        "Termodynamické paradoxy: 'Teplo může téct z chladnějšího na teplejší objekt.'",
        "Teplota v ARFZ: 'Může dosahovat hodnot pod absolutní nulou - teoreticky nemožné!'",
        "Skupenské změny: 'Voda může vřít při pokojové teplotě nebo zamrznout při 100°C.'",
        "Tepelná kapacita: 'Materiály mohou mít zápornou tepelnou kapacitu - ochlazují se při zahřívání.'",
        "Entropie: 'Druhý termodynamický zákon zde může být porušen - systémy spontánně organizují.'",
        "Světelné spektrum: 'ARFZ obsahuje barvy, které neexistují v normální realitě.'",
        "Rychlost světla: 'V optických anomáliích může světlo cestovat rychleji nebo pomaleji.'",
        "Ohyb světla: 'Paprsek může měnit směr bez optického média - porušení Snellova zákona.'",
        "Reflexe: 'Zrcadla mohou odrážet minulost nebo budoucnost místo současnosti.'",
        "Refrakce: 'Index lomu může být záporný, způsobující bizarní optické efekty.'",
        "Zvukové vlny: 'Frekvence může překročit lidské vnímání směrem do 'tichých' zvuků.'",
        "Akustická rychlost: 'Zvuk může cestovat rychleji než světlo v některých akustických zónách.'",
        "Rezonance: 'Objekty mohou rezonovat na frekvencích, které nevydávají žádný zvuk.'",
        "Echo: 'Může se vrátit dříve, než byl zvuk vydán - temporální akustika.'",
        "Interference: 'Destruktivní interference může vytvořit zvuk místo ticha.'",
        "Páka: 'Může poskytovat mechanickou výhodu větší než teoretické maximum.'",
        "Kladka: 'Jeden konec může být těžší než druhý, přesto se pohybuje efektivně.'",
        "Nakloněná rovina: 'Objekty mohou klouzat nahoru bez aplikace síly.'",
        "Šroub: 'Může se otáčet v obou směrech současně v kvantové superpozici.'",
        "Klín: 'Může rozdělovat objekty na molekulární úrovni silou menší než normálně potřebnou.'",
        "Energetický Skřet: 'Zzzik dokáže manipulovat energetickými poli pomocí bioelektrických impulzů.'",
        "Přátelství se Skřetem: 'Vytváří symbiotický vztah umožňující pokročilé energetické manipulace.'",
        "Komunikace energie: 'Zzzik komunikuje pomocí energetických vzorců srozumitelných senzitivním jedincům.'",
        "Skřetí technologie: 'Zzzik rozumí technologiím založeným na energetických polích.'",
        "Bioenergetika: 'Živé organismy v ARFZ mohou generovat a kontrolovat různé formy energie.'",
        "Kvantová biologie: 'Buňky zde fungují podle kvantových principů i v makroskopickém měřítku.'",
        "Interdimenzionální portály: 'Umožňují cestování mezi vrstvami reality v ARFZ.'",
        "Energetická jádra: 'Kondenzované formy fyzikálních zákonů použitelné k opravě reality.'",
        "Stabilizace anomálií: 'Vyžaduje pochopení fyzikálních principů a jejich obrácené aplikace.'",
        "Portálová technologie: 'Funguje na principu manipulace prostočasu pomocí energetických polí.'",
        "Professor Kwark: 'Uvězněný fyzik s hlubokým pochopením ARFZ a jeho zákonitostí.'",
        "Vědecká etika: 'I v alternativní realitě je důležité zachovat vědeckou integritu.'",
        "Multiverziální fyzika: 'ARFZ je jedna z nekonečných variant fyzikálních zákonů.'",
        "Realitní stabilita: 'ARFZ je inherentně nestabilní a vyžaduje konstantní udržování.'",
        "Temporální mechanika: 'Čas v ARFZ teče jinak než v normální realitě.'",
        "Prostorová geometrie: 'Eukleidovská geometrie zde nemusí platit - prostor může být zakřivený.'",
        "Hmotnost a energie: 'Vztah E=mc² je modifikován koeficienty specifickými pro ARFZ.'",
        "Fundamental síly: 'Čtyři základní síly mají v ARFZ modifikované vlastnosti a sílu.'",
        "Elementární částice: 'Chovají se podle upravených kvantových mechanik specifických pro ARFZ.'",
        "Atomová struktura: 'Atomy mohou mít stabilní konfigurace nemožné v normální realitě.'",
        "Chemické vazby: 'Mohou existovat při energiích a vzdálenostech porušujících normální chemii.'",
        "Molekulární pohyby: 'Kinetická teorie je modifikována pro podmínky ARFZ.'",
        "Krystalická struktura: 'Krystaly v ARFZ mohou mít impossible geometrie s unikátními vlastnostmi.'",
        "Fluidní mechanika: 'Tekutiny se mohou chovat jako pevné látky a naopak.'",
        "Elektromagnetismus: 'Má upravené vlastnosti umožňující existenci energetických anomálií.'",
        "Magnetická pole: 'Mohou existovat bez elektrických proudů - čisté magnetické monopoly.'",
        "Elektrická vodivost: 'Izolátory mohou vést elektřinu a vodiče mohou izolovat.'",
        "Kapacita a indukčnost: 'Elektronické komponenty mají v ARFZ modifikované vlastnosti.'",
        "Oscilace a vlny: 'Mohou existovat vlny s nemožnými frekvencemi a amplitudami.'",
        "Stojatí vlny: 'Mohou vznikat bez odrazu - spontánní interference ve vakuu.'",
        "Doppleův jev: 'Může fungovat obráceně - frekvence se zvyšuje při vzdalování.'",
        "Vlnová funkce: 'Pravděpodobnostní interpretace kvantové mechaniky je v ARFZ deterministická.'",
        "Heisenbergův princip: 'Neurčitost může být v ARFZ překonána pomocí speciálních měření.'",
        "Kvantové provázání: 'Působí rychleji a na větší vzdálenosti než v normální realitě.'",
        "Tunelový jev: 'Objekty mohou tunelovat skrz bariéry s vyšší pravděpodobností.'",
        "Radioaktivní rozpad: 'Může být v ARFZ ovládán vnějšími vlivy a dokonce zastaven.'",
        "Jaderné síly: 'Silná a slabá jaderná síla mají v ARFZ modifikované dosazy a sílu.'",
        "Relativistické efekty: 'Dilatace času a kontrakce délky fungují při nižších rychlostech.'",
        "Ekvivalence hmotnosti: 'Gravitační a setrvačná hmotnost nemusí být v ARFZ ekvivalentní.'",
        "Kosmologické konstanty: 'Fundamentální konstanty jako c, h, G mají v ARFZ jiné hodnoty.'",
        "Vakuum: 'Může mít v ARFZ aktivní vlastnosti a ovlivňovat fyzikální procesy.'",
        "Nulová energie: 'Vakuové fluktuace jsou v ARFZ makroskopicky pozorovatelné.'",
        "Multidimenzionalita: 'ARFZ má více než čtyři dimenze dostupné pro manipulaci.'"
    ];
    return descriptions[index] || "Fascinující pozorování o fyzikálních zákonech v ARFZ.";
};

export default MAZ;