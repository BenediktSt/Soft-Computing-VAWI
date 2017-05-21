import { Cell } from './cell';
import { colorEmpty, colorPredator, colorPrey } from './map';

export class Ruleset {

    constructor(public populationLevel: number) { }

    gainEnergy(tupel: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute erhöht jede Iteration ihr Level, außer sie war Teil einer Fortpflanzung.
         */
        const newCell: Cell = activeCell;

        if (activeCell.type === 'prey' && !activeCell.reproduced) {
            newCell.value++;
        }

        return newCell;
    }

    unmarkReproduktion(tupel: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute wird für die nächste Iteration nicht mehr als Teil der Fortpflanzung betrachtet.
         */

        const newCell: Cell = activeCell;

        if (activeCell.reproduced) {
            newCell.reproduced = false;
        }

        return newCell;
    }

    populate(tupel: Cell[], activeCell: Cell): Cell {
        /**
         * Eine Zelle vom Typ Beute erhöht erzeugt eine neue Zelle vom Typ Beute mit dem Level=1,
         * wenn ihr eigenes Level das notwengie PopulationsLevel erreicht hat und
         * der ausreichende Platz dafür vorhanden ist.
         * Ihr Level wird dabei halbiert.
         */
        const newCell: Cell = activeCell;

        // Berechnung der Neuen Zelle
        if (tupel[4].value >= this.populationLevel &&
            tupel[4].type === 'prey' &&
            newCell.type === 'empty') {
                newCell.value = 1;
                newCell.type = 'prey';
                newCell.color = colorPrey;
                newCell.reproduced = true;
                // newCell.id = newId;
                return newCell;
        }


        // Berechnung der Ausgangszelle
        if (activeCell.type === 'prey' &&
            activeCell.value >= this.populationLevel &&
            tupel[3].reproduced &&
            tupel[3].value === 1) {
                newCell.value = Math.floor(activeCell.value / 2);
                console.log(newCell.value);
                newCell.reproduced = true;
        }

        return newCell;

    }










    /*
    rule(tupel: Cell[], activeCell: Cell): Cell {

    }*/
}
