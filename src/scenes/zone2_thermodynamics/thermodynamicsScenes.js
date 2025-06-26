export const zone2Scenes = {
    ZONA2_UVOD: {
        id: 'ZONA2_UVOD',
        location: 'Zóna Termodynamického Chaosu - Vstup',
        text: `
            <p>Vstupujete do druhé zóny ARFZ a okamžitě cítíte drastickou změnu teploty. 
            Vzduchu jakoby se stále měnil - chvíli je ledově studený, pak najednou vyprahlý 
            jako v sauně, a pak zase příjemně vlažný.</p>
            
            <p>Kolem vás vidíte podivné věci:</p>
            <ul>
                <li>Loužičky vody, které <strong>vřou při pokojové teplotě</strong></li>
                <li>Kousky ledu, které <strong>se netají ani v horku</strong></li>
                <li>Vzduch, který <strong>se viditelně vlní</strong> kvůli tepelným proudům</li>
                <li>Květiny, které se <strong>rozpínají a smršťují</strong> podle teploty</li>
            </ul>
            
            <p>MAZ pípá a ukazuje extrémní hodnoty: <em>"Teplota: -10°C až +80°C, 
            mění se každé 3 sekundy! Termodynamické zákony jsou zde silně narušeny!"</em></p>
            
            <p><em>Professor Kwark komentuje:</em> "Vítej v Zóně Termodynamického Chaosu! 
            Zde je problém s tepelnou energií a jejím přenosem. Musíme najít tepelný 
            rezonátor a stabilizovat teplotní pole."</p>
            
            <p>Automaticky získáváte teploměr do svého inventáře.</p>
        `,
        choices: [
            {
                id: 'investigate_boiling_water',
                text: 'Prozkoumat vařící se vodu',
                description: 'Proč vře při normální teplotě?',
                nextScene: 'ZONA2_VARICI_VODA',
                actions: [
                    { type: 'addToInventory', item: 'teplomer' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'study_ice_not_melting',
                text: 'Studovat led, který se netaje',
                description: 'Porušuje to základní fyzikální zákony',
                nextScene: 'ZONA2_NETATILCI_LED',
                actions: [
                    { type: 'addToInventory', item: 'teplomer' }
                ]
            },
            {
                id: 'observe_expanding_flowers',
                text: 'Pozorovat rozpínající se květiny',
                description: 'Příklad tepelné roztažnosti',
                nextScene: 'ZONA2_TEPELNA_ROZTAZNOST',
                actions: [
                    { type: 'addToInventory', item: 'teplomer' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'look_for_skret',
                text: 'Hledat Energetického Skřeta',
                description: 'Možná je i tady někde',
                nextScene: 'ZONA2_SKRET_ENCOUNTER',
                conditions: [
                    { type: 'hasItem', item: 'kamenPratelstvi' }
                ]
            }
        ],
        hint: 'Teplo je forma energie. Pozorujte, jak se přenáší mezi objekty!'
    },

    ZONA2_VARICI_VODA: {
        id: 'ZONA2_VARICI_VODA',
        location: 'Zóna Termodynamického Chaosu - Vařící voda',
        text: `
            <p>Přiblížíte se k loužičce vody, která intenzivně bublá a vře. 
            Vytáhnete teploměr a změříte teplotu.</p>
            
            <p><strong>Překvapivé zjištění:</strong> Voda má teplotu pouze 20°C, 
            ale přesto vře jako by měla 100°C!</p>
            
            <p>MAZ analyzuje: <em>"Bod varu je závislý na tlaku. Normálně: 100°C při 1 atmosféře. 
            Zde: tlak vzduchu kolísá mezi 0.1 a 3 atmosférami!"</em></p>
            
            <p><em>Kwark vysvětluje:</em> "Výborně! Objevil jsi vztah mezi tlakem a bodem varu! 
            Ve vysokých horách voda vře při nižší teplotě kvůli nižšímu tlaku. 
            Tady je tlak tak nízký, že voda vře při pokojové teplotě!"</p>
            
            <p>Pozorujete, jak se voda mění mezi kapalným a plynným skupenstvím 
            podle změn tlaku v atmosféře.</p>
            
            <p>Vedle louže si všimnete malého mechanismu, který zřejmě ovládá tlak vzduchu...</p>
        `,
        choices: [
            {
                id: 'investigate_pressure_device',
                text: 'Prozkoumat mechanismus tlaku',
                description: 'Možná je to klíč k řešení',
                nextScene: 'ZONA2_TLAKOVY_REGULATOR',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'experiment_with_temperature',
                text: 'Experimentovat s teplotou vody',
                nextScene: 'ZONA2_TEPELNY_EXPERIMENT',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'measure_more_locations',
                text: 'Změřit teplotu na více místech',
                description: 'Vědecký přístup - sbírat data',
                nextScene: 'ZONA2_MERENI_TEPLOTY',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ZONA2_NETATILCI_LED: {
        id: 'ZONA2_NETATILCI_LED',
        location: 'Zóna Termodynamického Chaosu - Nestající led',
        text: `
            <p>Přiblížíte se k velkému kusu ledu, který leží na zemi uprostřed 
            vlny horkého vzduchu. Teploměr ukazuje kolem ledu teplotu 60°C, 
            ale led se vůbec netaje!</p>
            
            <p>Když se ledu opatrně dotknete, je skutečně ledově studený, 
            ale okolní vzduch je parný a horký.</p>
            
            <p>MAZ detekuje: <em>"Anomální tepelná vodivost! Led nepřijímá teplo 
            z okolního prostředí. Koeficient tepelné vodivosti = 0!"</em></p>
            
            <p><em>Kwark se diví:</em> "To je neuvěřitelné! Normálně teplo vždy přechází 
            z teplejšího tělesa na chladnější. Ale tady je ledová kostka dokonale 
            tepelně izolovaná od okolí!"</p>
            
            <p>Při bližším zkoumání si všimnete, že led obklopuje slabě svítící 
            síla pole - jako neviditelná bariéra, která blokuje přenos tepla.</p>
            
            <p>Na zemi vedle ledu je malá destička s nápisem: 
            <em>"Tepelná izolace - Experiment #23 - Dr. M. Thompson"</em></p>
        `,
        choices: [
            {
                id: 'study_thermal_barrier',
                text: 'Studovat tepelnou bariéru',
                description: 'Jak funguje tato izolace?',
                nextScene: 'ZONA2_TEPELNA_IZOLACE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'look_for_thompson_notes',
                text: 'Hledat další poznámky Dr. Thompsona',
                nextScene: 'ZONA2_THOMPSON_POZNAMKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'try_to_break_barrier',
                text: 'Pokusit se prolomit bariéru',
                description: 'Experimentální přístup',
                nextScene: 'ZONA2_EXPERIMENT_BARIERY'
            }
        ]
    },

    ZONA2_TEPELNA_ROZTAZNOST: {
        id: 'ZONA2_TEPELNA_ROZTAZNOST',
        location: 'Zóna Termodynamického Chaosu - Tepelná roztažnost',
        text: `
            <p>Soustředíte se na podivné květiny, které se neustále rozpínají a smršťují. 
            Jejich stonky jsou dlouhé někdy 30 cm, jindy jen 10 cm, podle teploty vzduchu.</p>
            
            <p>Měříte teplotu a pozorujete:</p>
            <ul>
                <li><strong>Při 10°C:</strong> Stonek má 10 cm</li>
                <li><strong>Při 30°C:</strong> Stonek má 20 cm</li>
                <li><strong>Při 50°C:</strong> Stonek má 30 cm</li>
            </ul>
            
            <p>MAZ vypočítává: <em>"Koeficient délkové roztažnosti: α = 0.001/°C. 
            To je 10x víc než u běžných materiálů!"</em></p>
            
            <p><em>Kwark učí:</em> "Skvělé pozorování! Tepelná roztažnost je jev, kdy se materiály 
            rozpínají při ohřátí a smršťují při ochlazení. Vzorec je: ΔL = L₀ × α × ΔT"</p>
            
            <p>"Kde ΔL je změna délky, L₀ původní délka, α koeficient roztažnosti 
            a ΔT změna teploty. Tyto květiny mají extrémně vysoký koeficient!"</p>
            
            <p>Při sledování květin si všimnete, že jedna z nich roste směrem 
            k určitému místu - jako by ukazovala cestu...</p>
        `,
        choices: [
            {
                id: 'follow_flower_direction',
                text: 'Následovat směr květiny',
                description: 'Možná ukazuje k tepelnému zdroji',
                nextScene: 'ZONA2_TEPELNY_ZDROJ',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'calculate_expansion_precisely',
                text: 'Přesně spočítat roztažnost',
                description: 'Matematický přístup',
                nextScene: 'ZONA2_VYPOCTY_ROZTAZNOSTI',
                actions: [
                    { type: 'increaseUnderstanding' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'test_with_own_objects',
                text: 'Otestovat s vlastními předměty',
                description: 'Experimentální ověření',
                nextScene: 'ZONA2_EXPERIMENT_ROZTAZNOST'
            }
        ]
    },

    ZONA2_TEPELNY_ZDROJ: {
        id: 'ZONA2_TEPELNY_ZDROJ',
        location: 'Zóna Termodynamického Chaosu - Tepelný zdroj',
        text: `
            <p>Následujete směr, kterým ukazovala nejdelší květina, a dostáváte se 
            k velkému krystalu, který pulzuje různými barvami - modrou, červenou, 
            žlutou, bílou.</p>
            
            <p>S každým pulzem cítíte vlnu tepla nebo chladu:</p>
            <ul>
                <li><strong>Modrý puls:</strong> Vlna chladu (-20°C)</li>
                <li><strong>Červený puls:</strong> Vlna tepla (+80°C)</li>
                <li><strong>Žlutý puls:</strong> Mírné teplo (+40°C)</li>
                <li><strong>Bílý puls:</strong> Neutrální teplota (+20°C)</li>
            </ul>
            
            <p><em>Kwark se nadchne:</em> "To je ono! Termodynamický rezonátor! 
            Generuje a vysílá tepelnou energii v pulzech. Proto je tady takový chaos!"</p>
            
            <p>Na krystalu vidíte kontrolní panel se čtyřmi nastavení:</p>
            <ul>
                <li><strong>TEPLOTA:</strong> Aktuálně "CHAOS" (náhodné)</li>
                <li><strong>FREKVENCE:</strong> Aktuálně "RYCHLÁ" (každé 3 sekundy)</li>
                <li><strong>INTENZITA:</strong> Aktuálně "MAXIMUM"</li>
                <li><strong>SMĚR ŠÍŘENÍ:</strong> Aktuálně "VŠESMĚROVĚ"</li>
            </ul>
            
            <p>Aby jste stabilizovali zónu, musíte nastavit krystal na konstantní, 
            mírnou teplotu.</p>
        `,
        choices: [
            {
                id: 'set_constant_temperature',
                text: 'Nastavit konstantní teplotu 20°C',
                description: 'Stabilní pokojová teplota',
                nextScene: 'ZONA2_USPESNA_STABILIZACE',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'setStoryFlag', flag: 'zone2Solved', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'experiment_with_settings',
                text: 'Experimentovat s různými nastaveními',
                description: 'Možná najdete lepší řešení',
                nextScene: 'ZONA2_EXPERIMENTOVANI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_kwark_for_help',
                text: 'Požádat Kwarka o radu',
                nextScene: 'ZONA2_KWARK_RADA_TEPLO',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA2_USPESNA_STABILIZACE: {
        id: 'ZONA2_USPESNA_STABILIZACE',
        location: 'Zóna Termodynamického Chaosu - Stabilizováno',
        text: `
            <p>Nastavíte termostat krystalu na konstantní teplotu 20°C, 
            frekvenci na nulu (žádné pulzy) a intenzitu na minimum.</p>
            
            <p><strong>BZZZZT! KLIK!</strong></p>
            
            <p>Krystal přestane chaoticky blikat a začne svítit klidným, 
            bílým světlem. Teplota se po celé zóně stabilizuje na příjemných 20°C.</p>
            
            <p>Voda přestává vřít a vrací se k normálnímu skupenství. 
            Led se začíná pomalu tát. Květiny se ustálí na normální velikosti.</p>
            
            <p><em>Kwark jásá:</em> "Výborně! Pochopil jsi základní princip termodynamiky - 
            tepelná rovnováha! Když je systém v rovnováze, neprobíhá spontánní 
            přenos tepla mezi jeho částmi."</p>
            
            <p>Ze stabilizovaného krystalu se uvolní zářící energetické jádro.</p>
            
            <p><strong>ZÍSKALI JSTE: Termodynamické jádro!</strong></p>
            
            <p>"Ještě potřebuješ jádra z optické zóny, akustické zóny a mechanické zóny. 
            Pak budeme moci stabilizovat hlavní portál!"</p>
        `,
        choices: [
            {
                id: 'continue_to_zone3',
                text: 'Pokračovat do optické zóny',
                nextScene: 'ZONA3_PRECHOD'
            },
            {
                id: 'explore_stabilized_zone',
                text: 'Prozkoumat stabilizovanou zónu',
                description: 'Možná jsou tu ještě zajímavé věci',
                nextScene: 'ZONA2_PO_STABILIZACI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA2_PO_STABILIZACI: {
        id: 'ZONA2_PO_STABILIZACI',
        location: 'Zóna Termodynamického Chaosu - Po stabilizaci',
        text: `
            <p>Po stabilizaci zóny můžete v klidu prozkoumat okolí. 
            Najdete několik zajímavých věcí:</p>
            
            <p><strong>Termodynamická laboratoř Dr. Thompsona:</strong></p>
            <p>Improvizované pracoviště s poznámkami o tepelných experimentech:</p>
            
            <p><em>"Experimenty s tepelnou vodivostí různých materiálů v ARFZ:"</em></p>
            <ul>
                <li><em>Kov: vodivost 100x vyšší než normálně</em></li>
                <li><em>Dřevo: vodivost záporná (odvádí teplo!)</em></li>
                <li><em>Vzduch: vodivost závislá na barvě světla</em></li>
            </ul>
            
            <p><strong>Sbírka teploměrů:</strong></p>
            <p>Různé typy teploměrů ukazující extrémní hodnoty:</p>
            <ul>
                <li>Rtuťový teploměr: -50°C až +150°C</li>
                <li>Digitální teploměr: "ERROR - hodnota mimo rozsah"</li>
                <li>Infračervený teploměr: ukazuje barvy místo čísel</li>
            </ul>
            
            <p>Tyto nálezy vám dávají hlubší pochopení termodynamiky v ARFZ.</p>
        `,
        choices: [
            {
                id: 'study_thompsons_work',
                text: 'Studovat Thompsonovy experimenty',
                nextScene: 'ZONA2_THOMPSON_STUDIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'ready_for_next_zone',
                text: 'Připraven na další zónu',
                nextScene: 'ZONA3_PRECHOD'
            }
        ]
    },

    ZONA2_SKRET_ENCOUNTER: {
        id: 'ZONA2_SKRET_ENCOUNTER',
        location: 'Zóna Termodynamického Chaosu - Setkání se Skřetem',
        text: `
            <p>Pomocí kamene přátelství zavoláte Zzzika. Kámen se zahřeje 
            a začne pulzovat, a za chvíli se objeví váš malý přítel.</p>
            
            <p><strong>"Bzip bzip! Příteli-z-gravitace! Zzzik-tě-našel!"</strong></p>
            
            <p>Vypadá nadšeně a jeho světélka pulzují rychleji než obvykle:</p>
            
            <p><strong>"Tady-je-nádherně! Tepelná-energie-všude! Zzzik-má-velkou-hostinu! 
            Chaos-tepla-je-velmi-chutný!"</strong></p>
            
            <p>Ukazuje na termodynamický rezonátor:</p>
            
            <p><strong>"Ale-pozor! Ten-krystal-není-jediný-zdroj! Jsou-tu-tři-malé-krystaly 
            schované-pod-zemí! Když-opravíš-jen-hlavní, malé-budou-stále-dělat-problémy!"</strong></p>
            
            <p>To je užitečná informace! Možná existuje dokonalejší řešení než jen 
            oprava hlavního krystalu.</p>
        `,
        choices: [
            {
                id: 'ask_about_hidden_crystals',
                text: 'Zeptat se na skryté krystaly',
                description: 'Získat kompletní informace',
                nextScene: 'ZONA2_SKRYTE_KRYSTALY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_zzzik_to_show_them',
                text: 'Požádat Zzzika, aby je ukázal',
                nextScene: 'ZONA2_ZZZIK_POMOC',
                actions: [
                    { type: 'setStoryFlag', flag: 'zzzikHelpsZone2', value: true }
                ]
            },
            {
                id: 'ignore_hidden_crystals',
                text: 'Ignorovat skryté krystaly a řešit jen hlavní',
                description: 'Jednodušší řešení',
                nextScene: 'ZONA2_TEPELNY_ZDROJ'
            }
        ]
    },

    ZONA2_ZZZIK_POMOC: {
        id: 'ZONA2_ZZZIK_POMOC',
        location: 'Zóna Termodynamického Chaosu - Zzzikova pomoc',
        text: `
            <p><strong>"Bzip bzip! Samozřejmě-pomůžu! Následuj-Zzzika!"</strong></p>
            
            <p>Skřet vás povede k třem skrytým místům, kde pod zemí objevíte 
            menší tepelné krystaly:</p>
            
            <p><strong>Krystal #1 - "Bod varu":</strong> Ovládá tlak a body varu kapalin</p>
            <p><strong>Krystal #2 - "Tepelná vodivost":</strong> Řídí přenos tepla mezi materiály</p>
            <p><strong>Krystal #3 - "Roztažnost":</strong> Kontroluje tepelnou roztažnost objektů</p>
            
            <p><em>Kwark je nadšený:</em> "Úžasné! S Zzzikovými znalostmi můžeš vyřešit 
            termodynamiku na mnohem hlubší úrovni!"</p>
            
            <p>Zzzik vysvětluje: <strong>"Když-opravíš-všechny-čtyři-krystaly-správně, 
            získáš-super-jádro! Mnohem-silnější-než-normální-jádro!"</strong></p>
            
            <p>Máte nyní možnost vyřešit celou termodynamickou anomálii komplexně, 
            místo jen jejího potlačení.</p>
        `,
        choices: [
            {
                id: 'fix_all_crystals',
                text: 'Opravit všechny čtyři krystaly',
                description: 'Kompletní řešení termodynamiky',
                nextScene: 'ZONA2_KOMPLETNI_RESENI',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'ask_about_crystal_relationships',
                text: 'Zeptat se, jak krystaly souvisí',
                nextScene: 'ZONA2_FYZIKA_VZTAHY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA2_KOMPLETNI_RESENI: {
        id: 'ZONA2_KOMPLETNI_RESENI',
        location: 'Zóna Termodynamického Chaosu - Kompletní řešení',
        text: `
            <p>S Zzzikovým vedením postupně nastavujete všechny čtyři krystaly:</p>
            
            <p><strong>Hlavní krystal (Teplota):</strong> Stabilní 20°C</p>
            <p><strong>Krystal bodu varu:</strong> Normální atmosférický tlak (1 atm)</p>
            <p><strong>Krystal tepelné vodivosti:</strong> Přirozené hodnoty vodivosti</p>
            <p><strong>Krystal roztažnosti:</strong> Standardní koeficienty roztažnosti</p>
            
            <p>Když nastavíte poslední krystal, všechny čtyři začnou resonovat 
            v harmonii. Celá zóna se zalije zlatavým světlem.</p>
            
            <p><strong>ÚŽASNÉ!</strong> Nejenže se teplota stabilizovala, ale také:</p>
            <ul>
                <li>Voda vře při správných 100°C</li>
                <li>Led taje při 0°C</li>
                <li>Materiály se rozpínají přirozeně</li>
                <li>Teplo se přenáší normální rychlostí</li>
            </ul>
            
            <p>Ze všech čtyř krystalů se uvolní energia, která se spojí v jedno 
            velmi jasné, pulzující jádro.</p>
            
            <p><strong>ZÍSKALI JSTE: Dokonalé termodynamické jádro!</strong></p>
            
            <p><strong>"Bzip bzip! Super-práce!"</strong> gratuluje Zzzik. 
            <strong>"Teď-Zzzik-musí-najít-nové-jídlo-v-optické-zóně!"</strong></p>
        `,
        choices: [
            {
                id: 'thank_zzzik_and_continue',
                text: 'Poděkovat Zzzikovi a pokračovat',
                nextScene: 'ZONA3_PRECHOD',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'addEnergeticCore' }, // Bonus za dokonalé řešení
                    { type: 'setStoryFlag', flag: 'zone2PerfectSolution', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    }
};

export const getZone2Scene = (sceneId) => {
    return zone2Scenes[sceneId];
};