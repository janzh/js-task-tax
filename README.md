# Sopra Steria intervju-kode

### Beskrivelse
Oppgaven er å lage funksjonalitet for en kalkulator som beregner trinnskatt.

`calculator.test.js`: Her ligger det tester som sjekker at kalkulatoren fungerer.

`calculator.js`: Her skal det kodes logikk for kalkulatoren.

### Hva skal du gjøre?

Ta en test av gangen i `calulcator.js`: Fjern kommentar, kjør test og se at testen feiler.
Din oppgave er å få denne testen til å passere.
Dette gjøres ved å skrive kode i filen `calculator.js` og kjøre testen.
Når en test passerer, går du videre til neste test.

Tester kan kjøres i IDE eller med `npm test`.

### Beskrivelse av trinnskatt

 Trinnskatten for personlige skatteytere beregnes i den enkeltes person sin lønnsinntekt.
 Trinnskatten består av flere trinn. For de første
 174 000 kroner av personinntekt skal man ikke betale trinnskatt. 
 
 Trinn    |   Inntekt mellom 0 - 174 000 kroner         |   Skatteprosent
 -------  | -----------------------------------------   | ----------------------
    0     |   Inntekt mellom 0 - 174 000 kroner         |   Ingen trinnskatt
    1     |   Inntekt mellom 174 000 - 245 650 kroner   |   1,9 % trinnskatt
    2     |   Inntekt mellom 245 650 - 617 500 kroner   |   4,2 % trinnskatt
    3     |   Inntekt mellom 617 500 - 964 800 kroner   |   13,2 % trinnskatt

