export const zone4Scenes = {
    ZONA4_PRECHOD: {
        id: 'ZONA4_PRECHOD',
        location: 'Přechod do akustické zóny',
        text: `
            <p>Opouštíte nyní klidnou optickou zónu a blížíte se k další oblasti ARFZ.</p>
            
            <p>Už z dálky slyšíte podivné zvuky - jako by se kolem vás mísily všechny 
            možné zvuky najednou: hudba, zvuky přírody, lidské hlasy, i zvuky, 
            které nepoznáváte.</p>
            
            <p><em>Kwark varuje:</em> "Pozor na uši! Vstupuješ do Zóny Akustického Chaosu. 
            Zde jsou zvukové vlny zcela rozhozené. Připrav se na velmi podivné 
            akustické jevy!"</p>
            
            <p>Když se přiblížíte, cítíte v uších divný tlak a někdy i vibrace, 
            které procházejí celým tělem.</p>
        `,
        choices: [
            {
                id: 'enter_acoustic_zone',
                text: 'Vstoupit do akustické zóny',
                nextScene: 'ZONA4_UVOD'
            }
        ]
    },

    ZONA4_UVOD: {
        id: 'ZONA4_UVOD',
        location: 'Zóna Akustického Chaosu - Vstup',
        text: `
            <p>Vstupujete do zóny a okamžitě vás zaplaví kakofonie zvuků:</p>
            
            <ul>
                <li><strong>Ozvěny</strong>, které přicházejí dříve než původní zvuk</li>
                <li><strong>Flétna</strong> hrající sama od sebe ve vzduchu</li>
                <li><strong>Vaše vlastní hlasy</strong> z budoucnosti říkající věci, které ještě neřekli</li>
                <li><strong>Zvuky bez zdroje</strong> - slyšíte kroky, ale nikdo nejde</li>
                <li><strong>Tichá místa</strong> - oblasti úplného bezvětří uprostřed hluku</li>
            </ul>
            
            <p>MAZ se snaží analyzovat: <em>"Varování: Akustické senzory detekují 
            nemožné jevy. Rychlost zvuku kolísá mezi 100-800 m/s! 
            Normální hodnota: 343 m/s při 20°C!"</em></p>
            
            <p><em>Professor Kwark křičí, aby překřičel hluk:</em> "Tady je problém 
            s šířením zvukových vln! Normálně se zvuk šíří konstantní rychlostí 
            v daném prostředí, ale tady se rychlost neustále mění!"</p>
            
            <p>Všimnete si, že intenzita a podivnost zvuků se zvyšuje směrem 
            k centru zóny, kde vidíte vysokou věž pulzující různými barvami.</p>
        `,
        choices: [
            {
                id: 'investigate_self_playing_flute',
                text: 'Prozkoumat samohrající flétnu',
                description: 'Jak může hrát bez hudebníka?',
                nextScene: 'ZONA4_SAMOHRACI_FLETNA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'study_silent_zones',
                text: 'Studovat tichá místa',
                description: 'Proč je tam úplné ticho?',
                nextScene: 'ZONA4_TICHA_MISTA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'follow_sound_to_tower',
                text: 'Jít přímo k pulzující věži',
                description: 'Najít hlavní zdroj akustických anomálií',
                nextScene: 'ZONA4_AKUSTICKA_VEZ',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'test_own_voice',
                text: 'Testovat vlastní hlas',
                description: 'Experimentální přístup k akustice',
                nextScene: 'ZONA4_TEST_HLASU',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ],
        hint: 'Zvuk je vlnění vzduchu. Pozorujte, jak se mění s rychlostí a prostředím!'
    },

    ZONA4_SAMOHRACI_FLETNA: {
        id: 'ZONA4_SAMOHRACI_FLETNA',
        location: 'Zóna Akustického Chaosu - Samohrající flétna',
        text: `
            <p>Přiblížíte se k flétně, která prostě levituje ve vzduchu a hraje 
            krásnou melodii sama od sebe. Nejsou na ní vidět žádné prsty 
            ani ústa, které by do ní foukaly.</p>
            
            <p>MAZ analyzuje: <em>"Detekuji zvukové frekvence: 262 Hz (C), 294 Hz (D), 
            330 Hz (E)... Flétna generuje čisté tóny, ale bez mechanického zdroje!"</em></p>
            
            <p>Při bližším zkoumání zjišťujete, že kolem flétny jsou neviditelné 
            akustické pole, které vytváří "virtuální" prsty a "virtuální" dech.</p>
            
            <p><em>Kwark vysvětluje:</em> "Fascinující! Flétna je řízena rezonancí vzduchu. 
            Normálně hudebník ovládá výšku tónu délkou vzduchového sloupce a silou dechu. 
            Tady je vzduch sám 'naprogramován' k vytváření melodie!"</p>
            
            <p>Pozorujete různé jevy:</p>
            <ul>
                <li><strong>Vysoké tóny (1000+ Hz):</strong> Flétna svítí modře</li>
                <li><strong>Střední tóny (500 Hz):</strong> Flétna svítí zeleně</li>
                <li><strong>Nízké tóny (250 Hz):</strong> Flétna svítí červeně</li>
            </ul>
            
            <p>Vedle flétny je malý ovládací panel s nápisem: "FREKVENCE GENERATOR"</p>
        `,
        choices: [
            {
                id: 'study_frequency_generator',
                text: 'Studovat generátor frekvencí',
                description: 'Pochopit vztah mezi frekvencí a výškou tónu',
                nextScene: 'ZONA4_GENERATOR_FREKVENCI',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'try_to_play_flute',
                text: 'Pokusit se hrát na flétnu',
                description: 'Experimentální interakce',
                nextScene: 'ZONA4_HRA_NA_FLETNU',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'measure_sound_wavelengths',
                text: 'Změřit vlnové délky různých tónů',
                description: 'Vědecký přístup k akustice',
                nextScene: 'ZONA4_MERENI_VLNOVYCH_DELEK',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ZONA4_TICHA_MISTA: {
        id: 'ZONA4_TICHA_MISTA',
        location: 'Zóna Akustického Chaosu - Tichá místa',
        text: `
            <p>Vstupujete do kulovité oblasti naprostého ticha uprostřed akustického chaosu. 
            Je to neuvěřitelně zvláštní pocit - jako byste vstoupili do jiného světa.</p>
            
            <p>I když kolem vás zuří kakofonie zvuků, uvnitř této "bubliny" 
            neslyšíte absolutně nic. Ani svůj vlastní dech či tlukot srdce.</p>
            
            <p>MAZ šeptá (vy ho číst musíte na displeji): <em>"Detekuji akustickou interferenci. 
            Toto místo má 'destruktivní interferenci' - zvukové vlny se navzájem ruší!"</em></p>
            
            <p><em>Kwark vysvětluje textově na MAZ:</em> "To je úžasný příklad interferenci vln! 
            Když se setkají dva zvuky stejné frekvence, ale opačné fáze, 
            navzájem se vynulují: +1 + (-1) = 0"</p>
            
            <p>Na okraji tiché zóny najdete zařízení s nápisem: 
            <strong>"AKUSTICKÝ KOMPENZÁTOR"</strong></p>
            
            <p>Má dva reproduktory orientované proti sobě a ovládací panel:</p>
            <ul>
                <li><strong>FÁZE A:</strong> 0° (synchronní)</li>
                <li><strong>FÁZE B:</strong> 180° (opačná)</li>
                <li><strong>AMPLITUDA:</strong> Shodná</li>
                <li><strong>FREKVENCE:</strong> Shodná</li>
            </ul>
        `,
        choices: [
            {
                id: 'experiment_with_interference',
                text: 'Experimentovat s interferenci',
                description: 'Změnit nastavení a pozorovat výsledky',
                nextScene: 'ZONA4_INTERFERENCE_EXPERIMENT',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'study_wave_cancellation',
                text: 'Studovat rušení vln',
                description: 'Matematický přístup k interferenci',
                nextScene: 'ZONA4_RUSENI_VLN',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'look_for_other_silent_spots',
                text: 'Hledat další tichá místa',
                nextScene: 'ZONA4_DALSI_TICHA_MISTA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA4_AKUSTICKA_VEZ: {
        id: 'ZONA4_AKUSTICKA_VEZ',
        location: 'Zóna Akustického Chaosu - Akustická věž',
        text: `
            <p>Dostáváte se k vysoké věži, která je zřejmě epicentrem všeho akustického chaosu. 
            Věž pulzuje různými barvami a s každým pulzem vysílá mohutné zvukové vlny.</p>
            
            <p>Na věži jsou čtyři velké reproduktory orientované do všech světových stran:</p>
            <ul>
                <li><strong>Severní reproduktor:</strong> Vysílá vysoké frekvence (pískání)</li>
                <li><strong>Jižní reproduktor:</strong> Vysílá nízké frekvence (hučení)</li>
                <li><strong>Východní reproduktor:</strong> Vysílá proměnnou rychlost zvuku</li>
                <li><strong>Západní reproduktor:</strong> Vysílá ozvěny a reverb</li>
            </ul>
            
            <p>U základu věže je velký kontrolní panel: 
            <strong>"MASTER AKUSTICKÝ REZONÁTOR"</strong></p>
            
            <p>Panel má pět hlavních ovládání:</p>
            <ul>
                <li><strong>RYCHLOST ZVUKU:</strong> "CHAOS" (100-800 m/s)</li>
                <li><strong>FREKVENCE:</strong> "RANDOM" (20 Hz - 20 kHz)</li>
                <li><strong>AMPLITUDA:</strong> "MAXIMUM" (150 dB!)</li>
                <li><strong>FÁZE:</strong> "NÁHODNÁ"</li>
                <li><strong>OZVĚNA:</strong> "NEKONEČNÁ"</li>
            </ul>
            
            <p><em>Kwark křičí:</em> "Toto je zdrojem všech akustických problémů! 
            Pro stabilizaci nastav: rychlost = 343 m/s, rozumnou hlasitost, 
            kontrolovanou ozvěnu!"</p>
        `,
        choices: [
            {
                id: 'normalize_acoustics',
                text: 'Normalizovat všechna akustická nastavení',
                description: 'Stabilizovat celou akustickou zónu',
                nextScene: 'ZONA4_USPESNA_STABILIZACE',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'setStoryFlag', flag: 'zone4Solved', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'experiment_with_acoustics',
                text: 'Experimentovat s akustickými nastaveními',
                description: 'Možná najdete zajímavé efekty',
                nextScene: 'ZONA4_AKUSTICKY_EXPERIMENT',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_for_acoustic_theory',
                text: 'Požádat Kwarka o teorii akustiky',
                nextScene: 'ZONA4_KWARK_AKUSTIKA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA4_USPESNA_STABILIZACE: {
        id: 'ZONA4_USPESNA_STABILIZACE',
        location: 'Zóna Akustického Chaosu - Stabilizováno',
        text: `
            <p>Postupně nastavujete všechny akustické parametry na normální hodnoty:</p>
            
            <ul>
                <li><strong>Rychlost zvuku:</strong> 343 m/s (při 20°C ve vzduchu)</li>
                <li><strong>Frekvence:</strong> Kontrolované rozsahy</li>
                <li><strong>Amplituda:</strong> Bezpečné úrovně (< 85 dB)</li>
                <li><strong>Fáze:</strong> Synchronizovaná</li>
                <li><strong>Ozvěna:</strong> Přirozená doba dozněku</li>
            </ul>
            
            <p><strong>BOOM! ... boom ... boom ... (dozněk)</strong></p>
            
            <p>Věž přestane chaoticky pulzovat a začne vydávat klidný, harmonický tón. 
            Všechny akustické anomálie se postupně uklidňují:</p>
            
            <ul>
                <li>Flétna přestane hrát sama a spadne na zem</li>
                <li>Ozvěny přicházejí ve správný čas</li>
                <li>Tichá místa se rozpustí</li>
                <li>Zvuky mají své normální zdroje</li>
            </ul>
            
            <p><em>Kwark jásá:</em> "Perfektní! Pochopil jsi základní principy akustiky - 
            zvuk je vlnění vzduchu s frekvencí f a rychlostí v. 
            Vlnová délka λ = v/f!"</p>
            
            <p>Ze stabilizované věže se uvolní energetické jádro, 
            které hučí příjemným basovým tónem.</p>
            
            <p><strong>ZÍSKALI JSTE: Akustické jádro!</strong></p>
            
            <p>"Výborně! Už máš čtyři ze pěti potřebných jader. 
            Zbývá jen mechanická zóna s jednoduchými stroji!"</p>
        `,
        choices: [
            {
                id: 'continue_to_mechanics',
                text: 'Pokračovat do mechanické zóny',
                nextScene: 'ZONA5_PRECHOD'
            },
            {
                id: 'explore_quiet_acoustics',
                text: 'Prozkoumat uklidněnou akustickou zónu',
                description: 'Možná jsou tu zajímavé akustické nástroje',
                nextScene: 'ZONA4_PO_STABILIZACI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA4_PO_STABILIZACI: {
        id: 'ZONA4_PO_STABILIZACI',
        location: 'Zóna Akustického Chaosu - Po stabilizaci',
        text: `
            <p>Po stabilizaci akustické zóny objevujete krásnou "koncertní síň" 
            s perfektní akustikou:</p>
            
            <p><strong>Akustická laboratoř:</strong></p>
            <ul>
                <li><strong>Ladičky:</strong> Přesné frekvence: 440 Hz (A), 523 Hz (C), atd.</li>
                <li><strong>Sonometr:</strong> Měří hlasitost v decibelech</li>
                <li><strong>Osciloskop:</strong> Zobrazuje zvukové vlny</li>
                <li><strong>Echo komora:</strong> Kontrolovaná ozvěna</li>
            </ul>
            
            <p><strong>Akustické experimenty:</strong></p>
            <p>Můžete testovat:</p>
            <ul>
                <li><strong>Rezonanci:</strong> Jak objekty vibrují na specifických frekvencích</li>
                <li><strong>Dopplerov jev:</strong> Změna frekvence při pohybu zdroje</li>
                <li><strong>Interferenci:</strong> Konstruktivní a destruktivní</li>
                <li><strong>Odraz zvuku:</strong> Echo a jeho časování</li>
            </ul>
            
            <p><em>Kwark je nadšený:</em> "Teď máš přístup k nástrojům pro studium 
            skutečné akustiky! To jsou základy pro pochopení hudby i technické akustiky."</p>
        `,
        choices: [
            {
                id: 'do_acoustic_experiments',
                text: 'Provést akustické experimenty',
                nextScene: 'ZONA4_AKUSTICKE_EXPERIMENTY',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'ready_for_mechanics',
                text: 'Připraven na mechanickou zónu',
                nextScene: 'ZONA5_PRECHOD'
            }
        ]
    },

    ZONA4_AKUSTICKE_EXPERIMENTY: {
        id: 'ZONA4_AKUSTICKE_EXPERIMENTY',
        location: 'Zóna Akustického Chaosu - Akustické experimenty',
        text: `
            <p>Provádíte řadu fascinujících akustických experimentů:</p>
            
            <p><strong>Experiment 1 - Měření rychlosti zvuku:</strong></p>
            <p>Pomocí echo komory měříte dobu, za kterou se zvuk vrátí: 
            vzdálenost 171.5 m, doba 1 sekunda → rychlost = 343 m/s</p>
            
            <p><strong>Experiment 2 - Frekvence a výška tónu:</strong></p>
            <p>Ladička 440 Hz zní jako "A", 880 Hz zní o oktávu výš. 
            Vyšší frekvence = vyšší tón.</p>
            
            <p><strong>Experiment 3 - Hlasitost a amplituda:</strong></p>
            <p>Stejný tón: slabě = 40 dB, normálně = 70 dB, hlasitě = 100 dB. 
            Větší amplituda = větší hlasitost.</p>
            
            <p><strong>Experiment 4 - Interference:</strong></p>
            <p>Dva stejné tóny ve fázi = 2x hlasitější. 
            Dva stejné tóny v protifázi = ticho.</p>
            
            <p><em>Kwark gratuluje:</em> "Skvělé! Experimentálně jsi ověřil základní 
            vztahy akustiky: v = f × λ, interference, a závislost vnímání na fyzikálních vlastnostech!"</p>
        `,
        choices: [
            {
                id: 'continue_to_final_zone',
                text: 'Pokračovat do poslední zóny',
                nextScene: 'ZONA5_PRECHOD',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    }
};

export const getZone4Scene = (sceneId) => {
    return zone4Scenes[sceneId];
};