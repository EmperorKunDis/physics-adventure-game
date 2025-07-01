# Fyzikální dobrodružství: Záhadný Portál

## Popis

Edukativní textová hra zaměřená na výuku fyziky pro žáky 6. třídy ZŠ a 1. ročníku SŠ (věk 11-12 let). Hráč se ocitá v "Alternativní Realitě Fyzikálních Zákonů" (ARFZ), kde musí řešit fyzikální hádanky a anomálie, aby se dostal zpět domů.

[Open Game](https://emperorkundis.github.io/physics-adventure-game/)

## Herní mechaniky

- **Volby z možností**: Jednoduchá interakce bez textového parseru
- **Vzdělávací obsah**: Každá zóna se zaměřuje na konkrétní fyzikální téma
- **MAZ systém**: Multifunkční Analytický Záznamník pro nápovědy a výpočty
- **Progrese**: Získávání energetických jader a fyzikálních fragmentů
- **Ukládání**: Automatické i manuální ukládání postupu

## Technologie

- **Frontend**: React 18 s hooks
- **Styling**: Tailwind CSS
- **State management**: React Context API
- **Persistence**: localStorage
- **Typography**: Inter font
- **Responsive**: Optimalizováno pro mobil i desktop

## Spuštění

```bash
cd physics-adventure-game
npm install
npm start
```

Aplikace se spustí na `http://localhost:3000`

## Struktura projektu

```
src/
├── components/          # React komponenty
│   ├── GameScreen.js   # Hlavní herní obrazovka
│   ├── Choices.js      # Systém voleb
│   └── MAZ.js          # MAZ interface
├── context/            # React Context pro state management
│   └── GameContext.js
├── scenes/             # Herní obsah
│   ├── intro/          # Úvodní sekvence
│   └── zone1_gravity/  # Zóna gravitace
└── utils/              # Pomocné funkce
    └── saveSystem.js   # Ukládání/načítání hry
```

## Aktuální obsah

### ✅ Hotovo
- Kompletní úvodní sekvence s portálem
- Zóna 1: Nestabilní gravitace s plnou sadou scén
- Systém voleb s podmínkami a akcemi
- MAZ interface s Professor Kwark mentorem
- Inventář a progresní systém
- Ukládání/načítání včetně export/import
- Tmavý/světlý režim
- Responsive design

### 🔄 Plánováno
- Zóna 2: Termodynamický chaos
- Zóna 3: Optické iluze
- Zvukové efekty a ambientní hudba
- Rozšířený hint systém
- Více fyzikálních experimentů

## Vzdělávací cíle

- **Gravitace**: Síla, hmotnost, gravitační konstanta
- **Vědecká metoda**: Pozorování, hypotézy, experimenty
- **Matematické modelování**: Rovnice a jejich význam
- **Kritické myšlení**: Analýza a řešení problémů

## Cílová skupina

- **Primární**: Žáci 6. třídy ZŠ (11-12 let)
- **Sekundární**: Studenti 1. ročníku SŠ
- **Jazyk**: Čeština
- **Přístupnost**: Keyboard navigation, screen reader friendly

## Licencování

Edukativní projekt pro výuku fyziky.
