import { Cell } from './cell';
import { colorEmpty, colorPredator, colorPrey, Map } from './map';

export class Ruleset {

    public map: Map;

    constructor(public populationLevel: number) { }

    // No Rule
    setMap(map: Map) {
        this.map = map;
    }

    gainEnergy(tuple: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute erhöht jede Iteration ihr Level, außer sie war Teil einer Fortpflanzung.
         */
        const newCell: Cell = activeCell;

        if (activeCell.type === 'prey' && !activeCell.reproduced) {
            newCell.value++;
        }

        return newCell;
    }

    unmarkReproduktion(tuple: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute wird für die nächste Iteration nicht mehr als Teil der Fortpflanzung betrachtet.
         */

        const newCell: Cell = activeCell;

        if (activeCell.reproduced) {
            newCell.reproduced = false;
        }

        return newCell;
    }

    populate(tuple: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute erhöht erzeugt eine neue Zelle vom Typ Beute mit dem Level=1,
         * wenn ihr eigenes Level das notwengie PopulationsLevel erreicht hat und
         * der ausreichende Platz dafür vorhanden ist.
         * Ihr Level wird dabei halbiert.
         */
        const newCell: Cell = activeCell;

        // Berechnung der Neuen Zelle
        if (tuple[4].value >= this.populationLevel &&
            tuple[4].type === 'prey' &&
            newCell.type === 'empty') {
            newCell.value = 1;
            newCell.type = 'prey';
            newCell.color = colorPrey;
            newCell.reproduced = true;
            newCell.id = this.map.getNewID();
            return newCell;
        }


        // Berechnung der Ausgangszelle
        if (activeCell.type === 'prey' &&
            activeCell.value >= this.populationLevel &&
            tuple[3].reproduced &&
            tuple[3].value === 1) {
            newCell.value = Math.floor(activeCell.value / 2);
            console.log(newCell.value);
            newCell.reproduced = true;
        }

        return newCell;

    }

    moveDirection(tuple: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute oder Räuber entscheidet, in welche Richtung sie sich bewegen möchte.
         * Dies passiert zufällig und kann nur auf freie Felder geschehen.
         * In dieser Regel findet noch keine Bewegung statt, sondern nur die Bestimmung der Richtung.
         */
        const newCell: Cell = activeCell;
        const potentialDirections: Number[] = [];

        if (activeCell.type !== 'empty') {
            // get aviallable fields
            tuple.forEach((cell, index) => {
                if (cell.type === 'empty') {
                    potentialDirections.push(index);
                }
            });

            // choose direction to go to
            if (potentialDirections.length !== 0) {
                newCell.direction = Math.floor((Math.random() * potentialDirections.length));
            }
        }
        return newCell;
    }

    processMovement(tuple: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute oder Räuber entscheidet, in welche Richtung sie sich bewegen möchte.
         * Dies passiert zufällig und kann nur auf freie Felder geschehen.
         * In dieser Regel findet noch keine Bewegung statt, sondern nur die Bestimmung der Richtung.
         */
        const newCell: Cell = activeCell;

        tuple.forEach((cell, index) => {
            if (cell.direction !== null &&
                activeCell.type === 'empty' &&
                (cell.direction + index) === 7) { // Wenn Position und Ausrichtung passend sind
                // New cell after movement
                newCell.value = cell.value;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            } else if (
                activeCell.direction !== null &&
                activeCell.type !== 'empty' &&
                cell.id === activeCell.id) {
                // reset the old Cell
                newCell.value = 0;
                newCell.direction = null;
                newCell.type = 'empty';
                newCell.color = colorEmpty;
                newCell.id = 0;
            }
        });
        return newCell;
    }










    /*
    rule(tuple: Cell[], activeCell: Cell): Cell {

    }*/
}
