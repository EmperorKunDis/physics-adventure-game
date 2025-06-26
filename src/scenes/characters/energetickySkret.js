// Energetický Skřet character interactions
export const energetickySkretScenes = {
    
    SKRET_OFFER_HELP: {
        id: 'SKRET_OFFER_HELP',
        location: 'ARFZ - Zzzikova nabídka pomoci',
        text: `
            <p><em>Energetický Skřet Zzzik se k vám přiblíží s nadšeným výrazem:</em></p>
            
            <p><strong>Zzzik:</strong> "Zzzzap! Vidím, že máš problémy s tou anomálií! 
            Zzzik umí pomoct! Mám speciální znalosti o energetických polích!"</p>
            
            <p>Skřet vypráví:</p>
            <p>"Zzzik žije v ARFZ už dlouho... zzzap! Viděl jsem mnoho anomálií! 
            Tato gravitační anomálie je zvláštní - má obrácený energetický tok!"</p>
            
            <p><strong>Zzzikova nabídka:</strong></p>
            <ul>
                <li>🔋 Může vám ukázat skryté energetické vzorce</li>
                <li>⚡ Může zvýšit efektivitu vašich nástrojů</li>
                <li>🔍 Může odhalit skryté části anomálie</li>
                <li>🌟 Může vás naučit energetické manipulace</li>
            </ul>
            
            <p><strong>Zzzik:</strong> "Ale Zzzik potřebuje energii! Dáš mi trochu své energie, 
            já ti pomůžu s anomálií! Zzzzap! Dobrý obchod!"</p>
            
            <p><em>Poznámka:</em> Cítíte, že je Zzzik upřímný a chce skutečně pomoci.</p>
        `,
        choices: [
            {
                id: 'accept_help',
                text: 'Přijmout Zzzikovu pomoc',
                nextScene: 'SKRET_ENERGY_EXCHANGE',
                actions: [
                    { type: 'setStoryFlag', flag: 'skretOfferedHelp', value: true },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_details',
                text: 'Zeptat se na podrobnosti jeho pomoci',
                nextScene: 'SKRET_HELP_DETAILS',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'polite_decline',
                text: 'Zdvořile odmítnout - zatím si chci zkusit poradit sám',
                nextScene: 'SKRET_UNDERSTANDING_DECLINE',
                actions: [
                    { type: 'setStoryFlag', flag: 'skretHelpDeclined', value: true }
                ]
            }
        ]
    },

    SKRET_HIDDEN_CONTROLS: {
        id: 'SKRET_HIDDEN_CONTROLS',
        location: 'ARFZ - Zzzikovy skryté ovladače',
        text: `
            <p><em>Zzzik vás odvede ke zdánlivě prázdné stěně a ukáže na ni tlapkou:</em></p>
            
            <p><strong>Zzzik:</strong> "Zzzap! Tady jsou skryté ovladače! Normální oči je nevidí, 
            ale Zzzik má energetické vidění!"</p>
            
            <p>Když se podíváte pozorněji, začnete rozpoznávat slabé obrysy:</p>
            <ul>
                <li>🔹 Energetický regulátor gravitace</li>
                <li>🔹 Harmonický stabilizátor</li>
                <li>🔹 Polaritní invertor</li>
                <li>🔹 Kvantový korektor</li>
            </ul>
            
            <p><strong>Zzzik vysvětluje:</strong></p>
            <p>"Tato zařízení řídí tok energie v anomálii! Zzzzap! 
            Normální lidé je nevidí, protože jsou v jiném spektru!"</p>
            
            <p><strong>Zzzik:</strong> "Ale pozor! Špatné nastavení může anomálii zhoršit! 
            Potřebujete pochopit energetické vzorce!"</p>
            
            <div class="bg-yellow-50 p-3 rounded-lg">
                <p><strong>Zzzikova rada:</strong> "Gravitační energie má vzorec: 
                E_grav = -G*M*m/r, ale tady je to: E_grav = +G*M*m/r*α
                kde α = energetický koeficient anomálie!"</p>
            </div>
            
            <p><em>S touto informací můžete lépe pochopit anomálii!</em></p>
        `,
        choices: [
            {
                id: 'study_controls',
                text: 'Studovat skryté ovladače podrobně',
                nextScene: 'SKRET_CONTROL_ANALYSIS',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'addToInventory', value: 'energetickeOkno' }
                ]
            },
            {
                id: 'ask_about_pattern',
                text: 'Zeptat se více na energetické vzorce',
                nextScene: 'SKRET_ENERGY_PATTERNS',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'try_adjustment',
                text: 'Zkusit opatrně upravit nastavení',
                nextScene: 'SKRET_CAREFUL_ADJUSTMENT',
                conditions: [
                    { type: 'minUnderstanding', level: 2 }
                ],
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'need_more_knowledge',
                text: 'Potřebuji nejdřív více znalostí',
                nextScene: 'ZONA1_STUDIUM_POKRACOVANI',
                actions: [
                    { type: 'setStoryFlag', flag: 'foundHiddenControls', value: true }
                ]
            }
        ]
    },
    ENCOUNTER_SKRET_1: {
        id: 'ENCOUNTER_SKRET_1',
        location: 'Zóna Nestabilní Gravitace - Setkání se Skřetem',
        text: `
            <p>Náhle se před vámi objeví malé, roztomilé stvoření s velkými zelenými očima 
            a svítícími tečkami na kůži. Vypadá jako směs mezi skřítkem a salamandrem, 
            ale svítí jemným modrým světlem.</p>
            
            <p><strong>"BZZZZT! BZIP!"</strong> vydává zvuky a jeho tečky začnou pulzovat rychleji 
            s blížící se gravitační anomálií.</p>
            
            <p><em>"Ahá! Energetický Skřet!"</em> ozývá se Kwark z MAZ. <em>"Buď opatrný - je hladový!"</em></p>
            
            <p>Skřet se na vás dívá zvědavě a mluví vysokým, pípavým hlasem:</p>
            
            <p><strong>"Bzip bzip! Nový-člověk-zde! Máš-mnoho-energie-okolo-sebe! 
            Gravitace-rozbita-je-lahodné-jídlo! Pomoc-můžu-nabízet, ale-jídlo-potřebuji!"</strong></p>
            
            <p>Jeho oči se upřou na váš MAZ a světélka na kůži začnou pulzovat rychleji.</p>
        `,
        choices: [
            {
                id: 'polite_greeting',
                text: 'Zdvořile se představit',
                description: 'Diplomaie často funguje nejlépe',
                nextScene: 'SKRET_FRIENDLY_CHAT',
                actions: [
                    { type: 'setStoryFlag', flag: 'skretFriendly', value: true }
                ]
            },
            {
                id: 'ask_about_help',
                text: 'Zeptat se, jak může pomoci',
                nextScene: 'SKRET_OFFER_HELP'
            },
            {
                id: 'protective_of_maz',
                text: 'Chránit MAZ před jeho zrakem',
                description: 'Kwark varoval před tímto',
                nextScene: 'SKRET_MAZ_INTEREST',
                actions: [
                    { type: 'setStoryFlag', flag: 'protectedMAZ', value: true }
                ]
            },
            {
                id: 'ignore_creature',
                text: 'Ignorovat stvoření a jít dál',
                nextScene: 'SKRET_FOLLOWS'
            }
        ]
    },

    SKRET_FRIENDLY_CHAT: {
        id: 'SKRET_FRIENDLY_CHAT',
        location: 'Zóna Nestabilní Gravitace - Rozhovor se Skřetem',
        text: `
            <p>Rozhodnete se k přístupu se zdvořilostí. Ukloníte se lehce a představíte se:</p>
            
            <p>"Ahoj! Jsem [vaše jméno] a jsem tu poprvé. Jsem rád, že tě potkávám."</p>
            
            <p>Skřetovy oči se rozjasnily a jeho světélka začala pulzovat v přátelském rytmu.</p>
            
            <p><strong>"Bzip bzip! Zdvořilý-člověk! To-je-vzácné! Většina-lidé-mě-ignoruje-nebo-se-bojí. 
            Já-jsem-Zzzik! Žiju-zde-dlouho-dlouho-dlouho!"</strong></p>
            
            <p>Zzzik se posadí na kámen a pokračuje:</p>
            
            <p><strong>"Anomálie-jsou-moje-jídlo! Když-fyzika-rozbita-je, já-sílu-čerpám! 
            Ale-ty-chceš-opravit-ano? To-znamená-méně-jídla... ale-možná-pomoc-dát-mohu!"</strong></p>
            
            <p><em>Kwark šeptá:</em> "Výborně! Získal jsi si jeho přízeň. To může být velmi užitečné."</p>
        `,
        choices: [
            {
                id: 'ask_about_alternative_food',
                text: 'Zeptat se na alternativní zdroje energie',
                description: 'Pokusit se vyřešit jeho problém s jídlem',
                nextScene: 'SKRET_FOOD_SOLUTION',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_for_advice',
                text: 'Požádat o radu ohledně gravitačních anomálií',
                nextScene: 'SKRET_GRAVITY_ADVICE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'offer_partnership',
                text: 'Navrhnout spolupráci',
                nextScene: 'SKRET_PARTNERSHIP'
            }
        ]
    },

    SKRET_FOOD_SOLUTION: {
        id: 'SKRET_FOOD_SOLUTION',
        location: 'Zóna Nestabilní Gravitace - Řešení problému',
        text: `
            <p>"Zzziku, co kdybychom našli jiný zdroj energie pro tebe? 
            Musí existovat něco jiného než rozbité fyzikální zákony."</p>
            
            <p>Skřetovy oči se rozšířily zvědavostí:</p>
            
            <p><strong>"Bzip! Chytrý-člověk! Ano-ano! Jiné-energie-existují! 
            Tepelná-energie-je-chutná! Elektrická-energie-je-šťavnatá! 
            Světelná-energie-je-sladká-jako-med!"</strong></p>
            
            <p>Vytáhne malý, svítící krystal z kapsy:</p>
            
            <p><strong>"Toto-muj-zásobník-energie! Ale-prázdný-skoro-je! 
            Když-ty-opravíš-gravitaci, já-najdu-jiné-anomálie-k-jídlu! 
            Termodynamika-zóna-má-hodně-tepelné-energie!"</strong></p>
            
            <p><em>Kwark komentuje:</em> "Skvělé řešení! Ukázal jsi mu, že nemusí bojovat proti opravám, 
            ale může najít výživu jinde."</p>
            
            <p>Zzzik vypadá nadšeně a nabízí:</p>
            
            <p><strong>"Výměna-dobrá! Já-ukážu-ti-tajné-cesty-ke-krystalu! 
            Ty-slíbíš-pomoc-najít-nové-jídlo!"</strong></p>
        `,
        choices: [
            {
                id: 'accept_deal',
                text: 'Souhlasit s výměnou',
                description: 'Slíbit pomoc při hledání nových zdrojů energie',
                nextScene: 'SKRET_SECRET_PATH',
                actions: [
                    { type: 'setStoryFlag', flag: 'skretAlliance', value: true },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'negotiate_terms',
                text: 'Vyjednat podmínky dohody',
                nextScene: 'SKRET_NEGOTIATION'
            }
        ]
    },

    SKRET_SECRET_PATH: {
        id: 'SKRET_SECRET_PATH',
        location: 'Zóna Nestabilní Gravitace - Tajná cesta',
        text: `
            <p><strong>"Bzip bzip! Výborně-výborně! Následuj-mě!"</strong></p>
            
            <p>Zzzik začne poskakovat směrem k místu, které vypadá jako neprůchodná stěna kamenů. 
            Ale když se k ní přiblížíte, zjistíte, že to je optická iluze - je tu skrytý průchod!</p>
            
            <p>Prolez úzkým tunelem vedete oba a vynoříte se přímo u základu spirálovité stezky 
            vedoucí k hlavnímu gravitačnímu krystalu.</p>
            
            <p><strong>"Tady-tajná-cesta! Většina-lidí-hledá-dlouho-dlouho! 
            Ale-Zzzik-zná-všechny-zkratky!"</strong></p>
            
            <p>Máte nyní přímý přístup ke krystalu, což vám ušetří hodně času a úsilí.</p>
            
            <p><em>Kwark se diví:</em> "Úžasné! S jeho pomocí jsi získal přístup k anomálii 
            mnohem efektivněji než jakýkoliv předchozí návštěvník!"</p>
            
            <p>Zzzik sedí u vchodu tunelu a čeká:</p>
            
            <p><strong>"Já-čekám-tady! Když-gravitace-opravena, ty-pomůžeš-najít-nové-jídlo-ano?"</strong></p>
        `,
        choices: [
            {
                id: 'approach_crystal_directly',
                text: 'Jít přímo ke krystalu',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'setStoryFlag', flag: 'usedSecretPath', value: true },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'thank_zzzik_first',
                text: 'Nejdříve poděkovat Zzzikovi',
                nextScene: 'SKRET_THANKS',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    SKRET_THANKS: {
        id: 'SKRET_THANKS',
        location: 'Zóna Nestabilní Gravitace - Poděkování',
        text: `
            <p>"Děkuji ti, Zzziku! Bez tvé pomoci by mi to trvalo mnohem déle. 
            Opravdu jsi užitečný průvodce."</p>
            
            <p>Skřetova světélka začnou pulzovat v teplých, růžových barvách:</p>
            
            <p><strong>"Bzip bzip! Přátelství-energie-je-nejsladší-ze-všech! 
            Ty-dobrý-člověk-jsi! Zzzik-nikdy-nezapomene!"</strong></p>
            
            <p>Vytáhne malý, lesklý kámen a podá vám ho:</p>
            
            <p><strong>"Toto-pro-tebe! Kámen-přátelství! Když-potřebuješ-pomoc-v-ARFZ, 
            drž-kámen-a-myslí-na-Zzzika! Já-uslyším-a-příjdu!"</strong></p>
            
            <p>Kámen je teplý na dotek a slabě pulzuje stejným rytmem jako Zzzikova světélka.</p>
            
            <p><em>Kwark je dojatý:</em> "To je velmi vzácný dar. Kámen přátelství ti umožní 
            komunikovat se Zzzikem na dálku. Budeš ho potřebovat v dalších zónách!"</p>
        `,
        choices: [
            {
                id: 'accept_friendship_stone',
                text: 'Přijmout kámen přátelství',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addToInventory', item: 'kamenPratelstvi' },
                    { type: 'setStoryFlag', flag: 'hasSkretAlliance', value: true },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    SKRET_GRAVITY_ADVICE: {
        id: 'SKRET_GRAVITY_ADVICE',
        location: 'Zóna Nestabilní Gravitace - Rada o gravitaci',
        text: `
            <p>"Zzziku, viděl jsi zde mnoho gravitačních anomálií. Můžeš mi poradit, 
            jak je nejlépe řešit?"</p>
            
            <p>Skřet se zamyslí a jeho světélka začnou pulzovat pomaleji:</p>
            
            <p><strong>"Bzip... Gravitace-v-ARFZ-je-jako-řeka-vztek-má! 
            Když-lidé-chtějí-zastavit-řeku, staví-hráz. Ale-to-zlé-řešení! 
            Řeka-tlak-vytvoří-a-hráz-prolomí!"</strong></p>
            
            <p><strong>"Chytří-lidé-řeku-přesměrují! Nestaví-hráz, ale-kanál-nový! 
            Gravitace-stejná! Nestaví-bariéru, ale-směr-změní!"</strong></p>
            
            <p>To je překvapivě moudrá rada! Místo pokus "zastavit" gravitační anomálii 
            byste ji měl přesměrovat nebo přenastavit.</p>
            
            <p><em>Kwark přitakává:</em> "Skřet má pravdu! Nejlepší řešení fyzikálních problémů 
            často spočívá v přesměrování energií, ne v jejich potlačování."</p>
            
            <p><strong>"A-ještě-jedna-rada! Krystal-má-tři-nastavení: síla, směr, frekvence. 
            Většina-lidí-mění-jen-jedno. Ale-všechna-tři-souvisí!"</strong></p>
        `,
        choices: [
            {
                id: 'ask_about_crystal_settings',
                text: 'Zeptat se více o nastavení krystalu',
                nextScene: 'SKRET_CRYSTAL_DETAILS',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'use_redirect_approach',
                text: 'Použít přístup přesměrování',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'setStoryFlag', flag: 'redirectApproach', value: true },
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    SKRET_CRYSTAL_DETAILS: {
        id: 'SKRET_CRYSTAL_DETAILS',
        location: 'Zóna Nestabilní Gravitace - Detaily o krystalu',
        text: `
            <p><strong>"Bzip bzip! Zzzik-rád-vysvětlí!"</strong></p>
            
            <p>Skřet začne kreslit symboly do půdy svým svítícím prstem:</p>
            
            <p><strong>"Síla-nastavení: jak-moc-silná-gravitace-je! 
            Příliš-vysoká = objekty-rozdrncané! 
            Příliš-nízká = žádný-efekt!"</strong></p>
            
            <p><strong>"Směr-nastavení: kam-gravitace-táhne! 
            Nahoru, dolů, do-stran, všude-naráz! 
            Špatný-směr = chaos-velký!"</strong></p>
            
            <p><strong>"Frekvence-nastavení: jak-rychle-se-mění! 
            Vysoká-frekvence = věci-třesou-se! 
            Nízká-frekvence = stabilní-ale-nudné!"</strong></p>
            
            <p><strong>"Nejlepší-řešení: síla-nízká, směr-dolů, frekvence-nula! 
            To-dá-normální-gravitaci-jako-tvůj-domov!"</strong></p>
            
            <p>To je přesně informace, kterou potřebujete! Zzzik vám dal kompletní návod 
            na opravu gravitačního krystalu.</p>
        `,
        choices: [
            {
                id: 'thank_and_proceed',
                text: 'Poděkovat a jít k řešení',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'skretExpertAdvice', value: true }
                ]
            }
        ]
    },

    SKRET_MAZ_INTEREST: {
        id: 'SKRET_MAZ_INTEREST',
        location: 'Zóna Nestabilní Gravitace - Ochrana MAZ',
        text: `
            <p>Rychle schovete MAZ za záda, protože si pamatujete Kwarkovo varování.</p>
            
            <p>Skřetovy oči se smutně roztáhnou:</p>
            
            <p><strong>"Oooh... Člověk-se-bojí-Zzzika... To-často-se-stává. 
            Zzzik-není-zlý! Jen-hladový-a-zařízení-voní-jako-dobrá-energie..."</strong></p>
            
            <p>Sedí si na kámen a vypadá smutně. Jeho světélka se ztlumily.</p>
            
            <p><em>Kwark šeptá:</em> "Možná byl můj zákaz příliš přísný. Skřet nechce ublížit, 
            jen se živí energií. Možná by bylo lepší s ním jednat otevřeně."</p>
            
            <p><strong>"Když-člověk-nemá-důvěru, Zzzik-pomoci-nemůže. 
            Ale-přesto-rada-jedna: krystal-na-obloze-má-tři-tlačítka, 
            ne-jen-jedno-co-vidíš!"</strong></p>
            
            <p>I přes vaši opatrnost vám poskytl užitečnou informaci!</p>
        `,
        choices: [
            {
                id: 'apologize_and_trust',
                text: 'Omluvit se a projevit důvěru',
                nextScene: 'SKRET_SECOND_CHANCE',
                actions: [
                    { type: 'setStoryFlag', flag: 'apologizedToSkret', value: true }
                ]
            },
            {
                id: 'thank_for_advice',
                text: 'Poděkovat za radu a pokračovat',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'skretAdviceOnly', value: true }
                ]
            },
            {
                id: 'ask_about_hidden_buttons',
                text: 'Zeptat se na skrytá tlačítka',
                nextScene: 'SKRET_HIDDEN_CONTROLS'
            }
        ]
    },

    SKRET_SECOND_CHANCE: {
        id: 'SKRET_SECOND_CHANCE',
        location: 'Zóna Nestabilní Gravitace - Druhá šance',
        text: `
            <p>"Promiň, Zzziku. Nechtěl jsem tě urazit. Jen jsem byl opatrný, 
            protože jsem tady nový a neznám zdejší pravidla."</p>
            
            <p>Skřetova světélka se okamžitě rozjasnila:</p>
            
            <p><strong>"Bzip bzip! Omluva-přijata! Opatrnost-je-dobrá-věc! 
            Zzzik-rozumí! Mnoho-nebezpečných-věcí-v-ARFZ-je!"</strong></p>
            
            <p>Pomalu vytáhnete MAZ a ukážete mu ho:</p>
            
            <p>"Tohle je moje pomůcka. Můžeš se na ni podívat, ale prosím, neublížej jí."</p>
            
            <p><strong>"Óóóh! Krásná-technologie! Zzzik-jen-kouká, nedotýká! 
            Má-velmi-čistou-energii! Profesor-uvnitř-dobrý-člověk!"</strong></p>
            
            <p><em>Kwark se ozvává:</em> "Vidím, že Skřet rozpoznává mou přítomnost. 
            To je fascinující - cítí energetické vzorce vědomí!"</p>
            
            <p><strong>"Teď-důvěra-máme! Zzzik-může-pomoc-skutečnou-dát!"</strong></p>
        `,
        choices: [
            {
                id: 'accept_real_help',
                text: 'Přijmout skutečnou pomoc',
                nextScene: 'SKRET_REAL_HELP',
                actions: [
                    { type: 'setStoryFlag', flag: 'skretTrustEstablished', value: true }
                ]
            }
        ]
    },

    SKRET_REAL_HELP: {
        id: 'SKRET_REAL_HELP',
        location: 'Zóna Nestabilní Gravitace - Skutečná pomoc',
        text: `
            <p><strong>"Poslouchej-dobře! Zzzik-ukáže-veliké-tajemství!"</strong></p>
            
            <p>Skřet se podívá kolem sebe, jako by se ujišťoval, že nikdo neposlouchá:</p>
            
            <p><strong>"Krystal-na-obloze-není-skutečný-zdroj! Je-to-jen-projekce! 
            Skutečný-krystal-je-pod-zemí-tady-pod-našima-nohama!"</strong></p>
            
            <p>Začne kopat v půdě a po chvíli odkryje velký, pulzující krystal 
            zabudovaný přímo do země!</p>
            
            <p><strong>"Tady-pravý-gravitační-generátor! Ten-nahoře-jen-hologram-je! 
            Když-tento-zde-opravíš, všechno-se-stabilizuje!"</strong></p>
            
            <p><em>Kwark je šokován:</em> "Neuvěřitelné! Všichni předchozí návštěvníci 
            se snažili dostat k projekci místo k reálnému zdroji!"</p>
            
            <p>Na skutečném krystalu jsou jasně viditelná ovládání se třemi sekcemi: 
            SÍLA, SMĚR, FREKVENCE - přesně jak Zzzik popisoval.</p>
        `,
        choices: [
            {
                id: 'fix_real_crystal',
                text: 'Opravit skutečný krystal',
                nextScene: 'ZONA1_SKUTECNA_OPRAVA',
                actions: [
                    { type: 'setStoryFlag', flag: 'foundRealCrystal', value: true },
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ZONA1_SKUTECNA_OPRAVA: {
        id: 'ZONA1_SKUTECNA_OPRAVA',
        location: 'Zóna Nestabilní Gravitace - Oprava pravého zdroje',
        text: `
            <p>S Zzzikovými znalostmi a přístupem ke skutečnému krystalu můžete 
            konečně vyřešit gravitační anomálii správně.</p>
            
            <p>Postupně upravujete nastavení:</p>
            <ul>
                <li><strong>SÍLA:</strong> Snižujete z "MAXIMUM" na "STANDARD" (9.8)</li>
                <li><strong>SMĚR:</strong> Měníte z "CHAOS" na "DOWN" (dolů)</li>
                <li><strong>FREKVENCE:</strong> Nastavujete z "VARIABLE" na "CONSTANT" (0)</li>
            </ul>
            
            <p>Krystal přestane chaoticky pulzovat a začne svítit klidným, stálým světlem.</p>
            
            <p>Projekce na obloze zmizí a všechny anomálie se uklidní. 
            Kameny začnou padat normálně dolů, gravitace je stabilní.</p>
            
            <p><strong>"BZIP BZIP! Výborně-výborně!"</strong> jásá Zzzik. 
            <strong>"Teď-Zzzik-může-jít-hledat-termodynamické-anomálie-k-jídlu!"</strong></p>
            
            <p>Ze skutečného krystalu se uvolní mnohem větší energetické jádro 
            než by se získalo z projekce.</p>
            
            <p><strong>ZÍSKALI JSTE: Dokonalé gravitační jádro!</strong></p>
        `,
        choices: [
            {
                id: 'thank_zzzik_and_continue',
                text: 'Poděkovat Zzzikovi a pokračovat',
                nextScene: 'ZONA2_PRECHOD',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'addEnergeticCore' }, // Bonus za nalezení pravého řešení
                    { type: 'setStoryFlag', flag: 'zone1PerfectSolution', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    }
};

// Helper function to add character scenes to the main scene system
export const getCharacterScene = (sceneId) => {
    return energetickySkretScenes[sceneId];
};