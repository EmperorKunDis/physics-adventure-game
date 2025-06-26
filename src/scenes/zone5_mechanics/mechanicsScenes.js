export const zone5Scenes = {
    ZONA5_PRECHOD: {
        id: 'ZONA5_PRECHOD',
        location: 'Přechod do mechanické zóny',
        text: `
            <p>Opouštíte nyní tichou akustickou zónu a blížíte se k poslední oblasti ARFZ.</p>
            
            <p>Už z dálky vidíte divné mechanické konstrukce - obrovské páky hýbající 
            se samy od sebe, kladky zvedající neviditelné břemena, a nakloněné roviny, 
            po kterých objekty jezdí nahoru místo dolů.</p>
            
            <p><em>Kwark je nadšený:</em> "To je ono! Poslední zóna - Mechanická říše! 
            Zde najdeš všechno o pohybu, silách a jednoduchých strojích. 
            Když ji vyřešíš, budeme mít všechna jádra pro návrat domů!"</p>
            
            <p>V dálce vidíte obrovskou továrnu s komíny, ze kterých nevychází kouř, 
            ale barevné světlo.</p>
        `,
        choices: [
            {
                id: 'enter_mechanics_zone',
                text: 'Vstoupit do mechanické zóny',
                nextScene: 'ZONA5_UVOD'
            }
        ]
    },

    ZONA5_UVOD: {
        id: 'ZONA5_UVOD',
        location: 'Mechanická Říše - Vstup',
        text: `
            <p>Vstupujete do fascinujícího světa mechaniky, kde všude kolem vás 
            pracují podivné stroje:</p>
            
            <ul>
                <li><strong>Páky</strong> zdvihající objekty tisíckrát těžší než síla, kterou na ně působí</li>
                <li><strong>Kladky</strong> měnící směr sil v nemožných úhlech</li>
                <li><strong>Nakloněné roviny</strong> po kterých těžké objekty jezdí samy nahoru</li>
                <li><strong>Kola a osy</strong> točící se různými rychlostmi současně</li>
                <li><strong>Šrouby</strong> zatáčející se do vzduchu</li>
            </ul>
            
            <p>MAZ detekuje: <em>"Porušení zákonů mechaniky! Síly působí v nesprávných 
            poměrech. Mechanická výhoda někdy dosahuje hodnot přes 1000:1!"</em></p>
            
            <p><em>Professor Kwark vysvětluje:</em> "Jednoduché stroje normálně umožňují 
            snazší práci, ale nezískáváš energii zdarma - zákon zachování energie! 
            Ale tady je mechanická výhoda extrémně zkreslená!"</p>
            
            <p>V centru zóny vidíte obrovskou továrnu s nápisem: 
            <strong>"MECHANICKÝ MASTER STROJ"</strong></p>
            
            <p>Kolem továrny jsou čtyři zkušební oblasti s různými typy strojů.</p>
        `,
        choices: [
            {
                id: 'investigate_levers',
                text: 'Prozkoumat oblast pák',
                description: 'Studovat principy páky a momentu síly',
                nextScene: 'ZONA5_PAKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'study_pulleys',
                text: 'Studovat systémy kladek',
                description: 'Pochopit změnu směru a velikosti síly',
                nextScene: 'ZONA5_KLADKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'examine_inclined_planes',
                text: 'Zkoumat nakloněné roviny',
                description: 'Pochopit rozklad sil',
                nextScene: 'ZONA5_NAKLONENE_ROVINY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'go_directly_to_factory',
                text: 'Jít přímo k mechanické továrně',
                description: 'Najít hlavní zdroj mechanických anomálií',
                nextScene: 'ZONA5_MECHANICKA_TOVARNA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ],
        hint: 'Jednoduché stroje mění sílu, ale nezískávají energii zdarma. Práce = síla × dráha!'
    },

    ZONA5_PAKY: {
        id: 'ZONA5_PAKY',
        location: 'Mechanická Říše - Oblast pák',
        text: `
            <p>Dostáváte se k obrovským pákami, které pracují s neuvěřitelnými poměry sil.</p>
            
            <p><strong>Pozorování páky #1:</strong></p>
            <ul>
                <li>Levá strana: Malé jablko (1 N) na vzdálenosti 10 m od otočného bodu</li>
                <li>Pravá strana: Obrovský balvan (1000 N) na vzdálenosti 1 cm od otočného bodu</li>
                <li>Výsledek: Jablko zvedá balvan!</li>
            </ul>
            
            <p>MAZ počítá: <em>"Moment síly: M = F × d. 
            Levá strana: M₁ = 1 N × 10 m = 10 Nm
            Pravá strana: M₂ = 1000 N × 0.01 m = 10 Nm
            Systém je v rovnováze!"</em></p>
            
            <p><em>Kwark vysvětluje:</em> "To je Archimédův princip páky! 
            'Dejte mi dostatečně dlouhou páku a pevný bod, a pohnu Zemí!' 
            Páka umožňuje malou silou na dlouhém rameni zvednout velké břemeno na krátkém rameni."</p>
            
            <p><strong>Ale pak vidíte páku #2, která je naprosto šílená:</strong></p>
            <p>Hračka (0.1 N) zvedá auto (10,000 N) s poměrem ramen jen 2:1!</p>
            
            <p>To porušuje fyzikální zákony - mechanická výhoda by měla být maximálně 2:1, 
            ne 100,000:1!</p>
        `,
        choices: [
            {
                id: 'investigate_impossible_lever',
                text: 'Prozkoumat nemožnou páku',
                description: 'Jak může mít tak extrémní mechanickou výhodu?',
                nextScene: 'ZONA5_NEMOZNA_PAKA',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'calculate_lever_ratios',
                text: 'Spočítat všechny poměry pák',
                description: 'Matematický přístup k mechanice',
                nextScene: 'ZONA5_VYPOCTY_PAK',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'test_own_lever',
                text: 'Vyzkoušet si práci s pákou',
                description: 'Experimentální přístup',
                nextScene: 'ZONA5_EXPERIMENT_PAKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA5_NEMOZNA_PAKA: {
        id: 'ZONA5_NEMOZNA_PAKA',
        location: 'Mechanická Říše - Nemožná páka',
        text: `
            <p>Při bližším zkoumání "nemožné" páky objevujete skrytý mechanismus!</p>
            
            <p>Pod pákou je ukrytý systém kladek a dalších pák, které násobí sílu 
            v několika stupních:</p>
            
            <ul>
                <li><strong>Stupeň 1:</strong> Malá páka s poměrem 10:1</li>
                <li><strong>Stupeň 2:</strong> Kladka měnící směr síly</li>
                <li><strong>Stupeň 3:</strong> Další páka s poměrem 20:1</li>
                <li><strong>Stupeň 4:</strong> Systém převodů s poměrem 500:1</li>
            </ul>
            
            <p>MAZ počítá: <em>"Celková mechanická výhoda = 10 × 1 × 20 × 500 = 100,000:1. 
            Ale vzdálenost, kterou musí hračka urazit = 100,000x větší než vzdálenost, 
            kterou urazí auto!"</em></p>
            
            <p><em>Kwark je nadšený:</em> "Aha! Zákon zachování energie je zachován! 
            Práce = síla × dráha. Malá síla krát velká dráha = velká síla krát malá dráha!"</p>
            
            <p>Na hlavním řídícím panelu této složené páky je nápis: 
            <strong>"KOMBINOVANÉ JEDNODUCHÉ STROJE - regulátor síly"</strong></p>
            
            <p>Panel má nastavení: <strong>"MECHANICKÁ VÝHODA: CHAOS (1:1 až 1,000,000:1)"</strong></p>
        `,
        choices: [
            {
                id: 'adjust_mechanical_advantage',
                text: 'Upravit mechanickou výhodu na reálné hodnoty',
                description: 'Stabilizovat páky podle fyzikálních zákonů',
                nextScene: 'ZONA5_STABILIZACE_PAK',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'study_compound_machines',
                text: 'Studovat složené stroje',
                description: 'Pochopit kombinace jednoduchých strojů',
                nextScene: 'ZONA5_SLOZENE_STROJE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ZONA5_KLADKY: {
        id: 'ZONA5_KLADKY',
        location: 'Mechanická Říše - Systémy kladek',
        text: `
            <p>V oblasti kladek vidíte neuvěřitelné konstrukce - systémy desítek kladek 
            zvedající obrovské břemena pomocí nepatrné síly.</p>
            
            <p><strong>Systém kladek #1 - Pevná kladka:</strong></p>
            <p>Pouze mění směr síly. Potřebná síla = hmotnost břemene. 
            Mechanická výhoda = 1:1</p>
            
            <p><strong>Systém kladek #2 - Pohyblivá kladka:</strong></p>
            <p>Síla se rozdělí na dva lana. Potřebná síla = polovina hmotnosti. 
            Mechanická výhoda = 2:1</p>
            
            <p><strong>Systém kladek #3 - Kombinovaný systém:</strong></p>
            <p>8 kladek v sérii. Břemeno 800 N zvedá síla jen 100 N. 
            Mechanická výhoda = 8:1</p>
            
            <p><strong>Ale pak vidíte systém #4 - CHAOS:</strong></p>
            <p>Zdá se, že břemeno 10,000 N zvedá síla 1 N pomocí jen 3 kladek!</p>
            
            <p>MAZ analyzuje: <em>"Nemožné! S 3 kladkami maximální mechanická výhoda = 4:1, 
            ne 10,000:1!"</em></p>
            
            <p><em>Kwark pozoruje:</em> "Tady je něco v nepořádku. Kladky mění směr a sílu, 
            ale nemohou vytvářet energii z ničeho!"</p>
        `,
        choices: [
            {
                id: 'investigate_impossible_pulleys',
                text: 'Prozkoumat nemožný systém kladek',
                description: 'Najít skrytý mechanismus',
                nextScene: 'ZONA5_NEMOZNE_KLADKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'count_rope_segments',
                text: 'Spočítat segmenty lana',
                description: 'Vědecký přístup k mechanické výhodě',
                nextScene: 'ZONA5_POCITANI_LAN',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'test_pulley_system',
                text: 'Vyzkoušet práci se systémem kladek',
                nextScene: 'ZONA5_TEST_KLADEK',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA5_MECHANICKA_TOVARNA: {
        id: 'ZONA5_MECHANICKA_TOVARNA',
        location: 'Mechanická Říše - Mechanická továrna',
        text: `
            <p>Dostáváte se k obrovské továrně, která je srdcem všech mechanických anomálií. 
            Budova je plná neuvěřitelných strojů a zařízení.</p>
            
            <p>Na hlavní bráně továrny je velký nápis: 
            <strong>"MECHANICKÝ MASTER REZONÁTOR - Generátor síly a pohybu"</strong></p>
            
            <p>Uvnitř vidíte obrovský stroj s pěti hlavními sekcemi:</p>
            <ul>
                <li><strong>Sekce pák:</strong> Generuje nesprávné momenty síly</li>
                <li><strong>Sekce kladek:</strong> Vytváří chaotické mechanické výhody</li>
                <li><strong>Sekce nakloněných rovin:</strong> Mění úhly a tření</li>
                <li><strong>Sekce kol a os:</strong> Nesprávné převodové poměry</li>
                <li><strong>Sekce šroubů:</strong> Chaos při převodu rotace na posun</li>
            </ul>
            
            <p>Ve středu továrny je obrovský kontrolní panel s nápisem: 
            <strong>"MASTER CONTROL - MECHANICKÉ ZÁKONY"</strong></p>
            
            <p>Panel má šest hlavních ovládání:</p>
            <ul>
                <li><strong>ZACHOVÁNÍ ENERGIE:</strong> "VYPNUTO" (energie se tvoří!)</li>
                <li><strong>MECHANICKÁ VÝHODA:</strong> "CHAOS" (1:1 až ∞:1)</li>
                <li><strong>TŘECÍ SÍLY:</strong> "PROMĚNNÉ" (0 až 1000 N)</li>
                <li><strong>MOMENT SÍLY:</strong> "NÁHODNÝ"</li>
                <li><strong>PŘEVODOVÉ POMĚRY:</strong> "NEMOŽNÉ"</li>
                <li><strong>RYCHLOSTI:</strong> "NEKONZISTENTNÍ"</li>
            </ul>
        `,
        choices: [
            {
                id: 'restore_physics_laws',
                text: 'Obnovit fyzikální zákony mechaniky',
                description: 'Kompletní stabilizace mechanické zóny',
                nextScene: 'ZONA5_USPESNA_STABILIZACE',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'setStoryFlag', flag: 'zone5Solved', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'analyze_each_section',
                text: 'Analyzovat každou sekci zvlášť',
                description: 'Systematický přístup',
                nextScene: 'ZONA5_ANALYZA_SEKCI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_kwark_about_mechanics',
                text: 'Požádat Kwarka o výklad mechaniky',
                nextScene: 'ZONA5_KWARK_MECHANIKA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA5_USPESNA_STABILIZACE: {
        id: 'ZONA5_USPESNA_STABILIZACE',
        location: 'Mechanická Říše - Stabilizováno',
        text: `
            <p>Postupně obnovujete všechny fyzikální zákony mechaniky:</p>
            
            <ul>
                <li><strong>Zachování energie:</strong> ZAPNUTO (práce vstup = práce výstup)</li>
                <li><strong>Mechanická výhoda:</strong> Podle skutečných poměrů strojů</li>
                <li><strong>Třecí síly:</strong> Reálné hodnoty podle materiálů</li>
                <li><strong>Moment síly:</strong> M = F × d</li>
                <li><strong>Převodové poměry:</strong> Podle geometrie</li>
                <li><strong>Rychlosti:</strong> Konzistentní vztahy</li>
            </ul>
            
            <p><strong>KLIK! ŠRRR! TIKOT!</strong></p>
            
            <p>Továrna přestane chaoticky fungovat a začne pracovat rytmicky a harmonicky. 
            Všechny mechanické anomálie se upraví:</p>
            
            <ul>
                <li>Páky pracují podle momentů síly</li>
                <li>Kladky poskytují reálnou mechanickou výhodu</li>
                <li>Nakloněné roviny fungují podle rozkladu sil</li>
                <li>Zachování energie je obnoveno</li>
            </ul>
            
            <p><em>Kwark jásá:</em> "Dokonalé! Pochopil jsi základní principy mechaniky - 
            jednoduché stroje usnadňují práci, ale nezískávají energii zdarma! 
            Práce = F × s, a vždy platí zákon zachování energie!"</p>
            
            <p>Ze středu továrny se uvolní poslední energetické jádro - 
            mechanické jádro s ozubenými koly a kladkami uvnitř.</p>
            
            <p><strong>ZÍSKALI JSTE: Mechanické jádro!</strong></p>
            
            <p><strong>"HURÁ!"</strong> křičí Kwark. <strong>"Máš všech pět jader! 
            Gravitační, termodynamické, optické, akustické a mechanické! 
            Teď můžeme stabilizovat hlavní portál a vrátit se domů!"</strong></p>
        `,
        choices: [
            {
                id: 'return_to_main_portal',
                text: 'Vrátit se k hlavnímu portálu',
                description: 'Čas jít domů!',
                nextScene: 'FINAL_PORTAL_ACTIVATION',
                actions: [
                    { type: 'setStoryFlag', flag: 'allZonesCompleted', value: true }
                ]
            },
            {
                id: 'explore_perfected_mechanics',
                text: 'Prozkoumat dokonalou mechanickou zónu',
                nextScene: 'ZONA5_PO_STABILIZACI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA5_PO_STABILIZACI: {
        id: 'ZONA5_PO_STABILIZACI',
        location: 'Mechanická Říše - Po stabilizaci',
        text: `
            <p>Po stabilizaci mechanické zóny se továrna změnila v nádherný 
            "Muzeum jednoduchých strojů":</p>
            
            <p><strong>Interaktivní exponáty:</strong></p>
            <ul>
                <li><strong>Páky všech tříd:</strong> 1. třída (nůžky), 2. třída (otvírák), 3. třída (pinzeta)</li>
                <li><strong>Systémy kladek:</strong> Od jednoduché po složené</li>
                <li><strong>Nakloněné roviny:</strong> Různé úhly a povrchy</li>
                <li><strong>Šrouby:</strong> Převod rotačního pohybu na posuvný</li>
                <li><strong>Klíny:</strong> Koncentrace síly na malou plochu</li>
                <li><strong>Kola a osy:</strong> Převodové systémy</li>
            </ul>
            
            <p><strong>Praktické aplikace:</strong></p>
            <p>Vidíte, jak se jednoduché stroje používají v každodenním životě:</p>
            <ul>
                <li>Páčidlo = páka 1. třídy</li>
                <li>Kolečko = kolo a osa</li>
                <li>Šroubovák = šroub</li>
                <li>Nůž = klín</li>
            </ul>
            
            <p><em>Kwark shrnuje:</em> "Teď rozumíš mechanice! Jednoduché stroje jsou 
            základem všech složitějších strojů. Od kola po kosmickou raketu - 
            všechno je postaveno na těchto základních principech!"</p>
        `,
        choices: [
            {
                id: 'final_return_home',
                text: 'Konečně se vrátit domů',
                nextScene: 'FINAL_PORTAL_ACTIVATION',
                actions: [
                    { type: 'increaseUnderstanding' },
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    }
};

export const getZone5Scene = (sceneId) => {
    return zone5Scenes[sceneId];
};