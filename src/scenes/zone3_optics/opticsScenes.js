export const zone3Scenes = {
    ZONA3_PRECHOD: {
        id: 'ZONA3_PRECHOD',
        location: 'Přechod do optické zóny',
        text: `
            <p>Opouštíte stabilizovanou termodynamickou zónu a blížíte se k další oblasti ARFZ.</p>
            
            <p>Už z dálky vidíte něco neobyčejného - krajina před vámi se třpytí 
            a mění jako obrovský kaleidoskop. Světlo se láme v podivných úhlech, 
            objekty se zdají být na místech, kde ve skutečnosti nejsou.</p>
            
            <p><em>Kwark varuje:</em> "Pozor! Vstupuješ do Zóny Světelných Iluzí. 
            Zde jsou zákony optiky silně narušeny. Nedůvěřuj svým očím - 
            používej MAZ k měření!"</p>
            
            <p>Při vstupu do zóny cítíte divnou změnu - barvy se zdají intenzivnější, 
            stíny mají nesprávné tvary a světlo přichází ze směrů, kde není žádný zdroj.</p>
        `,
        choices: [
            {
                id: 'enter_optics_zone',
                text: 'Vstoupit do optické zóny',
                nextScene: 'ZONA3_UVOD'
            }
        ]
    },

    ZONA3_UVOD: {
        id: 'ZONA3_UVOD',
        location: 'Zóna Světelných Iluzí - Vstup',
        text: `
            <p>Vstupujete do zóny a okamžitě vás ohromí optické jevy:</p>
            
            <ul>
                <li><strong>Duhy</strong> bez deště - vznikají prostě ve vzduchu</li>
                <li><strong>Zrcadlové odrazy</strong> na površích, které nejsou zrcadla</li>
                <li><strong>Stíny</strong>, které ukazují jiným směrem než jejich objekty</li>
                <li><strong>Světelné paprsky</strong> viditelné v čistém vzduchu</li>
                <li><strong>Objekty</strong>, které vypadají blíž nebo dál, než skutečně jsou</li>
            </ul>
            
            <p>MAZ se snaží měřit, ale jeho senzory jsou zmatené: 
            <em>"Varování: Optické senzory detekují rozporuplné data. 
            Světlo se nechová podle Snellova zákona!"</em></p>
            
            <p><em>Professor Kwark komentuje:</em> "Tady je problém s lomem a odrazem světla. 
            Normálně světlo cestuje rovně a láme se podle předvídatelných pravidel. 
            Ale v této zóně jsou optické vlastnosti prostředí zcela chaos!"</p>
            
            <p>Před vámi vidíte několik zajímavých optických jevů k prozkoumání.</p>
        `,
        choices: [
            {
                id: 'investigate_floating_rainbow',
                text: 'Prozkoumat vznášející se duhu',
                description: 'Jak vzniká duha bez deště?',
                nextScene: 'ZONA3_DUHA_BEZ_DESTE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'study_wrong_shadows',
                text: 'Studovat nesprávné stíny',
                description: 'Proč stíny neukazují správným směrem?',
                nextScene: 'ZONA3_SPATNE_STINY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'examine_visible_light_rays',
                text: 'Zkoumat viditelné světelné paprsky',
                description: 'Světlo by nemělo být vidět v čistém vzduchu',
                nextScene: 'ZONA3_VIDITELNE_PAPRSKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'test_distance_illusions',
                text: 'Testovat iluze vzdálenosti',
                description: 'Vědecké měření vs. vnímání',
                nextScene: 'ZONA3_ILUZE_VZDALENOSTI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ],
        hint: 'Světlo se šíří rovně, dokud nenarazí na překážku. Pozorujte, kde a jak se láme!'
    },

    ZONA3_DUHA_BEZ_DESTE: {
        id: 'ZONA3_DUHA_BEZ_DESTE',
        location: 'Zóna Světelných Iluzí - Duha bez deště',
        text: `
            <p>Přiblížíte se k nádherné duze, která se prostě vznáší ve vzduchu 
            bez jakýchkoliv kapek vody. Barvy jsou jasné a živé: 
            červená, oranžová, žlutá, zelená, modrá, indigo, fialová.</p>
            
            <p>MAZ analyzuje: <em>"Detekována spektrální dekompozice bílého světla. 
            Avšak médium pro rozptyl není voda, ale... vzduch s proměnným indexem lomu!"</em></p>
            
            <p><em>Kwark vysvětluje nadšeně:</em> "Úžasné! Duha normálně vzniká, když bílé světlo 
            prochází kapkami vody a rozptyluje se na jednotlivé barvy. Ale tady se 
            index lomu vzduchu mění v prostoru - jako by byl vzduch složený z neviditelných 'čoček'!"</p>
            
            <p>Když kolem duhy opatrně chodíte, pozorujete, jak se barvy mění podle úhlu pohledu:</p>
            <ul>
                <li><strong>Ze severní strany:</strong> Duha je normální (červená venku)</li>
                <li><strong>Z jižní strany:</strong> Duha je obrácená (fialová venku)</li>
                <li><strong>Ze východu:</strong> Duha má jen 3 barvy</li>
                <li><strong>Ze západu:</strong> Duha má 12 barev</li>
            </ul>
            
            <p>V centru duhy si všímnete malého, rotujícího krystalu...</p>
        `,
        choices: [
            {
                id: 'investigate_prism_crystal',
                text: 'Prozkoumat krystal v centru duhy',
                description: 'Možná je to zdroj spektrálního rozptylu',
                nextScene: 'ZONA3_HRANOL_KRYSTAL',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'measure_light_angles',
                text: 'Změřit úhly světelných paprsků',
                description: 'Vědecký přístup k optice',
                nextScene: 'ZONA3_MERENI_UHLU',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'try_to_walk_through',
                text: 'Pokusit se projít duhou',
                description: 'Experimentální přístup',
                nextScene: 'ZONA3_PRUCHOD_DUHOU'
            }
        ]
    },

    ZONA3_HRANOL_KRYSTAL: {
        id: 'ZONA3_HRANOL_KRYSTAL',
        location: 'Zóna Světelných Iluzí - Spektrální krystal',
        text: `
            <p>V centru duhy najdete malý, dokonale čirý krystal ve tvaru hranolu. 
            Rotuje kolem své osy a s každou otočkou vysílá světelné paprsky, 
            které se lámou a vytváří duhu.</p>
            
            <p>Na krystalu je malý ovládací panel s nápisem: <strong>"SPEKTRÁLNÍ ROZKLAD"</strong></p>
            
            <p>Ovládání má tři parametry:</p>
            <ul>
                <li><strong>RYCHLOST ROTACE:</strong> Aktuálně "VYSOKÁ" (1000 otáček/min)</li>
                <li><strong>INDEX LOMU:</strong> Aktuálně "PROMĚNNÝ" (1.1 - 2.8)</li>
                <li><strong>ÚHEL HRANOLU:</strong> Aktuálně "CHAOS" (měnící se)</li>
            </ul>
            
            <p><em>Kwark analyzuje:</em> "To je optický rezonátor! Funguje jako obrovský hranol, 
            který rozčleňuje světlo na spektrum. Rychlá rotace a proměnný index lomu 
            způsobují optický chaos!"</p>
            
            <p>MAZ počítá: <em>"Pro normální chování světla: konstantní index lomu ≈ 1.0 (vzduch), 
            nulová rotace, standardní úhel 60°."</em></p>
            
            <p>Můžete buď stabilizovat krystal, nebo jej úplně deaktivovat.</p>
        `,
        choices: [
            {
                id: 'stabilize_prism',
                text: 'Stabilizovat hranol na normální hodnoty',
                description: 'Zachovat duhu, ale učinit ji stabilní',
                nextScene: 'ZONA3_STABILNI_DUHA',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'deactivate_prism',
                text: 'Deaktivovat hranol úplně',
                description: 'Odstranit optické anomálie',
                nextScene: 'ZONA3_BEZ_DUHY',
                actions: [
                    { type: 'setStoryFlag', flag: 'prismDeactivated', value: true }
                ]
            },
            {
                id: 'experiment_with_settings',
                text: 'Experimentovat s nastaveními',
                description: 'Možná objevíte něco zajímavého',
                nextScene: 'ZONA3_OPTICKY_EXPERIMENT',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA3_SPATNE_STINY: {
        id: 'ZONA3_SPATNE_STINY',
        location: 'Zóna Světelných Iluzí - Nesprávné stíny',
        text: `
            <p>Studujete podivný jev - stromy, kameny a jiné objekty vrhají stíny, 
            které neukazují správným směrem vzhledem ke zdroji světla.</p>
            
            <p><strong>Pozorování:</strong></p>
            <ul>
                <li>Slunce svítí z východu, ale stíny ukazují na sever</li>
                <li>Někteří objekty mají více stínů najednou</li>
                <li>Jiné objekty nemají stín vůbec</li>
                <li>Stíny jsou někdy barevné místo černé</li>
            </ul>
            
            <p>MAZ měří: <em>"Anomální rozptyl světla. Objekty neblokují světlo normálně. 
            Detekován jev 'světelného ohybu' kolem překážek větších než vlnová délka!"</em></p>
            
            <p><em>Kwark vysvětluje:</em> "Normálně vytváří objekty stíny, protože blokují světlo, 
            které se šíří rovně. Ale tady se světlo ohýbá kolem objektů jako voda!"</p>
            
            <p>Při bližším zkoumání najdete u základu každého "problematického" objektu 
            malé světelné generátory, které zřejmě mění způsob, jak světlo interaguje s objekty.</p>
            
            <p>Na jednom generátoru čtete štítek: <em>"Experiment optické difrakce - E. Novakova"</em></p>
        `,
        choices: [
            {
                id: 'study_light_generators',
                text: 'Studovat světelné generátory',
                description: 'Pochopit princip optické difrakce',
                nextScene: 'ZONA3_SVETELNE_GENERATORY',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'look_for_novakova_notes',
                text: 'Hledat další poznámky Dr. Novakové',
                nextScene: 'ZONA3_NOVAKOVA_POZNAMKY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'test_shadow_behavior',
                text: 'Testovat chování stínů s vlastními předměty',
                description: 'Experimentální přístup',
                nextScene: 'ZONA3_TEST_STINU',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA3_VIDITELNE_PAPRSKY: {
        id: 'ZONA3_VIDITELNE_PAPRSKY',
        location: 'Zóna Světelných Iluzí - Viditelné světelné paprsky',
        text: `
            <p>Pozorujete fascinující jev - světelné paprsky jsou viditelné v čistém vzduchu, 
            jako by létaly barevné čáry prostorem.</p>
            
            <p>Paprsky mají různé barvy:</p>
            <ul>
                <li><strong>Červené paprsky:</strong> Pohybují se pomalu</li>
                <li><strong>Modré paprsky:</strong> Pohybují se rychle</li>
                <li><strong>Zelené paprsky:</strong> Pohybují se klikatě</li>
                <li><strong>Bílé paprsky:</strong> Mění směr náhodně</li>
            </ul>
            
            <p>MAZ detekuje: <em>"Světelné paprsky mají různé rychlosti! 
            Červené: 200,000,000 m/s, Modré: 400,000,000 m/s. 
            To porušuje konstantu rychlosti světla!"</em></p>
            
            <p><em>Kwark je šokován:</em> "To je nemožné! Rychlost světla ve vakuu 
            je univerzální konstanta: c = 299,792,458 m/s! Ale tady má každá barva 
            jinou rychlost!"</p>
            
            <p>Sledujete jeden červený paprsek a vidíte, že vede k velkému, 
            trojúhelníkovitému krystalu, který stojí na vyvýšeném místě.</p>
            
            <p>Z krystalu vycházejí paprsky všech barev různými směry, 
            jako by byl nějakým druhem optického rozdělovače.</p>
        `,
        choices: [
            {
                id: 'follow_red_ray',
                text: 'Následovat červený paprsek ke krystalu',
                description: 'Najít zdroj optických anomálií',
                nextScene: 'ZONA3_OPTICKY_REZONATOR',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'measure_light_speeds',
                text: 'Změřit rychlosti různých barev světla',
                description: 'Vědecké pozorování',
                nextScene: 'ZONA3_MERENI_RYCHLOSTI',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'try_to_catch_light_ray',
                text: 'Pokusit se zachytit světelný paprsek',
                description: 'Experimentální přístup',
                nextScene: 'ZONA3_ZACHYTAVANI_SVETLA'
            }
        ]
    },

    ZONA3_OPTICKY_REZONATOR: {
        id: 'ZONA3_OPTICKY_REZONATOR',
        location: 'Zóna Světelných Iluzí - Optický rezonátor',
        text: `
            <p>Dostáváte se k velkému trojúhelníkovému krystalu, který je zřejmě 
            hlavním zdrojem všech optických anomálií v této zóně.</p>
            
            <p>Krystal má čtyři strany, z každé vychází jiný typ světla:</p>
            <ul>
                <li><strong>Severní strana:</strong> Spektrální rozklad (duhy)</li>
                <li><strong>Jižní strana:</strong> Difrakční světlo (ohyb kolem objektů)</li>
                <li><strong>Východní strana:</strong> Reflexní světlo (zrcadlové odrazy)</li>
                <li><strong>Západní strana:</strong> Refrakční světlo (lom světla)</li>
            </ul>
            
            <p>Na vrcholu krystalu je kontrolní panel s názvem: 
            <strong>"OPTICKÝ MASTER REZONÁTOR"</strong></p>
            
            <p>Panel má čtyři hlavní ovládání:</p>
            <ul>
                <li><strong>RYCHLOST SVĚTLA:</strong> "VARIABILNÍ" (150M-450M m/s)</li>
                <li><strong>INDEX LOMU:</strong> "CHAOS" (0.5-3.0)</li>
                <li><strong>ODRAZIVOST:</strong> "MAXIMUM" (200%)</li>
                <li><strong>DIFRAKCE:</strong> "SUPER-ENHANCED" (1000x normál)</li>
            </ul>
            
            <p><em>Kwark analyzuje:</em> "Toto je zdroj všech optických problémů! 
            Pro stabilizaci potřebuješ nastavit: rychlost světla = konstanta c, 
            index lomu vzduchu = 1.0, normální odrazivost, minimální difrakci."</p>
        `,
        choices: [
            {
                id: 'normalize_all_optics',
                text: 'Normalizovat všechna optická nastavení',
                description: 'Stabilizovat celou optickou zónu',
                nextScene: 'ZONA3_USPESNA_STABILIZACE',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'setStoryFlag', flag: 'zone3Solved', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'adjust_gradually',
                text: 'Upravovat nastavení postupně',
                description: 'Opatrný přístup',
                nextScene: 'ZONA3_POSTUPNE_UPRAVY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_kwark_for_guidance',
                text: 'Požádat Kwarka o podrobné vedení',
                nextScene: 'ZONA3_KWARK_OPTIKA_RADA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA3_USPESNA_STABILIZACE: {
        id: 'ZONA3_USPESNA_STABILIZACE',
        location: 'Zóna Světelných Iluzí - Stabilizováno',
        text: `
            <p>Postupně nastavujete všechny optické parametry na normální hodnoty:</p>
            
            <ul>
                <li><strong>Rychlost světla:</strong> 299,792,458 m/s (konstanta c)</li>
                <li><strong>Index lomu vzduchu:</strong> 1.0</li>
                <li><strong>Odrazivost:</strong> Normální hodnoty pro různé materiály</li>
                <li><strong>Difrakce:</strong> Minimální (pouze pro velmi malé objekty)</li>
            </ul>
            
            <p><strong>BZZZZT! FLASH!</strong></p>
            
            <p>Krystal přestane chaoticky blikat a začne svítit klidným, bílým světlem. 
            Všechny optické anomálie se postupně uklidňují:</p>
            
            <ul>
                <li>Duhy zmizí (kromě těch způsobených skutečnými kapkami)</li>
                <li>Stíny se vrátí na správná místa</li>
                <li>Světelné paprsky přestanou být viditelné</li>
                <li>Objekty vypadají správně vzdálené</li>
            </ul>
            
            <p><em>Kwark jásá:</em> "Perfektní! Pochopil jsi základní zákony optiky - 
            světlo se šíří rovně, rychlostí c, a láme se podle Snellova zákona! 
            n₁sin(θ₁) = n₂sin(θ₂)"</p>
            
            <p>Ze stabilizovaného krystalu se uvolní zářící energetické jádro 
            s duhovými odlesky.</p>
            
            <p><strong>ZÍSKALI JSTE: Optické jádro!</strong></p>
            
            <p>"Skvělé! Už máš tři ze čtyř potřebných jader. 
            Zbývá akustická zóna a mechanická zóna!"</p>
        `,
        choices: [
            {
                id: 'continue_to_zone4',
                text: 'Pokračovat do akustické zóny',
                nextScene: 'ZONA4_PRECHOD'
            },
            {
                id: 'explore_clear_optics',
                text: 'Prozkoumat očištěnou optickou zónu',
                description: 'Možná jsou tu zajímavé optické experimenty',
                nextScene: 'ZONA3_PO_STABILIZACI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA3_PO_STABILIZACI: {
        id: 'ZONA3_PO_STABILIZACI',
        location: 'Zóna Světelných Iluzí - Po stabilizaci',
        text: `
            <p>Po stabilizaci optické zóny můžete v klidu pozorovat normální optické jevy:</p>
            
            <p><strong>Optická laboratoř Dr. Novakové:</strong></p>
            <p>Najdete kompletní sadu optických přístrojů:</p>
            
            <ul>
                <li><strong>Hranol:</strong> Rozklady světla na spektrum</li>
                <li><strong>Čočky:</strong> Spojky a rozptylky různých ohniskových vzdáleností</li>
                <li><strong>Zrcadla:</strong> Rovinná, dutá a vypouklá</li>
                <li><strong>Polarizační filtry:</strong> Pro studium polarizace světla</li>
            </ul>
            
            <p><strong>Poznámky o optických experimentech:</strong></p>
            <p><em>"Ohnisková vzdálenost čočky: f = R/(2(n-1)), kde R je poloměr křivosti a n index lomu."</em></p>
            <p><em>"Zákon odrazu: úhel dopadu = úhel odrazu"</em></p>
            <p><em>"Snellův zákon lomu: n₁sin(θ₁) = n₂sin(θ₂)"</em></p>
            
            <p>S těmito nástroji můžete provádět skutečné optické experimenty!</p>
        `,
        choices: [
            {
                id: 'do_optics_experiments',
                text: 'Provést optické experimenty',
                nextScene: 'ZONA3_OPTICKE_EXPERIMENTY',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'ready_for_acoustics',
                text: 'Připraven na akustickou zónu',
                nextScene: 'ZONA4_PRECHOD'
            }
        ]
    },

    ZONA3_OPTICKE_EXPERIMENTY: {
        id: 'ZONA3_OPTICKE_EXPERIMENTY',
        location: 'Zóna Světelných Iluzí - Optické experimenty',
        text: `
            <p>Provádíte řadu zajímavých optických experimentů:</p>
            
            <p><strong>Experiment 1 - Rozklad světla:</strong></p>
            <p>Pomocí hranolu rozložíte bílé světlo na spektrum. Pozorujete všech 7 barev 
            a měříte jejich úhly: červená se láme nejméně, fialová nejvíce.</p>
            
            <p><strong>Experiment 2 - Ohnisková vzdálenost:</strong></p>
            <p>Spojkou soustřeďujete sluneční paprsky do jednoho bodu. 
            Měříte vzdálenost: f = 15 cm.</p>
            
            <p><strong>Experiment 3 - Odraz ve zrcadle:</strong></p>
            <p>Potvrzujete zákon odrazu - úhel dopadu je roven úhlu odrazu.</p>
            
            <p><em>Kwark je nadšený:</em> "Výborně! Experimentováním jsi potvrdil základní 
            optické zákony. To je pravá věda - teorie + experiment = pochopení!"</p>
            
            <p>MAZ zaznamenává všechny výsledky do databáze fyzikálních pozorování.</p>
        `,
        choices: [
            {
                id: 'continue_to_sound_zone',
                text: 'Pokračovat do zóny zvuku',
                nextScene: 'ZONA4_PRECHOD',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    }
};

export const getZone3Scene = (sceneId) => {
    return zone3Scenes[sceneId];
};