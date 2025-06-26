export const finaleScenes = {
    FINAL_PORTAL_ACTIVATION: {
        id: 'FINAL_PORTAL_ACTIVATION',
        location: 'ARFZ - Hlavní portál',
        text: `
            <p>Vrátíte se k místu, kde jste poprvé vstoupili do ARFZ. Krajina nyní 
            vypadá úplně jinak - stabilní, harmonická, a krásná.</p>
            
            <p>Před vámi se zjevuje obrovský portálový kruh, který pulzuje 
            v rytmu vašich získaných energetických jader.</p>
            
            <p><em>Professor Kwark je pohnutý:</em> "Po patnácti letech v ARFZ konečně 
            vidím šanci na návrat domů! Tvoje práce byla neuvěřitelná. 
            Nejen že jsi vyřešil všechny fyzikální anomálie, ale také jsi se naučil 
            základy mechaniky, termodynamiky, optiky, akustiky a gravitace!"</p>
            
            <p>MAZ ukazuje váš pokrok:</p>
            <ul>
                <li><strong>Energetická jádra:</strong> Získáno/5</li>
                <li><strong>Úroveň porozumění:</strong> Zvyšuje se postupně</li>
                <li><strong>Fyzikální fragmenty:</strong> Sbíráno během cesty</li>
            </ul>
            
            <p>Portál má pět zásuvek pro energetická jádra. Každá svítí, když 
            vložíte odpovídající jádro:</p>
            
            <p><strong>🌟 Vložte všechna pět jader k aktivaci portálu! 🌟</strong></p>
        `,
        choices: [
            {
                id: 'activate_portal',
                text: 'Vložit všechna jádra a aktivovat portál',
                description: 'Čas jít domů!',
                nextScene: 'PORTAL_ACTIVATED',
                conditions: [
                    { type: 'minCores', count: 5 }
                ],
                actions: [
                    { type: 'setStoryFlag', flag: 'portalActivated', value: true }
                ]
            },
            {
                id: 'not_enough_cores',
                text: 'Nemáte dostatek jader...',
                nextScene: 'INSUFFICIENT_CORES',
                conditions: [
                    { type: 'maxCores', count: 4 }
                ]
            }
        ]
    },

    INSUFFICIENT_CORES: {
        id: 'INSUFFICIENT_CORES',
        location: 'ARFZ - Hlavní portál',
        text: `
            <p>Bohužel, nemáte všechna potřebná energetická jádra k aktivaci portálu.</p>
            
            <p><em>Kwark vysvětluje:</em> "Potřebuješ všech pět jader - z každé fyzikální zóny jedno. 
            Jen tak můžeme stabilizovat portál pro bezpečný návrat."</p>
            
            <p><strong>Potřebná jádra:</strong></p>
            <ul>
                <li>🔹 Gravitační jádro (Zóna 1)</li>
                <li>🔹 Termodynamické jádro (Zóna 2)</li>
                <li>🔹 Optické jádro (Zóna 3)</li>
                <li>🔹 Akustické jádro (Zóna 4)</li>
                <li>🔹 Mechanické jádro (Zóna 5)</li>
            </ul>
            
            <p>Musíte se vrátit a dokončit zbývající zóny.</p>
        `,
        choices: [
            {
                id: 'return_to_zones',
                text: 'Vrátit se k nedokončeným zónám',
                nextScene: 'ZONA1_UVOD' // Nebo podle toho, co chybí
            }
        ]
    },

    PORTAL_ACTIVATED: {
        id: 'PORTAL_ACTIVATED',
        location: 'ARFZ - Aktivní portál',
        text: `
            <p>Jedno po druhém vkládáte energetická jádra do portálu:</p>
            
            <p><strong>GRAVITAČNÍ JÁDRO</strong> - Portál se začne vznášet</p>
            <p><strong>TERMODYNAMICKÉ JÁDRO</strong> - Kolem portálu se stabilizuje teplota</p>
            <p><strong>OPTICKÉ JÁDRO</strong> - Portál se zalije duhovou září</p>
            <p><strong>AKUSTICKÉ JÁDRO</strong> - Ozývá se harmonický tón</p>
            <p><strong>MECHANICKÉ JÁDRO</strong> - Portál se začne rytmicky otáčet</p>
            
            <p><strong>BZZZZZZT! FLASH! BOOM!</strong></p>
            
            <p>Portál se aktivuje! Uprostřed kruhu se otevírá stabilní průchod - 
            vidíte skrze něj váš domov!</p>
            
            <p><em>Kwark je dojatý:</em> "Je to krásné! Po patnácti letech vidím cestu domů! 
            Ale především jsem hrdý na to, cos dokázal. Stal jsi se skutečným fyzikem - 
            pozoroval jsi, experimentoval, počítal, a pochopil jsi základní zákony přírody!"</p>
            
            <p>Z MAZ začíná vycházet světelný hologram Kwarka - jeho vědomí se 
            může konečně vrátit zpět do jeho těla!</p>
        `,
        choices: [
            {
                id: 'step_through_portal',
                text: 'Projít portálem domů',
                nextScene: 'SAFE_RETURN_HOME'
            },
            {
                id: 'say_goodbye_to_arfz',
                text: 'Rozloučit se s ARFZ',
                nextScene: 'FAREWELL_TO_ARFZ'
            }
        ]
    },

    FAREWELL_TO_ARFZ: {
        id: 'FAREWELL_TO_ARFZ',
        location: 'ARFZ - Rozloučení',
        text: `
            <p>Rozhodnete se naposledy rozhlédnout po ARFZ a rozloučit se s tímto 
            podivuhodným místem, které vás toho tolik naučilo.</p>
            
            <p>V dálce vidíte všechny zóny, které jste stabilizovali:</p>
            <ul>
                <li><strong>Zóna gravitace:</strong> Kameny klidně leží na zemi</li>
                <li><strong>Termodynamická zóna:</strong> Příjemná pokojová teplota</li>
                <li><strong>Optická zóna:</strong> Světlo se chová normálně</li>
                <li><strong>Akustická zóna:</strong> Harmonické zvuky přírody</li>
                <li><strong>Mechanická zóna:</strong> Stroje pracují efektivně</li>
            </ul>
            
            <p>Když se vracíte k portálu, objevuje se malý Zzzik!</p>
            
            <p><strong>"Bzip bzip! Příteli-fyziku! Zzzik-tě-nenechá-odejít-bez-rozloučení!"</strong></p>
            
            <p>Energetický skřet vypadá spokojeně a sytě:</p>
            
            <p><strong>"Díky-tobě Zzzik-našel-nové-zdroje-energie! Teď-jí-správnou-fyziku 
            místo-rozbité-fyziky! Je-to-mnohem-zdravější!"</strong></p>
            
            <p>Podává vám malý, světélkující kámen:</p>
            
            <p><strong>"Dárek-na-památku! Když-někdy-budeš-potřebovat-pomoc-s-fyzikou, 
            drž-kámen-a-vzpomeň-si-na-ARFZ!"</strong></p>
        `,
        choices: [
            {
                id: 'accept_gift_and_leave',
                text: 'Přijmout dárek a odejít domů',
                nextScene: 'SAFE_RETURN_HOME',
                actions: [
                    { type: 'addToInventory', item: 'pamatniKamen' },
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    SAFE_RETURN_HOME: {
        id: 'SAFE_RETURN_HOME',
        location: 'Váš pokoj/laboratoř - Návrat',
        text: `
            <p>Procházíte portálem a... jste zpět ve svém pokoji!</p>
            
            <p>Vše vypadá stejně jako předtím, ale vy se cítíte úplně jinak. 
            V rukou stále držíte MAZ, který nyní ukazuje zprávu:</p>
            
            <p><em>"Dobrodružství dokončeno! Professor Kwark byl úspěšně navrácen 
            do svého těla v laboratoři Univerzity v Cambridge. 
            Portál se automaticky uzavřel. Děkujeme za vaši pomoc!"</em></p>
            
            <p>Na stole leží vaše staré učebnice fyziky, ale nyní si uvědomujete, 
            že rozumíte všem těm rovnicím a diagramům. Fyzika už není jen 
            abstraktní teorie - je to popis toho, jak skutečně funguje svět!</p>
            
            <p><strong>Vaše úspěchy:</strong></p>
            <ul>
                <li>✅ Zvládli jste gravitaci a síly</li>
                <li>✅ Pochopili jste teplo a teplotu</li>
                <li>✅ Osvojili jste si optiku a světlo</li>
                <li>✅ Naučili jste se akustiku a zvuk</li>
                <li>✅ Ovládli jste mechaniku a jednoduché stroje</li>
                <li>✅ Zachránili jste profesora Kwarka</li>
                <li>✅ Stabilizovali jste ARFZ</li>
            </ul>
            
            <p>Nejvíc ze všeho jste ale získali lásku k fyzice a pochopení, 
            že věda je dobrodružství!</p>
        `,
        choices: [
            {
                id: 'start_studying_physics',
                text: 'Začít studovat fyziku s novým nadšením',
                nextScene: 'EPILOG_FYZIK'
            },
            {
                id: 'share_adventure',
                text: 'Sdílet dobrodružství s přáteli',
                nextScene: 'EPILOG_UCITEL'
            },
            {
                id: 'play_again',
                text: 'Hrát znovu od začátku',
                nextScene: 'UVOD_PORTAL_AKTIVACE',
                actions: [
                    { type: 'resetGame' }
                ]
            }
        ]
    },

    EPILOG_FYZIK: {
        id: 'EPILOG_FYZIK',
        location: 'Epilog - Fyzik',
        text: `
            <p><strong>🎓 EPILOG - Budoucí fyzik 🎓</strong></p>
            
            <p>O několik let později...</p>
            
            <p>Sedíte ve své vlastní laboratoři na univerzitě a pracujete na 
            výzkumu multidimenzionálních prostorů. Na stole máte stále 
            váš starý MAZ a pamětní kámen od Zzzika.</p>
            
            <p>Vaši studenti vás poslouchají s nadšením, když jim vyprávíte 
            o tom, jak fascinující může být fyzika:</p>
            
            <p><em>"Fyzika není jen sbírka vzorců - je to způsob, jak pochopit 
            vesmír kolem nás. Každý jev, od padajícího jablka po svítící hvězdy, 
            řídí stejné základní zákony!"</em></p>
            
            <p>V koutě laboratoře stojí malý portál - váš vlastní vynález. 
            Zatím vede jen do vedlejší místnosti, ale kdo ví... 
            možná jednou objevíte nové dimenze plné úžasných fyzikálních jevů!</p>
            
            <p>Vaše dobrodružství v ARFZ bylo jen začátkem celoživotní lásky k vědě.</p>
            
            <p><strong>🌟 GRATULUJI! Stali jste se skutečným fyzikem! 🌟</strong></p>
        `,
        choices: [
            {
                id: 'new_adventure',
                text: 'Začít nové dobrodružství',
                nextScene: 'UVOD_PORTAL_AKTIVACE',
                actions: [
                    { type: 'resetGame' }
                ]
            }
        ]
    },

    EPILOG_UCITEL: {
        id: 'EPILOG_UCITEL',
        location: 'Epilog - Učitel',
        text: `
            <p><strong>👨‍🏫 EPILOG - Inspirující učitel 👨‍🏫</strong></p>
            
            <p>O několik let později...</p>
            
            <p>Stojíte před třídou šestáků a vyučujete fyziku. Ale ne nudně 
            z učebnice - vaše hodiny jsou plné experimentů, příběhů a dobrodružství!</p>
            
            <p><em>"Kdo by chtěl vědět, jak funguje gravitace?"</em> ptáte se. 
            Všechny ruce vystřelí nahoru.</p>
            
            <p>Vyprávíte jim o Alternativní Realitě Fyzikálních Zákonů, 
            o kamením padajícím nahoru, o profesoru Kwarkovi a Energetickém Skřetovi. 
            Děti poslouchají s otevřenými ústy.</p>
            
            <p>Na konci hodiny děti křičí: <em>"To bylo úžasné! Můžeme si také 
            zkusit fyzikální dobrodružství?"</em></p>
            
            <p>Usmíváte se a vytahujete ze zásuvky několik MAZ zařízení:</p>
            
            <p><em>"Samozřejmě! Fyzika je největší dobrodružství ze všech. 
            Začneme příští hodinu s gravitačními experimenty!"</em></p>
            
            <p>Vaše zkušenost z ARFZ inspirovala celou novou generaci mladých vědců.</p>
            
            <p><strong>🌟 GRATULUJI! Stali jste se inspirujícím učitelem! 🌟</strong></p>
        `,
        choices: [
            {
                id: 'teach_more_students',
                text: 'Inspirovat další studenty',
                nextScene: 'UVOD_PORTAL_AKTIVACE',
                actions: [
                    { type: 'resetGame' }
                ]
            }
        ]
    }
};

export const getFinaleScene = (sceneId) => {
    return finaleScenes[sceneId];
};