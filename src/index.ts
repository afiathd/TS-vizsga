import { Participant } from "./models/participant";
import { Hiphop,Rock } from "./models/category";
import { ParticipantManager } from "./services/participantManagement";
import { EventManager } from "./services/eventManager";


const festival = new EventManager('2024.08.10.');

const hipHopCategory = new Hiphop('hip-hip', '90-s');
const metalCategory = new Rock('metal-rock', 'heavy-metal');
const classicRockCategory = new Rock('classic', 'classic-rock');


const eloado1: Participant = {
    id: 1,
    name: 'Run DMC',
    category: hipHopCategory,
    showTime: '18.30'
}
const eloado2: Participant = {
    id: 2,
    name: 'Metallica',
    category: metalCategory,
    showTime: '19.30'
}
const eloado3: Participant = {
    id: 3,
    name: 'Led Zeppelin',
    category: classicRockCategory,
    showTime: '20.30'
}
const eloado4: Participant = {
    id: 4,
    name: 'QUEEN',
    category: classicRockCategory,
    showTime: '21.30'
}

const eloadok = new ParticipantManager();

eloadok.addParticipant(eloado1);
eloadok.addParticipant(eloado2);
eloadok.addParticipant(eloado3);
eloadok.addParticipant(eloado4);

console.log("előadók gyűjteménye:");
eloadok.listParticipants().forEach(eloado => console.log(eloado.name));



festival.addParticipant(eloado1);
festival.addParticipant(eloado2);
festival.addParticipant(eloado3);
festival.addParticipant(eloado4);
festival.removeParticipant(eloado4);

console.log("előadók listája:");
festival.listParticipants().forEach(eloado => console.log(eloado.showTime + ': ' + eloado.name));


class EventApp{

    private festivals: Map<number,EventManager> = new Map

    addFestival(id: number, festival: EventManager): void {
        this.festivals.set(id, festival);
    }

    /* ... */
}