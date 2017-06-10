import { Cell } from './cell';
import { colorEmpty, colorPredator, colorPrey, Map } from './map';

export class Ruleset {

    public map: Map;

    constructor(
        public populationLevel: number,
        public energyThroughEating: number) { }

    // No Rule
    setMap(map: Map) {
        this.map = map;
    }

    /**
     * Eine Zelle vom Typ Beute erhöht jede Iteration ihr Level, außer sie war Teil einer Fortpflanzung.
     */
    gainEnergy(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;

        if (activeCell.type === 'prey' && !activeCell.reproduced) {
            newCell.value++;
        }

        return newCell;
    }

    /**
     * Eine Zelle vom Typ Räuber vermidnert jede Iteration ihr Level.
     */
    loseEnergy(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;

        if (activeCell.type === 'predator') {
            newCell.value--;
        }

        return newCell;
    }

    /**
     * Eine Zelle wird gelöscht, wenn ihr Level <=0 fällt.
     */
    deleteCell(tuple: Cell[], activeCell: Cell): Cell {
        // const newCell: Cell = new Cell(activeCell.xCoordinate, activeCell.yCoordinate, 0, 0);
        const newCell: Cell = activeCell;

        if (activeCell.type !== 'empty' && activeCell.value <= 0) {
            newCell.value = 0;
            newCell.direction = null;
            newCell.type = 'empty';
            newCell.color = colorEmpty;
            newCell.id = 0;
        }

        return newCell;
    }

    /**
     * Eine Zelle vom Typ Beute wird für die nächste Iteration nicht mehr als Teil der Fortpflanzung betrachtet.
     */
    unmarkReproduktion(tuple: Cell[], activeCell: Cell): Cell {


        const newCell: Cell = activeCell;

        if (activeCell.reproduced) {
            newCell.reproduced = false;
        }

        return newCell;
    }

    /**
     * Eine Zelle vom Typ Beute erhöht erzeugt eine neue Zelle vom Typ Beute mit dem Level=1,
     * wenn ihr eigenes Level das notwengie PopulationsLevel erreicht hat und
     * der ausreichende Platz dafür vorhanden ist.
     * Ihr Level wird dabei halbiert.
     */
    populate(tuple: Cell[], activeCell: Cell): Cell {

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
            newCell.reproduced = true;
        }

        return newCell;

    }

    /**
     * Eine Zelle vom Typ Beute entscheidet, in welche Richtung sie sich bewegen möchte.
     * Dies passiert zufällig und kann nur auf freie Felder geschehen.
     * In dieser Regel findet noch keine Bewegung statt, sondern nur die Bestimmung der Richtung.
     */
    moveDirectionPrey(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;
        const potentialDirections: number[] = [];

        if (activeCell.type === 'prey' &&
            !activeCell.reproduced) {
            // get aviallable fields
            tuple.forEach((cell, index) => {
                if (cell.type === 'empty') {
                    potentialDirections.push(index);
                }
            });

            // choose direction to go to
            if (potentialDirections.length !== 0) {
                newCell.direction = potentialDirections[Math.floor((Math.random() * potentialDirections.length))];
            }
        }
        return newCell;
    }

    /**
     * Eine Zelle vom Typ Räuber entscheidet, in welche Richtung sie sich bewegen möchte.
     * Der Räuber bewegt sich auf das Feld einer Beute zu.
     * Wenn keine Beute im Umkreis ist, bewegt sich der Räuber auf ein zufälliges Feld.
     */
    moveDirectionPredator(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;
        const potentialDirections: number[] = [];

        if (activeCell.type === 'predator') {
            // search for prey or availlable fields
            tuple.forEach((cell, index) => {
                if (cell.type === 'prey') {
                    newCell.direction = index;
                    return newCell;
                }else if (cell.type === 'empty') {
                    potentialDirections.push(index);
                }
            });

            // choose direction to go to
            if (potentialDirections.length !== 0 && newCell.direction === null) {
                newCell.direction = potentialDirections[Math.floor((Math.random() * potentialDirections.length))];
            }
        }
        return newCell;
    }

    /**
     * Eine Zelle vom Typ Beute setzt die bereits definierte Bewegung um
     * Dies basiert auf der Ausrichtung der Zelle.
     * Die Ausgangsszelle wird bei diesem Schritt geleert.
     */
    processMovementPrey(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;

        tuple.forEach((cell, index) => {
            if (
                cell.direction !== null &&
                cell.type === 'prey' &&
                activeCell.type === 'empty' &&
                !activeCell.reproduced &&
                (cell.direction + index) === 7) {
                // New cell after movement
                newCell.value = cell.value;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            } else if (
                activeCell.direction !== null &&
                activeCell.type === 'prey' &&
                !activeCell.reproduced &&
                activeCell.id === cell.id) {
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

    /**
     * Eine Zelle vom Typ Räuber setzt die bereits definierte Bewegung um
     * Dies basiert auf der Ausrichtung der Zelle.
     * Falls die neue Zelle eine Beute ist, wird diese entfernt.
     * Die Ausgangsszelle wird bei diesem Schritt geleert.
     */
    processMovementPredator(tuple: Cell[], activeCell: Cell): Cell {

        const newCell: Cell = activeCell;

        tuple.forEach((cell, index) => {
            if (activeCell.type === 'prey' &&
                cell.type === 'predator' &&
                (cell.direction + index) === 7
            ) {
                // remove prey
                newCell.value = cell.value + this.energyThroughEating;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            } else if (
                cell.direction !== null &&
                cell.type === 'predator' &&
                activeCell.type === 'empty' &&
                !activeCell.reproduced &&
                (cell.direction + index) === 7) {
                // New cell after movement
                newCell.value = cell.value;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            } else if (
                activeCell.direction !== null &&
                activeCell.type === 'predator' &&
                activeCell.id === cell.id) {
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


}
