import React from "react";

/**
 * @description
 *
 * TRINNSKATT 2019
 *
 * Trinnskatten for personlige skatteytere beregnes i
 * den enkeltes person sin lønnsinntekt.
 * Trinnskatten består av flere trinn. For de første
 * 174 000 kroner av personinntekt skal man ikke betale trinnskatt.
 *
 *                Inntekt mellom 0 - 174 000 kroner         |   Ingen trinnskatt
 * Trinn 1    |   Inntekt mellom 174 000 - 245 650 kroner   |   1,9 % trinnskatt
 * Trinn 2    |   Inntekt mellom 245 650 - 617 500 kroner   |   4,2 % trinnskatt
 * Trinn 3    |   Inntekt mellom 617 500 - 964 800 kroner   |   13,2 % trinnskatt
 *
 */

export const calculateTrinnskatt = (salary) => {
  return -1;
}